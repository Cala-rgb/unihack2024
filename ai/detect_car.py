import torch
import cv2
import numpy as np

def detect(image_path):
    # Load YOLOv5s (small) model
    model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)

    image = cv2.imread(image_path)
    results = model(image)

    # Filter results to get car detections only
    detected_objects = results.pandas().xyxy[0]  # Get results as a pandas dataframe
    car_detections = detected_objects[detected_objects['name'] == 'car']


    car_boxes = car_detections[['xmin', 'ymin', 'xmax', 'ymax']].values 
    car_boxes = sorted(car_boxes, key=lambda box: box[0])

    for box in car_boxes:
        cv2.rectangle(image, (int(box[0]), int(box[1])), (int(box[2]), int(box[3])), (255, 0, 0), 2)

    cv2.imwrite("output_with_parking_spots.jpg", image)  # Save with detected parking spots


    return car_boxes

