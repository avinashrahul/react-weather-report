import React, { Component } from 'react';

// This is a class component
// we already integrated google maps in index.html
export default class GoogleMap extends Component {
  // We can exactly say where to output this map on screen using ref and second argument could be list of maps
  // This is super helpful when integrating with third party apis

  //lets pass in lat and lon from parent component
  componentDidMount() {
    new google.maps.Map(this.refs.location_to_show_map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return (
      // check above why we used ref - I can use this.refs.map anywhere in this component
      <div ref="location_to_show_map" />
    );
  }
}
