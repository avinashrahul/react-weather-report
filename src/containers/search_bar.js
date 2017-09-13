import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};

    // If we do not use bind below our component do not know
    // what is handleOnChange function, that is why we are binding to this Component
    // If we use onChange={() => this.handleOnChange()} then no need to bind
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    // You always get an event by default as argument since you are using
    // onChange wvwnt handler below

    // console.log(event.target.value);
    this.setState({term: event.target.value})
  }

  render() {
    return(
      <form className="input-group">
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
