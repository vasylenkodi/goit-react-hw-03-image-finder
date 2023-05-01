import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  static propTypes = {
    imageUrl: PropTypes.string,
    onModalClose: PropTypes.func,
    onEscPush: PropTypes.func,
  }



    componentDidMount() {
        window.addEventListener('keydown', this.props.onEscPush)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.props.onEscPush)
    }

    render() {
    return (
      <div className="Overlay" onClick={this.props.onModalClose}>
        <div className="Modal">
          <img src={this.props.imageUrl} alt="" />
        </div>
      </div>
    );
  }
}
