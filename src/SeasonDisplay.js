import React, { Component } from "react";
import "./SeasonDisplay.css";
const seasonConfig = {
  summer: {
    text: "Let's Hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Brr.. Its Chilly",
    iconName: "snowflake"
  }
};

export default class SeasonDisplay extends Component {
  render() {
    const season = getSeason(this.props.latitude, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left ${iconName} icon massive`} />
        <h1>{text}</h1>
        <i className={`icon-right ${iconName} icon massive`} />
      </div>
    );
  }
}

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude < 0 ? "summer" : "winter";
  }
};
