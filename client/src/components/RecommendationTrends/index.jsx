import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { withTheme } from "styled-components";

class RecommendationTrends extends Component {
  data = {
    labels: ["Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Sell",
        data: [2, 3, 20, 5],
        backgroundColor: this.props.theme.extraColor,
        stack: "2",
        borderWidth: 0,
        barPercentage: 0.4,
      },
      {
        label: "Underperform",
        data: [3, 10, 13, 15],
        backgroundColor: this.props.theme.lightExtraColor,
        stack: "2",
        borderWidth: 0,
        barPercentage: 0.4,
      },
      {
        label: "Hold",
        data: [5, 4, 7, 6],
        backgroundColor: this.props.theme.lightMainColor,
        stack: "2",
        borderWidth: 0,
        barPercentage: 0.4,
      },
      {
        label: "Buy",
        data: [12, 19, 3, 5],
        backgroundColor: this.props.theme.mainColor,
        stack: "2",
        borderWidth: 0,
        barPercentage: 0.4,
      },
      {
        label: "Strong Buy",
        data: [1, 8, 20, 15],
        backgroundColor: this.props.theme.darkMainColor,
        stack: "2",
        borderWidth: 0,
        barPercentage: 0.4,
      },
    ],
  };

  options = {
    responsive: true,
    maintainAspectRatio: false,
    categoryPercentage: 0.6,
    borderRadius: 4,
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };
  render() {
    return (
      <>
        <Bar data={this.data} options={this.options} />
      </>
    );
  }
}

export default withTheme(RecommendationTrends);
