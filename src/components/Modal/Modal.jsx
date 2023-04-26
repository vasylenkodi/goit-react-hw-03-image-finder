import React, { Component } from 'react';

export default class Modal extends Component {
    onOverlayClick(event) {
        console.log(event.currentTarget);
        console.log(event.target);
    }

    // componentDidMount = () => {
    //     const overlay = document.querySelector('.Overlay');

    //     overlay.addEventListener('click', this.onOverlayClick);
    // }

  render() {
      if (this.props.imageUrl) {
          return (
            <div className="Overlay">
              <div className="Modal">
                <img src={this.props.imageUrl} alt="" />
              </div>
            </div>
          );
      }
      return;
  }
    
}
