import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    if (this.props.imagesPresent) {
      return <button type="button"onClick={this.props.buttonClickHandler} className='Button' >Load more</button>;
    }
      return;
  }
}
