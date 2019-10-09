import React, { Component } from "react";
import fetchWeather from "../utils/Api";

export default class WeekContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2147714,
      city: "Sydney",
      clouds: "",
      humidity: 0,
      pressure: 0,
      temp: 0,
      maxTemp: 0,
      minTemp: 0,
      description: "",
      icon: "",
      mainWeather: "",
      deg: 0,
      gust: 0,
      speed: 0
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  getParams(location) {
    const searchParams = new URLSearchParams(location);
    return {
      city: searchParams.get("city") || ""
    };
  }

  componentDidMount() {
    const params = this.getParams(window.location.search);

    const { city } = this.state;
    fetchWeather(params.city || city) // if url query, fetch that, else from react state
      .then(response => {
        if (response.cod === 200) {
          const main = response.main;
          const weather = response.weather;
          const wind = response.wind;
          console.log(response);
          this.renderWidget(response.id);
          this.setState({
            id: response.id,
            city: response.name,
            clouds: response.clouds.all,
            humidity: main.humidity,
            pressure: main.pressure,
            temp: main.temp,
            maxTemp: main.temp_max,
            minTemp: main.temp_min,
            description: weather.description,
            icon: weather.icon,
            mainWeather: weather.main,
            deg: wind.deg,
            gust: wind.gust,
            speed: wind.speed
          });
        } else {
          throw new Error(
            `${response.cod} - ${response.message}: ${params.city}`
          );
        }
      })
      .catch(error => console.error(error));
  }

  renderWidget(id) {
    if (window.myWidgetParam) {
      console.log(window.myWidgetParam);
    } else {
      window.myWidgetParam = [];
    }
    window.myWidgetParam.push({
      id: 15,
      cityid: id,
      appid: "fdf1d48f3f3951dcb129a7e4be3b7d89",
      units: "metric",
      containerid: "openweathermap-widget-15"
    });
    (function() {
      var script = document.createElement("script");
      script.async = true;
      script.charset = "utf-8";
      script.src =
        "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(script, s);
    })();
  }

  _handleChange(event) {
    console.log(event.target.value);
    // this.setState({ city: event.target.value });
  }

  _handleSubmit(event) {
    console.log(event);
    // event.preventDefault();

    // event.preventDefault();
    // this.setState({ city: })
    // fetchWeather(this.state.city);
  }

  render() {
    return (
      <div>
        <h1>Weather Widget</h1>
        <form onSubmit={this._handleSubmit}>
          <label>Search City: </label>
          <input
            type="text"
            name="city"
            autoFocus
            onChange={this._handleChange}
          ></input>
          <button>Search</button>
        </form>
        <div id="openweathermap-widget-15"></div>
      </div>
    );
  }
}
