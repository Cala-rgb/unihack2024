import requests
import json
import re
import xml.etree.ElementTree as ET

headers = {
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'en-US,en;q=0.9',
    'priority': 'u=1, i',
    'referer': 'https://pedaleaza.ro/vrempiste/',
    'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
}

params = {
    '_': '1731174423229',
}

response = requests.get(
    'https://pedaleaza.ro/wp-content/themes/pedaleaza-child/assets/download/current/piste_datatable.json',
    params=params,
    headers=headers,
)

PISTE = []
if response.status_code == 200:
    list_of_lists = response.json()["data"]

    for sublist in list_of_lists:
        data = {
            "name": f'Pista {str(int(str(sublist[0].split(">")[1].split("</a>")[0]).split("-")[0]))}',
            "length": float(sublist[4]),
            "totalScore": float(sublist[8]),
            "quality": float(sublist[5])
        }
        PISTE.append(data)

name_counts = {}

for pista in PISTE:
    name = pista['name']
    
    if name not in name_counts:
        name_counts[name] = 1  
    else:
        name_counts[name] += 1 

    pista['name'] = f"{name} - segment {name_counts[name]}"

with open('bike\\piste.kml', 'r', encoding='utf-8') as file:
    kml_content = file.read()

tree = ET.parse('bike\\piste.kml')
root = tree.getroot()

namespace = {'kml': 'http://www.opengis.net/kml/2.2'}

results = []

for item in PISTE:
    segment_name = item['name']
    
    for placemark in root.findall('.//kml:Placemark', namespace):
        name_elem = placemark.find('kml:name', namespace)
        if name_elem is not None and name_elem.text == segment_name:
            coordinates_elem = placemark.find('.//kml:coordinates', namespace)
            if coordinates_elem is not None:
                coordinates_text = coordinates_elem.text.strip()
                coordinates_list = [
                    [float(coord.split(',')[0]), float(coord.split(',')[1])]
                    for coord in coordinates_text.split()
                ]
                results.append({
                    "name": segment_name,
                    "geometry": {
                        "type": {
                            "type": "String",
                            "enum": ['LineString'],
                            "required": True,
                            "default": "LineString"
                        },
                        "coordinates": {
                            "type":  [coordinates_list],
                            "required": True
                        }
                    },
                    "length": item["length"],
                    "quality": item["quality"],
                    "totalScore": item["totalScore"]
                })
            break

output_path = 'bike\\piste.json'  
with open(output_path, 'w', encoding='utf-8') as output_file:
    json.dump(results, output_file, indent=4)

print(f"Data successfully extracted and saved to {output_path}")
