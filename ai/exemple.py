import sys
from PIL import Image
from detect_park import detect

def analyze_image(image_path):
    return detect(image_path)

if __name__ == "__main__":
    image_path = sys.argv[1]
    ok = analyze_image(image_path)
    print(ok)