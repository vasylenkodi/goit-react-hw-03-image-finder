import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onInputChange = event => {
    const input = event.currentTarget;
    this.setState({
        inputValue: input.value,
    });
  };

    submitHandler = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.inputValue);
    }

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.submitHandler}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            value={this.state.inputValue}
            onChange={this.onInputChange}
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
