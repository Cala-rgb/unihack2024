import torch
import cv2
import numpy as np
import matplotlib.pyplot as plt

def get_depth(image_path):
    # Load MiDaS model from torch.hub
    model = torch.hub.load("intel-isl/MiDaS", "MiDaS_small")  # Choose "MiDaS_small" for faster performance or "MiDaS" for better quality
    model.eval()

    # Load transforms to prepare the image for MiDaS
    midas_transforms = torch.hub.load("intel-isl/MiDaS", "transforms")
    transform = midas_transforms.small_transform  # Use small_transform if using "MiDaS_small"

    # Load and preprocess your image
    # image_path = "img2.jpg"
    img = cv2.imread(image_path)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)  # Convert to RGB for compatibility with PyTorch models

    # Transform the image to prepare for depth prediction
    input_batch = transform(img).unsqueeze(0)  # Add batch dimension

    # Remove any extra dimensions to ensure the input shape is [1, 3, H, W]
    if input_batch.shape[1] == 1:  # if channel dimension is 1, squeeze it
        input_batch = input_batch.squeeze(1)

    # Debugging step: Verify the input shape before passing to model
    print("Input shape:", input_batch.shape)  # Should print [1, 3, H, W]

    # Run the model to get depth estimation
    with torch.no_grad():
        prediction = model(input_batch)

    # Remove batch dimension and normalize the depth map for visualization
    depth_map = prediction.squeeze().cpu().numpy()
    depth_map = cv2.normalize(depth_map, None, 0, 1, norm_type=cv2.NORM_MINMAX)

    # Display the depth map using matplotlib
    plt.imshow(depth_map, cmap="inferno")
    plt.colorbar()
    plt.show()

    # Save the depth map as an image
    depth_image_path = "output_depth_map.jpg"
    cv2.imwrite(depth_image_path, (depth_map * 255).astype(np.uint8))

    return depth_map

get_depth("img2.jpg")