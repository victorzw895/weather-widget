import React, { Component } from "react";
import fetchWeather from "../utils/Api";
import { Segment, Input } from "semantic-ui-react";

export default class WeatherWidget extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      city: "Sydney",
      input: "",
      loaded: false
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  getParams(location) {
    const searchParams = new URLSearchParams(location);
    return {
      city: searchParams.get("city")
    };
  }

  componentDidMount() {
    const params = this.getParams(window.location.search);

    const { city } = this.state;
    fetchWeather(params.city || city) // if url query, fetch that, else from react state
      .then(response => {
        if (response.cod === 200) {
          console.log(response);
          this.renderWidget(response.id);
          this.setState({
            id: response.id,
            loaded: true
          });
        } else {
          this.setState({ city: params.city, loaded: true });
          throw new Error(
            `${response.cod} - ${response.message}: ${params.city}`
          );
        }
      })
      .catch(error => console.error(error));
  }

  renderWidget(id) {
    const _APIKEY = process.env.REACT_APP_OPEN_WEATHER_MAP;

    if (window.myWidgetParam) {
      console.log(window.myWidgetParam);
    } else {
      window.myWidgetParam = [];
    }
    window.myWidgetParam.push({
      id: 15,
      cityid: id,
      appid: _APIKEY,
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
    this.setState({ input: event.target.value });
  }

  _handleSubmit(event) {
    if (!this.state.input) {
      event.preventDefault();
      window.location.href = "https://victorzw895.github.io/weather-widget/";
    }
  }

  render() {
    let widget;
    if (this.state.id && this.state.loaded) {
      widget = <div id="openweathermap-widget-15"></div>;
    } else if (!this.state.id && this.state.loaded) {
      widget = <h2>Can't find weather for {this.state.city}</h2>;
    } else {
      widget = <h2>Loading...</h2>;
    }
    return (
      <Segment
        textAlign="center"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div>
          <h1>Weather Widget</h1>
          <form onSubmit={this._handleSubmit}>
            <Input
              focus
              placeholder="Search City..."
              action={{ content: "Search", color: "blue" }}
              color="blue"
              type="text"
              name="city"
              onChange={this._handleChange}
            ></Input>
          </form>
          {widget}
        </div>
      </Segment>
    );
  }
}
