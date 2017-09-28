import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData) {
      const name = cityData.city.name;
      // the below inside map it is a function
      const temperatures = cityData.list.map(record => record.main.temp)
      const pressures = cityData.list.map(record => record.main.pressure)
      const humidities = cityData.list.map(record => record.main.humidity)
      // pull off lat and lon keys from cood hash and assign it to lat and lon variables
      const { lat, lon } = cityData.city.coord;

      return(
        <tr key={name}>
          <td>
            <GoogleMap lat={lat} lon={lon} />
          </td>
          <td>
            <Chart data={temperatures} color="red" units="K"/>
          </td>
          <td>
            <Chart data={pressures} color="blue" units="hPa"/>
          </td>
          <td>
            <Chart data={humidities} color="green" units="%"/>
          </td>
        </tr>
      );
    }

    render() {
      return(
        <table className = "table table-hover">
          <thead>
            <tr>
              <th> City </th>
              <th> Temperature(K) </th>
              <th> Pressure(hPa) </th>
              <th> Humidity(%) </th>
            </tr>
          </thead>
          <tbody>
            { this.props.weather.map(this.renderWeather) }
          </tbody>
        </table>
      );
    }
}

// Now we can access this.props.weather in the above component
// this.props.weather is an array of city data
function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherList);
