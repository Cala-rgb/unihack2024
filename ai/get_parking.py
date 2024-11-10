from detect_car import detect
from get_depth import get_depth
from PIL import Image
import cv2
import numpy as np
import math

def get_parking(image_path):
    car_boxes = detect(image_path)
    depth_map = get_depth(image_path)

    scale_factor = 0.55/0.50

    img = Image.open(image_path)
    width, height = img.size
    d_height, d_width = depth_map.shape

    x_ratio = width / d_width
    y_ratio = height / d_height

    # print(width, height)

    for box in car_boxes:
        # print(box[0], box[1], box[2], box[3])
        box[0] = box[0] / x_ratio
        box[1] = box[1] / y_ratio
        box[2] = box[2] / x_ratio
        box[3] = box[3] / y_ratio
        # print(box[0], box[1], box[2], box[3])
        cv2.rectangle(depth_map, (int(box[0]), int(box[1])), (int(box[2]), int(box[3])), (255, 0, 0), 2)

    ok = 0
    for i in range(0, len(car_boxes)-1):
        avg1 = np.mean(depth_map[math.floor(car_boxes[i][1]):math.floor(car_boxes[i][3]),
                                  math.floor(car_boxes[i][0]):math.floor(car_boxes[i][2])])
        avg2 = np.mean(depth_map[math.floor(car_boxes[i+1][1]):math.floor(car_boxes[i+1][3]),
                                  math.floor(car_boxes[i+1][0]):math.floor(car_boxes[i+1][2])])
        print(avg1 * scale_factor, avg2 * scale_factor, (avg1-avg2) * scale_factor)
        if(abs(avg1-avg2) > 100):   # has to be calibrated
            ok = 1
        

    depth_image_path = "output_depth_map.jpg"
    cv2.imwrite(depth_image_path, (depth_map * 255).astype(np.uint8))
    return ok
    

# get_parking("img2.jpg")