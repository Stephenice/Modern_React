import React from "react";

// class base component

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    console.log(React.Component);
    return <>Latitude:</>;
  }
}

export default App;
