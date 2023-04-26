import React, { Component } from 'react';
import shortid from 'shortid';
import Searchbar from './Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Button from './Button';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
import '../styles.css';

const PIXABAY_DATA = {
  API_KEY: '34043302-c68d7a8556aecc2a40c20dbe5',
  BASE_URL: 'https://pixabay.com/api/',
  BASE_PARAMETERS: '&image_type=photo&orientation=horizontal&per_page=12',
};

const URL = `${PIXABAY_DATA.BASE_URL}&key=${PIXABAY_DATA.API_KEY}`;

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    status: 'idle',
    imageToOpen: null,
  };

  submitHandler = async title => {
    try {
      this.setState({ status: 'pending' });
      const response = await fetch(
        `${PIXABAY_DATA.BASE_URL}?page=${this.state.page}${PIXABAY_DATA.BASE_PARAMETERS}&key=${PIXABAY_DATA.API_KEY}&q=${title}`
      );
      const data = await response.json();
      this.setState({ images: data.hits, status: 'resolved' });
    } catch (error) {
      this.setState({ status: 'rejected' });
    }
  };

  onModalOpen = (event) => {
    this.setState({ imageToOpen: event.target.alt });
    console.dir(event.target.alt);
  }

  nextPage = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      }
    })
  };

  render() {
    const pictures = this.state.images;

    return [
      <Searchbar key={shortid.generate()} onSubmit={this.submitHandler} />,
      <ImageGallery key={shortid.generate()} images={pictures} modalHandler={this.onModalOpen} />,
      <Button
        key={shortid.generate()}
        imagesPresent={this.state.images.length}
        buttonClickHandler={this.nextPage}
      />,
      <Loader key={shortid.generate()} status={this.state.status} />,
      <Modal key={shortid.generate()} imageUrl={this.state.imageToOpen} />
    ];
  }
}
