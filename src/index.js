import ReactDOM from "react-dom";
import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  state = { latitude: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  render() {
    if (this.state.latitude != null && this.state.errorMessage === "") {
      return <SeasonDisplay latitude={this.state.latitude} />;
    } else if (this.state.latitude == null && this.state.errorMessage === "") {
      return <div>Loading..</div>;
    } else {
      return <div>{this.state.errorMessage}</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
