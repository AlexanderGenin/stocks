import React, { Component } from "react";
import { Bubble } from "react-chartjs-2";
import Title from "./../Title/index";
import { ReactComponent as Tag2 } from "../../icons/tag-2.svg";

export class PriceTarget extends Component {
  data = {
    datasets: [
      {
        label: "Low",
        data: [{ x: 10, y: 0, r: 2 }],
        backgroundColor: "#727272",
      },
      {
        label: "High",
        data: [{ x: 40, y: 0, r: 2 }],
        backgroundColor: "#727272",
      },
      {
        label: "Average",
        data: [{ x: 20, y: 0, r: 8 }],
        backgroundColor: "#39c08c",
      },
      {
        label: "Current",
        data: [{ x: 30, y: 0, r: 8 }],
        backgroundColor: "#a82997",
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
          display: false,
          drawTicks: false,
        },
        min: -10,
        max: 10,
      },
    },
  };

  render() {
    return (
      <>
        <Title content={"Price Target"} icon={<Tag2 />} />
        <Bubble data={this.data} options={this.options} height={150} />
      </>
    );
  }
}

export default PriceTarget;
