import React, { Component } from "react";

export default class WitchTooltip extends Component {
  render() {
    let witch = this.props.witch;
    return witch ? (
        // TODO: Format this thing
      <div></div>
    ) : (
      ""
    );
  }
}