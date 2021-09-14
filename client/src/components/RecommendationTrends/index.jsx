import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { withTheme } from "styled-components";

class RecommendationTrends extends Component {
  render() {
    const { trend } = this.props.recommendationTrend;
    const data = {
      labels: ["Jun", "Jul", "Aug", "Sep"],
      datasets: [
        {
          label: "Sell",
          data: trend.map((el) => el.strongSell).reverse(),
          backgroundColor: this.props.theme.extraColor,
          stack: "2",
          borderWidth: 0,
          barPercentage: 0.4,
        },
        {
          label: "Underperform",
          data: trend.map((el) => el.sell).reverse(),
          backgroundColor: this.props.theme.lightExtraColor,
          stack: "2",
          borderWidth: 0,
          barPercentage: 0.4,
        },
        {
          label: "Hold",
          data: trend.map((el) => el.hold).reverse(),
          backgroundColor: this.props.theme.lightMainColor,
          stack: "2",
          borderWidth: 0,
          barPercentage: 0.4,
        },
        {
          label: "Buy",
          data: trend.map((el) => el.buy).reverse(),
          backgroundColor: this.props.theme.mainColor,
          stack: "2",
          borderWidth: 0,
          barPercentage: 0.4,
        },
        {
          label: "Strong Buy",
          data: trend.map((el) => el.strongBuy).reverse(),
          backgroundColor: this.props.theme.darkMainColor,
          stack: "2",
          borderWidth: 0,
          barPercentage: 0.4,
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      categoryPercentage: 0.6,
      borderRadius: 4,
      plugins: {
        legend: {
          position: "right",
          reverse: true,
          labels: {
            pointStyle: "rectRounded",
            usePointStyle: true,
          },
        },
      },
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
    return (
      <>
        <Bar data={data} options={options} />
      </>
    );
  }
}

export default withTheme(RecommendationTrends);
