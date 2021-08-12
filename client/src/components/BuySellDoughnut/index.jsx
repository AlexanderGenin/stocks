import { Doughnut } from "react-chartjs-2";

import React, { Component } from "react";
import Title from "./../Title/index";
import { ReactComponent as Graph } from "../../icons/graph.svg";
import { ThemeConsumer, withTheme } from "styled-components";

class BuySellDoughnut extends Component {
  recs = {
    ...(this.props.stats && this.props.stats.recommendationTrend.trend[0]),
  }; // recommendations

  data = {
    labels: ["Strong buy", "Buy", "Hold", "Underperform", "Sell"],
    datasets: [
      {
        data: [
          this.recs.strongBuy,
          this.recs.buy,
          this.recs.hold,
          this.recs.sell,
          this.recs.strongSell,
        ],
        backgroundColor: [
          this.props.theme.darkMainColor,
          this.props.theme.mainColor,
          this.props.theme.lightMainColor,
          this.props.theme.lightExtraColor,
          this.props.theme.extraColor,
        ],
        borderWidth: 6,
        borderColor: "#111317",
        hoverOffset: 10,
        cutout: 30,
        rotation: -40,
      },
    ],
  };

  options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          boxWidth: 15,
          boxHeight: 15,
          // usePointStyle: true,
          // pointStyle: "triangle",
        },
      },
    },
    responsive: false,
    maintainAspectRatio: false,
  };

  render() {
    return (
      <>
        <Title content={"Recommendations"} icon={<Graph />} />
        <Doughnut
          data={this.data}
          options={this.options}
          width={300}
          height={250}
        />
      </>
    );
  }
}

export default withTheme(BuySellDoughnut);
