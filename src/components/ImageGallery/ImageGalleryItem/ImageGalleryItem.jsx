import React, { Component } from 'react';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li className="ImageGalleryItem" onClick={this.props.onModalOpen}>
        <img
          src={this.props.image.webformatURL}
          alt={this.props.image.largeImageURL}
          className="ImageGalleryItem-image"
        />
        </li>
    );
  }
}
