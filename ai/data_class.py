import pandas as pd
import scipy.io as sio
import keras
import matplotlib as plt
import numpy as np
from keras import layers
from tensorflow import data as tf_data

class Data:
    


    def getDataFrame():
        mat_data = sio.loadmat("C:/Users/Deea/Desktop/unihack/unihack2024/ai/archive/cars_annos.mat")
        data = mat_data['annotations']
        
        image_paths = data['relative_im_path'].squeeze()

        annotations_df = pd.DataFrame({
            'image_path': image_paths,
            'x_min': data['bbox_x1'].squeeze(),
            'y_min': data['bbox_y1'].squeeze(),
            'x_max': data['bbox_x2'].squeeze(),
            'y_max': data['bbox_y2'].squeeze()
        })

        annotations_df['x_min'] = annotations_df['x_min'].apply(lambda x: x[0][0])
        annotations_df['y_min'] = annotations_df['y_min'].apply(lambda x: x[0][0])
        annotations_df['x_max'] = annotations_df['x_max'].apply(lambda x: x[0][0])
        annotations_df['y_max'] = annotations_df['y_max'].apply(lambda x: x[0][0])
        annotations_df['image_path'] = annotations_df['image_path'].apply(lambda x: x[0])
        annotations_df['image_path'] = annotations_df['image_path'].str.replace('car_ims/', '')

        return annotations_df
    
    def data_augmentation(images, data_augmentation_layers):
        for layer in data_augmentation_layers:
            images = layer(images)
        return images

    def getDataset(img_size, batch_size):
        train_ds, val_ds = keras.utils.image_dataset_from_directory(
            "C:/Users/Deea/Desktop/unihack/unihack2024/ai/archive/cars_train/cars_train/",
                validation_split=0.2,
                subset="both",
                seed=1337,
                image_size=img_size,
                batch_size=batch_size,
        )

        data_augmentation_layers = [
            layers.RandomFlip("horizontal"),
            layers.RandomRotation(0.1),
        ]

        def data_augmentation(images):
            for layer in data_augmentation_layers:
                images = layer(images)
            return images

        train_ds = train_ds.map(
            lambda img, label: (data_augmentation(img), label),
            num_parallel_calls=tf_data.AUTOTUNE,
        )
        
        train_ds = train_ds.prefetch(tf_data.AUTOTUNE)
        val_ds = val_ds.prefetch(tf_data.AUTOTUNE)

        return train_ds, val_ds

        
