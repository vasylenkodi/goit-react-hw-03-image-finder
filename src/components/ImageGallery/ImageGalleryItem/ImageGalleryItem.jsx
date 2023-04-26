import React from "react";

export const ImageGalleryItem = ({image, modalHandler}) => {
    return (
      <li onClick={modalHandler} className='ImageGalleryItem'>
        <img src={image.webformatURL} alt={image.largeImageURL} className='ImageGalleryItem-image'/>
      </li>
    );
}