import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { ChartWrapper } from "./chartbox-styles";

class ChartBox extends Component {
  render() {
    return (
      <ChartWrapper>
        <Line data={this.props.data} options={this.props.options} />
      </ChartWrapper>
    );
  }
}

export default ChartBox;
