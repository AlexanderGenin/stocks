import React, { Component } from "react";
import { Bubble } from "react-chartjs-2";

import { withTheme } from "styled-components";

class PriceTarget extends Component {
  data = {
    datasets: [
      {
        label: "Low",
        data: [
          { x: this.props.stats.financialData.targetLowPrice, y: 0, r: 4 },
        ],
        backgroundColor: this.props.theme.textColor,
        hoverRadius: 4,
        clip: 20,
      },
      {
        label: "High",
        data: [
          { x: this.props.stats.financialData.targetHighPrice, y: 0, r: 4 },
        ],
        backgroundColor: this.props.theme.textColor,
        hoverRadius: 4,
        clip: 20,
      },
      {
        label: "Average",
        data: [
          { x: this.props.stats.financialData.targetMeanPrice, y: 0, r: 8 },
        ],
        backgroundColor: this.props.theme.extraColor,
        clip: 20,
      },
      {
        label: "Current",
        data: [{ x: this.props.stats.financialData.currentPrice, y: 0, r: 8 }],
        backgroundColor: "transparent",
        borderColor: this.props.theme.mainColor,
        clip: 20,
      },
    ],
  };

  options = {
    plugins: {
      legend: {
        display: false,
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
        <Bubble
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
