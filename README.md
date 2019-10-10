# Weather Widget

# About

[Demo](https://victorzw895.github.io/weather-widget/)

This is a simple weather widget created on React.js using OpenWeatherMap API and the widget.

# Features

- Default weather: Set to Sydney. Whenever no city is searched, display default city.
- Search Validations: Will only display widget for valid cities, otherwise display error message.
- Displays weather information for cities according to URL query "city". Allows users to bookmark url for weather information about specific city.

# Thoughts

1. Feature Prioritisation

   - Display Widget + weather data
   - Search function
   - Validations
   - Display/Design

2. URL query "city"
   I had a couple of options for getting the URL query city requirement to determine the weather displayed.
   Either:

- Use react-router-dom API.
  This would allow me to set a URL query (?city="Sydney") and have onSubmit() event handler redirect me to the same widget URL (http://localhost:3000/) and then use the query params from this.props.location.search and use this to fetch correct data from API.
  However, it makes little sense to use react-router-dom API for a single web application or single widget. Since the only url every being used is (http://localhost:3000/). So I won't be using this.

- Use window.location.search to obtain the URL query (?city="Sydney") and use URLSearchParams API to save the query into a an object instance very similar to a Map. I can the obtain the string "Sydney" from
  `new URLSearchParams.get("city")`
  and save it into an object property to access it later.
  This allows the application to make use of the URL query in a simple way without having to use react-router-dom API.

- PERSONAL PREFRENCE: I would have prefered to keep this very minimal and more like a single page application, by avoiding page reloading, which occurs when clicking search and allowing default events.
  The downside to this method is that there would not be any URL query.
  The idea is to save the city query in the react state. Then immediately use this to fetch data for the weather widget.
- As far as I can tell, the only reason why one would want to make use of url query is to bookmark the widget with a data from a specific city. But I think that defeats the purpose of a widget or single page application.

3. 90/10 solution
   In order to maintain a 90/10 solution, I searched for a library that might have the components for a simple weather widget without needing to build one from scratch.
   Instead I found in the OpenWeatherMap a link to a widget constructor. This allowed me to import the code that would automatically display a weather widget and simply obtain the city ID from a GET request to API and then pass it through the weather widget code along with an API Key to get the data.
   Its fast in getting the product done, but more complicated to customize widget.

# Technologies

- React.js
- Semantic-UI
- OpenWeatherMap API
- OpenWeatherMap widget
