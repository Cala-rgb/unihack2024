from detect_car import detect
from get_depth import get_depth
from PIL import Image
import cv2
import numpy as np

def get_parking(image_path):
    car_boxes = detect(image_path)
    depth_map = get_depth(image_path)

    img = Image.open(image_path)
    width, height = img.size

    x_ratio = width / 255
    y_ratio = height / 160

    print(width, height)

    for box in car_boxes:
        print(box[0], box[1], box[2], box[3])
        box[0] = box[0] / x_ratio
        box[1] = box[1] / y_ratio
        box[2] = box[2] / x_ratio
        box[3] = box[3] / y_ratio
        print(box[0], box[1], box[2], box[3])
        cv2.rectangle(depth_map, (int(box[0]), int(box[1])), (int(box[2]), int(box[3])), (255, 0, 0), 2)

    depth_image_path = "output_depth_map.jpg"

    cv2.imwrite(depth_image_path, (depth_map * 255).astype(np.uint8))
    

get_parking("img2.jpg")