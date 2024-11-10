import re
import json

# Define the prices for each zone
PRICES = {
    "Zona Rosie": 2.0,
    "Zona Albastra": 1.0,
    "Zona Verde": 4.0,
    "Zona Galbena": 1.5
}

# Load zone data from zone.json
zone_file_path = 'parking\\zone\\zone.json'  # Update this path if necessary
with open(zone_file_path, 'r', encoding='utf-8') as zone_file:
    zone_data = json.load(zone_file)

# Load KML file content
file_path = 'parking\\timpark.kml'
with open(file_path, 'r', encoding='utf-8') as file:
    kml_content = file.read()

# Define regex pattern to match placemarks and extract fields
placemark_pattern = re.compile(
    r'<Placemark>.*?<name>(.*?)</name>.*?<description>(.*?)</description>.*?<coordinates>(.*?)</coordinates>.*?</Placemark>',
    re.DOTALL
)

# Initialize list to store parking data
parking_data_filtered = []

# Helper function to find the zone for a given placemark name
def get_zone_for_name(name):
    # List of words to ignore when determining zone
    ignore_words = ['tarif progresiv', 'str']
    
    # Split name into words and convert to lowercase for comparison
    name_words = set(name.lower().split())

    # Remove any ignored words from the set of words in the name
    name_words = name_words - set(word.lower() for word in ignore_words)

    # Check if any of the remaining words match a location in zone_data
    for zone, locations in zone_data.items():
        for location in locations:
            # Check if the location is a part of the name, ignoring certain words
            if any(word in name_words for word in location.lower().split()):
                return zone
    return None  # Return None if no matching zone is found

# Iterate through each match found with the placemark regex
for match in placemark_pattern.finditer(kml_content):
    # Extract name, description, and coordinates
    name = match.group(1).strip()
    
    # Skip if the name matches any of "R1", "R2", "R3", "R4", "R5", "R6", "R7", "G1", "G2", "G3", "G4", "G5", "G6", "G7", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "A1", "A2", "A3", "A4", "A5", "A6", "A7"
    if name in ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9', 'R10', 'R11', 'R12', 'R13', 'R14', 'R15',
                'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', 'G11', 'G12', 'G14', 'G15', 'G13',
                'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10', 'V11', 'V12', 'V13', 'V14', 'V15',
                'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', 'A11', 'A12', 'A13', 'A14', 'A15']:
        continue
    
    description = match.group(2).strip()
    coordinates_text = match.group(3).strip()
    
    # Modify regex to handle cases with or without a space before "Locuri"
    # and handle cases with a dash like "22 - Locuri"
    total_spaces_match = re.search(r'(\d+)(\s*-?\s*locuri)', description, re.IGNORECASE)
    
    if total_spaces_match:
        total_spaces = int(total_spaces_match.group(1))  # Extract the number
        # Ensure space between the number and "Locuri", remove any dashes
        description = re.sub(r'(\d+)\s*-?\s*locuri', r'\1 Locuri', description, flags=re.IGNORECASE)  # Normalize format
    else:
        # Handle the case where there is no proper number followed by Locuri
        total_spaces_match = re.search(r'(\d+)(\s*locuri)', description, re.IGNORECASE)
        if total_spaces_match:
            total_spaces = int(total_spaces_match.group(1))  # Extract the number
            # Normalize format to "X Locuri"
            description = re.sub(r'(\d+)\s*locuri', r'\1 Locuri', description, flags=re.IGNORECASE)
        else:
            # Handle the case where there's just a number without "Locuri"
            total_spaces_match = re.search(r'(\d+)', description)  # Capture a number alone
            if total_spaces_match:
                total_spaces = int(total_spaces_match.group(1))  # Extract the number
                description = f'{total_spaces} Locuri'  # Add "Locuri" after the number
            else:
                total_spaces = 0

    coordinates = [
        [float(coord.split(',')[0]), float(coord.split(',')[1])] for coord in coordinates_text.split()
    ]
    
    # Add the first coordinate at the end to close the polygon
    coordinates.append(coordinates[0])

    zone = get_zone_for_name(name)
    
    if not zone:
        zone = "None"
    
    # Get price based on zone
    price = PRICES.get(zone, 0.0)  
    
    parking_json = {
        "name": name,
        "geometry": {
            "type": {
                "type": "String", 
                "enum": ['Polygon'],
                "required": True,
                "default": "Polygon"
            },
            "coordinates": {
                "type": [coordinates],
                "required": True
            }
        },
        "zone": zone,
        "price": price,
        "free_spaces": 0,
        "total_spaces": total_spaces
    }
    
    parking_data_filtered.append(parking_json)

output_path = 'parking\\parking.json'  
with open(output_path, 'w', encoding='utf-8') as output_file:
    json.dump(parking_data_filtered, output_file, indent=4)

print(f"Data successfully extracted and saved to {output_path}")
