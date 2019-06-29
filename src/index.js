import ReactDOM from "react-dom";
import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  state = { latitude: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.latitude != null && this.state.errorMessage === "") {
      return <SeasonDisplay latitude={this.state.latitude} />;
    } else if (this.state.latitude == null && this.state.errorMessage === "") {
      return <Spinner message="Please accept the location request" />;
    } else {
      return <div>{this.state.errorMessage}</div>;
    }
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
