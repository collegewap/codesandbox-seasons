import ReactDOM from "react-dom";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null, errorMessage: "" };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ latitude: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    if (this.state.latitude != null && this.state.errorMessage == "") {
      return <div>Latitude: {this.state.latitude}</div>;
    } else if (this.state.latitude == null && this.state.errorMessage == "") {
      return <div>Loading..</div>;
    } else {
      return <div>{this.state.errorMessage}</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
