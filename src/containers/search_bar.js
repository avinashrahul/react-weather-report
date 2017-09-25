import React, { Component } from 'react';
// Since this is a container and since we need to call action creator and use redux
// we need to use connect library for this
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};

    // If we do not use bind below our component do not know
    // what is handleOnChange function, that is why we are binding to this Component
    // else we get undefined method setState for null
    // If we use onChange={() => this.handleOnChange()} then no need to bind
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(event) {
    // You always get an event by default as argument since you are using
    // onChange event handler in render inout field
    this.setState({term: event.target.value})
  }

  handleSubmit(event) {
    // if this function uses this like (this.setState({term: event.target.value})).
    // then you need to add bind it in constructor as well

    // If we do not do a preventDefault when you click enter/submit button
    // it will do a POST request sending out the entire form object to server
    event.preventDefault();
    // Now call action creator
    this.props.fetchWeather(this.state.term)
    // this calls render again
    this.setState({ term: '' })
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

// We can now call fetchWeather action creator using this.props.fetchWeather
// Once it gets called the return value of that gets passed to all reducers available
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// mapDispatchToProps always goes to second argument. It does not need state. So first arg is null
export default connect(null, mapDispatchToProps)(SearchBar);
