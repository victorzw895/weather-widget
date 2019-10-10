import React, { Component } from "react";
import "./App.css";

import WeatherWidget from "./WeatherWidget";

import "semantic-ui-css/semantic.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherWidget />
      </div>
    );
  }
}

export default App;
