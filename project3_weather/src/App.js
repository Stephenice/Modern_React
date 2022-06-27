import React from "react";

// class base component

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
        console.log(position);
      },
      (err) => {
        console.log(err);
        this.setState({ errMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <>Error: {this.state.errMessage}</>;
    }

    if (!this.state.errMessage && this.state.lat) {
      return <>latitude: {this.state.lat}</>;
    }

    return <>Loading !!</>;
  }
}

export default App;
