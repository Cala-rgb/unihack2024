import sys
from PIL import Image
from detect_car import detect

def analyze_image(image_path):
    print(detect(image_path))

if __name__ == "__main__":
    # image_path = sys.argv[1]
    analyze_image("C:/Users/Deea/Desktop/unihack/unihack2024/ai/img2.jpg")