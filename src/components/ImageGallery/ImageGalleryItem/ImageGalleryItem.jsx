import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  static propTypes = {
    image: PropTypes.object,
    onModalOpen: PropTypes.func,
  }

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
