import xml.etree.ElementTree as ET

# Path to your KML file
file_path = 'Sistem_Timpark.kml'

# Parse the KML file
tree = ET.parse(file_path)
root = tree.getroot()

# Namespace used in the KML file
namespace = {'kml': 'http://www.opengis.net/kml/2.2'}

# Function to extract and clean parking data from the KML structure
def extract_parking_data(root):
    parking_data_list = []
    
    for placemark in root.findall(".//kml:Placemark", namespace):
        # Name
        name = placemark.find("kml:name", namespace)
        name_text = name.text.strip() if name is not None and name.text is not None else "unnamed"
        
        # Description as Zone and Layer information
        description = placemark.find("kml:description", namespace)
        description_text = description.text.strip().replace('\n', '') if description is not None else "None"
        
        # Layer information could be parsed here if it's present as a tag or attribute
        # For demonstration, let's assume layer is provided in the description or elsewhere.
        # Here we'll set zone as a placeholder; if layer data is available, add logic to parse and assign it.

        zone = "default_zone"  # Replace or parse from description if there's specific zone info like green, red, etc.
        
        # Coordinates for poly_points
        coordinates_tag = placemark.find(".//kml:coordinates", namespace)
        poly_points = []
        
        if coordinates_tag is not None:
            coord_text = coordinates_tag.text.strip()
            coord_pairs = coord_text.split()
            for coord in coord_pairs:
                lon, lat, *_ = map(float, coord.split(","))
                poly_points.append({"latitude": lat, "longitude": lon})
        
        # Prepare data according to schema
        parking_data = {
            "name": name_text,
            "poly_points": poly_points,
            "zone": zone,
            "price": 0,
            "free_spaces": 0,
            "total_spaces": len(poly_points)
        }
        
        parking_data_list.append(parking_data)
    
    return parking_data_list

# Generate Node.js formatted output
def generate_node_output(parking_data_list):
    node_output = "const mongoose = require('mongoose');\n"
    node_output += "const { Schema } = mongoose;\n\n"
    node_output += "const parkingSchema = new Schema({\n"
    node_output += "    name: {type: String, default: \"unnamed\"},\n"
    node_output += "    poly_points: {type: [{latitude: Number, longitude: Number}], required: true},\n"
    node_output += "    zone: {type: String, default: \"None\"},\n"
    node_output += "    price: {type: Number, default: 0},\n"
    node_output += "    free_spaces: {type: Number, default: 0},\n"
    node_output += "    total_spaces: {type: Number, required: true},\n"
    node_output += "});\n\n"
    node_output += "module.exports = [\n"
    
    for parking in parking_data_list:
        node_output += "    {\n"
        node_output += f"        name: \"{parking['name']}\",\n"
        node_output += "        poly_points: [\n"
        for point in parking["poly_points"]:
            node_output += f"            {{latitude: {point['latitude']}, longitude: {point['longitude']}}},\n"
        node_output += "        ],\n"
        node_output += f"        zone: \"{parking['zone']}\",\n"
        node_output += f"        price: {parking['price']},\n"
        node_output += f"        free_spaces: {parking['free_spaces']},\n"
        node_output += f"        total_spaces: {parking['total_spaces']}\n"
        node_output += "    },\n"
    
    node_output += "];\n"
    return node_output

# Main script to process and save the output
parking_data_list = extract_parking_data(root)
node_formatted_output = generate_node_output(parking_data_list)

# Output file path
output_file_path = 'parking_data.js'
with open(output_file_path, 'w', encoding='utf-8') as file:
    file.write(node_formatted_output)

print(f"Node.js formatted parking data has been saved to {output_file_path}")
