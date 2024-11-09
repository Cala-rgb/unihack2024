import torch
import cv2
import numpy as np

def detect(image_path):
    # Load YOLOv5 model (e.g., YOLOv5s for small model)
    model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)

    # Load and preprocess the dashcam image
    # image_path = "image.png"
    image = cv2.imread(image_path)
    results = model(image)

    # Filter results to get car detections only
    detected_objects = results.pandas().xyxy[0]  # Get results as a pandas dataframe
    car_detections = detected_objects[detected_objects['name'] == 'car']

    # Analyze spacing between detected cars for potential parking spots
    parking_spots = []
    car_boxes = car_detections[['xmin', 'ymin', 'xmax', 'ymax']].values  # Get bounding boxes

    # Sort cars from left to right (for parallel parking)
    car_boxes = sorted(car_boxes, key=lambda box: box[0])

    for i in range(len(car_boxes) - 1):
        x1_right = car_boxes[i][2]  # Right x-coordinate of car i
        x2_left = car_boxes[i+1][0]  # Left x-coordinate of car i+1

        # Calculate the distance between consecutive cars
        distance = x2_left - x1_right

        # Assume a minimum width threshold for a parking spot
        min_parking_width = 500 # Adjust this threshold based on image dimensions

        if distance > min_parking_width:
            # Mark as a potential parking spot
            parking_spots.append((x1_right, x2_left))

    # Draw bounding boxes and parking spots on the image for visualization
    for box in car_boxes:
        cv2.rectangle(image, (int(box[0]), int(box[1])), (int(box[2]), int(box[3])), (255, 0, 0), 2)

    for (x1, x2) in parking_spots:
        cv2.line(image, (int(x1), int(car_boxes[0][1])), (int(x2), int(car_boxes[0][1])), (0, 255, 0), 2)

    # Save or display the result
    cv2.imwrite("output_with_parking_spots.jpg", image)  # Save with detected parking spots

    # Construct a message based on the detection results
    ok = 1
    if parking_spots:
        message = f"Potential parking spots detected between cars with distances: {[x2 - x1 for (x1, x2) in parking_spots]}"
    else:
        message = "No parking spots detected based on available spacing between cars."
        ok = 0

    return ok

