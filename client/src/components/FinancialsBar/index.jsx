import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import Title from "../Title/index";
import { ReactComponent as Chart } from "../../icons/chart.svg";
import { withTheme } from "styled-components";

class FinancialsBar extends Component {
  render() {
    const {
      earnings: {
        financialsChart: { yearly: financials },
      },
    } = this.props.stats || {};

    const data = {
      labels: financials.map((el) => el.date),
      datasets: [
        {
          label: "Revenue",
          data: financials.map((el) => el.revenue),
          backgroundColor: this.props.theme.mainColor,
          borderWidth: 0,
          barPercentage: 0.8,
        },
        {
          label: "Earnings",
          data: financials.map((el) => el.earnings),
          backgroundColor: this.props.theme.extraColor,
          borderWidth: 0,
          barPercentage: 0.8,
        },
      ],
    };

    const options = {
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
    return (
      <>
        <Title content={"Financials"} icon={<Chart />} />
        <Bar data={data} options={options} height={200} />
      </>
    );
  }
}

export default withTheme(FinancialsBar);
