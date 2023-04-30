import React, { Component } from 'react';
import shortid from 'shortid';
import api from 'api/api';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import '../styles.css';

const PIXABAY_DATA = {
  API_KEY: '34043302-c68d7a8556aecc2a40c20dbe5',
  BASE_URL: 'https://pixabay.com/api/',
  BASE_PARAMETERS: '&image_type=photo&orientation=horizontal&per_page=12',
};

const URL = `${PIXABAY_DATA.BASE_URL}&key=${PIXABAY_DATA.API_KEY}`;

export default class App extends Component {
  state = {
    images: null,
    title: null,
    status: 'idle',
  };

  onSubmitHandler = async title => {
    try {
      this.setState({ images: null, status: 'pending' });
      const response = await fetch(
        `${PIXABAY_DATA.BASE_URL}?page=${this.state.page}${PIXABAY_DATA.BASE_PARAMETERS}&key=${PIXABAY_DATA.API_KEY}&q=${title}`
      );
      const data = await response.json();
      const images = await data.hits;
      this.setState({ images: images, title: title, status: 'resolved' });
    } catch (error) {
      this.setState({status: 'rejected'})
    }
  };

  render() {
    return [
      <Searchbar key={shortid.generate()} onSubmit={this.onSubmitHandler} />,
      this.state.images && (
        <ImageGallery
          key={shortid.generate()}
          images={this.state.images}
          title={this.state.title}
        />
      ),
      this.state.status === 'pending' && <Loader key={shortid.generate()} />,
    ];
  }
}
