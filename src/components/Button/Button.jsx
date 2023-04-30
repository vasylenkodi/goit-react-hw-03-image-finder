import React, { Component } from 'react';

export default class Button extends Component {

  async loadMore() {
    this.setState({ buttonIsVisible: false });
    await this.props.buttonClickHandler();
    this.setState({ buttonIsVisible: true });
  }

  render() {
      return <button type="button" onClick={this.props.buttonClickHandler} className='Button' >Load more</button>;
  }
}
