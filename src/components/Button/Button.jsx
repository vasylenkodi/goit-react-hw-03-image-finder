import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Button extends Component {
  static propTypes = {
    buttonClickHandler: PropTypes.func,
  }

  async loadMore() {
    this.setState({ buttonIsVisible: false });
    await this.props.buttonClickHandler();
    this.setState({ buttonIsVisible: true });
  }

  render() {
      return <button type="button" onClick={this.props.buttonClickHandler} className='Button' >Load more</button>;
  }
}
