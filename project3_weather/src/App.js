import React from "react";

// class base component

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => console.log(err)
    );
  }

  render() {
    return <>Latitude: {this.state.lat}</>;
  }
}

export default App;
