import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { ChartWrapper } from "./chartbox-styles";

class ChartBox extends Component {
  componentDidUpdate(prevProps, prevState) {
    Object.entries(this.props).forEach(
      ([key, val]) =>
        prevProps[key] !== val && console.log(`Prop '${key}' changed`)
    );
    if (this.state) {
      Object.entries(this.state).forEach(
        ([key, val]) =>
          prevState[key] !== val && console.log(`State '${key}' changed`)
      );
    }
  }

  render() {
    return (
      <ChartWrapper>
        <Line data={this.props.data} options={this.props.options} />
      </ChartWrapper>
    );
  }
}

export default ChartBox;
