import sys
from PIL import Image

def analyze_image(image_path):
    img = Image.open(image_path)
    print(f"Analyzing {image_path}")

if __name__ == "__main__":
    image_path = sys.argv[1]
    analyze_image(image_path)