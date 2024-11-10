import sys
from PIL import Image
from get_parking import get_parking

def analyze_image(image_path):
    print(get_parking(image_path))

if __name__ == "__main__":
    # image_path = sys.argv[1]
    analyze_image("C:/Users/Deea/Desktop/unihack/unihack2024/ai/image.png")