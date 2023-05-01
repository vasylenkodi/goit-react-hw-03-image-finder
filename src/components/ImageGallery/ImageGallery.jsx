import { render } from '@testing-library/react';
import shortid from 'shortid';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button';
import { Loader } from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

const PIXABAY_DATA = {
  API_KEY: '34043302-c68d7a8556aecc2a40c20dbe5',
  BASE_URL: 'https://pixabay.com/api/',
  BASE_PARAMETERS: '&image_type=photo&orientation=horizontal&per_page=12',
};

const URL = `${PIXABAY_DATA.BASE_URL}&key=${PIXABAY_DATA.API_KEY}`;

export default class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.array,
    title: PropTypes.string,
  }

  state = {
    images: [],
    page: 1,
    imageToOpen: null,
    status: 'idle',
  };

  buttonHandler = () => {
    this.loadNextPage();
  };

  onModalOpen = event => {
    const image = event.target.alt;
    this.setState({ imageToOpen: image });
  };

  onModalClose = event => {
    if (event.target === event.currentTarget) {
      this.setState({ imageToOpen: null });
    }
  };

  onEscPush = event => {
    if (event.key === 'Escape') {
      this.setState({ imageToOpen: null });
    }
  };

  async loadNextPage() {
    try {
      await this.setState(prevState => {
        return { page: prevState.page + 1, status: 'pending' };
      });
      const response = await fetch(
        `${PIXABAY_DATA.BASE_URL}?page=${this.state.page}${PIXABAY_DATA.BASE_PARAMETERS}&key=${PIXABAY_DATA.API_KEY}&q=${this.props.title}`
      );
      const data = await response.json();
      const images = await data.hits;
      
      this.setState(prevState => {
        return {
          images: [...prevState.images, ...images],
          status: 'resolved',
        };
      });
      this.scrollDown();
    } catch (error) {
      this.setState({ status: 'rejected' });
    }
  }

  render() {
    console.log(this.props.images);
    return [
      <ul key={shortid.generate()} className="ImageGallery">
        {this.props.images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              image={image}
              onModalOpen={this.onModalOpen}
            />
          );
        })}
        {this.state.page !== 1 &&
          this.state.images.map(image => {
            return (
              <ImageGalleryItem
                key={image.id}
                image={image}
                onModalOpen={this.onModalOpen}
              />
            );
          })}
      </ul>,
      this.state.imageToOpen && (
        <Modal
          key={shortid.generate()}
          imageUrl={this.state.imageToOpen}
          onModalClose={this.onModalClose}
          onEscPush={this.onEscPush}
        />
      ),
      this.state.status === 'pending' && <Loader key={shortid.generate()} />,
      this.state.status !== 'pending' && <Button
        key={shortid.generate()}
        buttonClickHandler={this.buttonHandler}
      />,
    ];
  }
}
