import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Title from "../Title/index";
import { ReactComponent as Chart } from "../../icons/chart.svg";
import { withTheme } from "styled-components";

class FinancialsBar extends Component {
  revenue =
    this.props.stats &&
    this.props.stats.earnings.financialsChart.yearly.map((el) => el.revenue);
  earnings =
    this.props.stats &&
    this.props.stats.earnings.financialsChart.yearly.map((el) => el.earnings);

  year = Date.now();

  data = {
    labels: ["2017", "2018", "2019", "2020"],
    datasets: [
      {
        label: "Revenue",
        data: this.revenue,
        backgroundColor: this.props.theme.mainColor,
        borderWidth: 0,
        barPercentage: 0.8,
      },
      {
        label: "Earnings",
        data: this.earnings,
        backgroundColor: this.props.theme.extraColor,
        borderWidth: 0,
        barPercentage: 0.8,
      },
    ],
  };

  options = {
    categoryPercentage: 0.6,
    borderRadius: 4,
    plugins: {
      legend: {
        display: "top",
        labels: {
          pointStyle: "rectRounded",
          usePointStyle: true,
        },
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  render() {
    return (
      <>
        <Title content={"Financials"} icon={<Chart />} />
        <Bar data={this.data} options={this.options} height={200} />
      </>
    );
  }
}

export default withTheme(FinancialsBar);
