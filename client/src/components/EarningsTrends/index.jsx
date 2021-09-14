import React, { Component } from "react";
import { Scatter } from "react-chartjs-2";
import { withTheme } from "styled-components";

class EarningsTrends extends Component {
  render() {
    const {
      quarterly,
      currentQuarterEstimate,
      currentQuarterEstimateDate,
      currentQuarterEstimateYear,
    } = this.props.earnings.earningsChart || {};
    const data = {
      datasets: [
        {
          label: "Actual",
          data: [
            { x: quarterly[0].date, y: quarterly[0].actual },
            { x: quarterly[1].date, y: quarterly[1].actual },
            { x: quarterly[2].date, y: quarterly[2].actual },
            { x: quarterly[3].date, y: quarterly[3].actual },
          ],
          backgroundColor: this.props.theme.mainColor,
          clip: 20,
          pointRadius: 10,
          pointHoverRadius: 12,
        },
        {
          label: "Estimate",
          data: [
            { x: quarterly[0].date, y: quarterly[0].estimate },
            { x: quarterly[1].date, y: quarterly[1].estimate },
            { x: quarterly[2].date, y: quarterly[2].estimate },
            { x: quarterly[3].date, y: quarterly[3].estimate },
            {
              x: currentQuarterEstimateDate + currentQuarterEstimateYear,
              y: currentQuarterEstimate,
            },
          ],
          backgroundColor: "transparent",
          borderColor: this.props.theme.extraColor,
          clip: 20,
          pointRadius: 10,
          pointHoverRadius: 12,
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
        <Scatter
          data={data}
          options={options}
          style={{ marginLeft: "-20px" }}
        />
      </>
    );
  }
}

export default withTheme(EarningsTrends);
