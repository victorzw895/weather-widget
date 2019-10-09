I had a couple of options for getting the URL parameter city to determine weather displayed requirement.

- Use react-router-dom and have on submit, redirect me to the same widget application and then use the query params from this.props.location.search
- I would have prefered to keep this very minimal and more like a single page application and get save the city query in the react state. However this would lose the ability to pass a query to the url and then use this to determine the data for the weather widget.
- As far as I can tell, the only reason why one would want to make use of url query is to bookmark the widget with a data from a specific city. But I think that defeats the purpose of a widget or single page application.
