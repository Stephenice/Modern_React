import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner.js";

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

  renderContent() {
    if (this.state.errMessage && !this.state.lat) {
      return <>Error: {this.state.errMessage}</>;
    }

    if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return (
      <>
        <Spinner message="Please accept location request" />
      </>
    );
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default App;
