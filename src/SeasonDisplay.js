import React, { Component } from "react";

export default class SeasonDisplay extends Component {
  render() {
    const season = getSeason(this.props.latitude, new Date().getMonth());
    const text =
      season === "Summer" ? "Let's Hit the beach" : "Brr.. Its Chilly";
    const icon = season === "Summer" ? "snowflake" : "sun";
    return (
      <div>
        <i className={` ${icon} icon`} />
        <h1>{text}</h1>
        <i className={` ${icon} icon`} />
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
