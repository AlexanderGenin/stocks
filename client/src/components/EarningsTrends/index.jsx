import React, { Component } from "react";
import { Bubble } from "react-chartjs-2";
import { withTheme } from "styled-components";

class EarningsTrends extends Component {
  render() {
    const {
      quarterly,
      currentQuarterEstimate,
      currentQuarterEstimateDate,
      currentQuarterEstimateYear,
    } = this.props.earnings.earningsChart;
    const data = {
      datasets: [
        {
          label: "Actual",
          data: [
            { x: quarterly[0].date, y: quarterly[0].actual, r: 10 },
            { x: quarterly[1].date, y: quarterly[1].actual, r: 10 },
            { x: quarterly[2].date, y: quarterly[2].actual, r: 10 },
            { x: quarterly[3].date, y: quarterly[3].actual, r: 10 },
          ],
          backgroundColor: this.props.theme.mainColor,
          clip: 20,
        },
        {
          label: "Estimate",
          data: [
            { x: quarterly[0].date, y: quarterly[0].estimate, r: 10 },
            { x: quarterly[1].date, y: quarterly[1].estimate, r: 10 },
            { x: quarterly[2].date, y: quarterly[2].estimate, r: 10 },
            { x: quarterly[3].date, y: quarterly[3].estimate, r: 10 },
            {
              x: currentQuarterEstimateDate + currentQuarterEstimateYear,
              y: currentQuarterEstimate,
              r: 10,
            },
          ],
          backgroundColor: "transparent",
          borderColor: this.props.theme.extraColor,
          clip: 20,
        },
      ],
    };

    const options = {
      layout: {
        padding: 20,
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: {
          type: "category",
          labels: [
            ...quarterly.map((el) => el.date),
            currentQuarterEstimateDate + currentQuarterEstimateYear,
          ],
        },
        yAxes: {
          ticks: {
            beginAtZero: true,
          },
        },
      },
      plugins: {
        legend: {
          position: "right",
          labels: {
            pointStyle: "rectRounded",
            usePointStyle: true,
          },
        },
      },
    };

    return (
      <>
        <Bubble data={data} options={options} style={{ marginLeft: "-20px" }} />
      </>
    );
  }
}

export default withTheme(EarningsTrends);
