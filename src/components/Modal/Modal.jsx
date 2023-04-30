import React, { Component } from 'react';

export default class Modal extends Component {



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
