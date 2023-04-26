import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, modalHandler }) => {
    return <ul className="ImageGallery">
        {images.map(image => {
          return (
            <ImageGalleryItem key={image.id} image={image} modalHandler={modalHandler} />
          );
      })}
  </ul>;
};
