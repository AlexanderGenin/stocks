import { Doughnut } from "react-chartjs-2";

import React, { Component } from "react";
import Title from "./../Title/index";
import { ReactComponent as Graph } from "../../icons/graph.svg";

export class BuySellDoughnut extends Component {
  data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  render() {
    return (
      <>
        <Title content={"Recommendations"} icon={<Graph />} />
        <Doughnut data={this.data} options={this.options} width={300} />
      </>
    );
  }
}

export default BuySellDoughnut;
