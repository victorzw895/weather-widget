// import React, { Component } from "react";
// import "./App.css";

// import WeatherWidget from "./WeatherWidget";
// import testData from "../utils/TestData.json";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.forecast = testData.list.map(data => ({
//       dt: data.dt,
//       temp: data.main.temp,
//       temp_min: data.main.temp_min,
//       temp_max: data.main.temp_max,
//       humidity: data.main.humidity,
//       icon: data.weather[0].icon,
//       desc: data.weather[0].description,
//       clouds: data.clouds.all,
//       wind: data.wind.speed
//     }));
//   }

//   render() {
//     return (
//       <div className="App">
//         <WeatherWidget
//           config={{ location: "London,UK", unit: "metric", locale: "zh-tw" }}
//           forecast={this.forecast}
//         />
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import "./App.css";

import WeekContainer from "./WeekContainer";

class App extends Component {
  // constructor() {
  //   super();

  // }

  render() {
    return (
      <div className="App">
        <WeekContainer />
      </div>
    );
  }
}

export default App;
