import os

import keras.api
import tensorflow as tf
from tensorflow import keras
import keras

model = keras.api.models.load_model("model.keras")
img = keras.utils.load_img("image.png")

img_array = keras.utils.img_to_array(img)
img_array = keras.ops.expand_dims(img_array, 0)  # Create batch axis

predictions = model.predict(img_array)
score = float(keras.ops.sigmoid(predictions[0][0]))
print(f"This image is {100 * (1 - score):.2f}% car")