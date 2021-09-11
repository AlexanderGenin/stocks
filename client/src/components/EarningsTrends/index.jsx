import React, { Component } from "react";
import { Bubble } from "react-chartjs-2";
import { withTheme } from "styled-components";

class EarningsTrends extends Component {
  data = {
    datasets: [
      {
        label: "Actual",
        data: [
          { x: 2, y: 10, r: 10 },
          { x: 4, y: 12, r: 10 },
          { x: 6, y: 8, r: 10 },
          { x: 8, y: 16, r: 10 },
        ],
        backgroundColor: this.props.theme.mainColor,
      },
      {
        label: "Estimate",
        data: [
          { x: 2, y: 6, r: 10 },
          { x: 4, y: 8, r: 10 },
          { x: 6, y: 10, r: 10 },
          { x: 8, y: 14, r: 10 },
        ],
        backgroundColor: "transparent",
        borderColor: this.props.theme.extraColor,
      },
    ],
  };

  options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  render() {
    return (
      <>
        <Bubble data={this.data} options={this.options} />
      </>
    );
  }
}

export default withTheme(EarningsTrends);
