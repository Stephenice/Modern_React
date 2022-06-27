import React from "react";
import SeasonDisplay from "./SeasonDisplay";

// class base component

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, errMessage: "" };
  // }

  state = { lat: null, errMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMessage: err.message })
    );
  }

  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <>Error: {this.state.errMessage}</>;
    }

    if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <>Loading !!</>;
  }
}

export default App;
