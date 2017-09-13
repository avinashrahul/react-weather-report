import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};

    // If we do not use bind below our component do not know
    // what is handleOnChange function, that is why we are binding to this Component
    // else we get undefined method setState for null
    // If we use onChange={() => this.handleOnChange()} then no need to bind
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    // You always get an event by default as argument since you are using
    // onChange event handler in render inout field
    this.setState({term: event.target.value})
  }

  handleSubmit(event) {
    // if this function uses this. then you need to add bind it in constructor as well

    // If we do not do a preventDefault when you click enter/submit button
    // it will do a POST request sending out the entire form object to server
    event.preventDefault();
  }

  render() {
    return(
      <form className="input-group" onSubmit={this.handleSubmit}>
        <input
          placeholder="Enter a city to check forecast.."
          className="form-control"
          value={this.state.term}
          onChange={this.handleOnChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

export default SearchBar;
