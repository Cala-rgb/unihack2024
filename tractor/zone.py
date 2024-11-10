import xml.etree.ElementTree as ET
import json

# Define the list of zone names you're searching for
zone_names_to_find = [
    "Zona Rosie",
    "Zona Albastra",
    "Zona Verde",
    "Zona Galbena"
]

# Parse the KML file
tree = ET.parse('timpark.kml')  # Replace with the path to your KML file
root = tree.getroot()

namespace = {'kml': 'http://www.opengis.net/kml/2.2'}

zones_names_dict = {}

for zone_name_to_find in zone_names_to_find:
    names_list = []

    folder_to_search = None
    for folder in root.findall('.//kml:Folder', namespace):
        name_element = folder.find('kml:name', namespace)
        if name_element is not None and name_element.text == zone_name_to_find:
            folder_to_search = folder
            break  # Exit the loop once the folder is found

    if folder_to_search is not None:
        placemarks = folder_to_search.findall('.//kml:Placemark', namespace)

        # Loop through each placemark and extract the descriptions
        for placemark in placemarks:
            description_element = placemark.find('kml:description', namespace)
            if description_element is not None:
                # Extract the CDATA content
                description = description_element.text
                if description:
                    # Split the names by the <br> tag
                    names = description.split('<br>')

                    for name in names:
                        if 'Locuri' not in name:
                            names_list.append(name.strip())
    
    zones_names_dict[zone_name_to_find] = names_list

# Save the dictionary as a JSON file
with open('zone.json', 'w', encoding='utf-8') as json_file:
    json.dump(zones_names_dict, json_file, ensure_ascii=False, indent=4)

print("The data has been saved to 'zones_names.json'")
