import React, { Component } from "react";

export default class SeasonDisplay extends Component {
  render() {
    const season = getSeason(this.props.latitude, new Date().getMonth());
    return (
      <div>
        {season === "Summer" ? "Let's Hit the beach" : "Brr.. Its Chilly"}
      </div>
    );
  }
}

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "Summer" : "Winter";
  } else {
    return latitude < 0 ? "Summer" : "Winter";
  }
};
