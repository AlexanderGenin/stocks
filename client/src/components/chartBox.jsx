import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class ChartBox extends Component {
  render() {
    return <Line data={this.props.data} options={this.props.options} />;
  }
}

export default ChartBox;
