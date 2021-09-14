import React, { Component } from "react";
import { Scatter } from "react-chartjs-2";

import { withTheme } from "styled-components";

class PriceTarget extends Component {
  data = {
    datasets: [
      {
        label: "Low",
        data: [{ x: this.props.stats.financialData.targetLowPrice, y: 0 }],
        backgroundColor: this.props.theme.textColor,
        clip: 20,
        pointRadius: 4,
        pointHoverRadius: 7,
      },
      {
        label: "High",
        data: [{ x: this.props.stats.financialData.targetHighPrice, y: 0 }],
        backgroundColor: this.props.theme.textColor,
        clip: 20,
        pointRadius: 4,
        pointHoverRadius: 7,
      },
      {
        label: "Average",
        data: [{ x: this.props.stats.financialData.targetMeanPrice, y: 0 }],
        backgroundColor: this.props.theme.extraColor,
        clip: 20,
        pointRadius: 8,
        pointHoverRadius: 12,
      },
      {
        label: "Current",
        data: [{ x: this.props.stats.financialData.currentPrice, y: 0 }],
        backgroundColor: "transparent",
        borderColor: this.props.theme.mainColor,
        clip: 20,
        pointRadius: 8,
        pointHoverRadius: 12,
      },
    ],
  };

  options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: function (context) {
            return context[0].dataset.label;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: true,
          drawTicks: false,
          drawBorder: true,
          OnChartArea: true,
          lineWidth: 1,
          color: (context) =>
            context.tick.value === 0
              ? this.props.theme.linesColor
              : this.props.theme.bgColor,
        },
        min: -10,
        max: 10,
      },
      x: {
        grid: {
          display: false,
        },
        min: this.props.stats.financialData.targetLowPrice,
        max: this.props.stats.financialData.targetHighPrice,
      },
    },
    responsive: false,
    maintainAspectRatio: false,
  };

  render() {
    return (
      <>
        <Scatter
          data={this.data}
          options={this.options}
          width={224}
          height={100}
        />
      </>
    );
  }
}

export default withTheme(PriceTarget);
