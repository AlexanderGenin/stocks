import React, { Component } from "react";
import { InfoSection } from "../App/app-styles";
import PriceTarget from "../PriceTarget";
import Stats from "../Stats";
import Price from "./../Price/index";
import { ChartsWrapper } from "./../Dashboard/dashboard-styles";
import ChartBox from "./../ChartBox/index";
import BuySellDoughnut from "../BuySellDoughnut";
import FinancialsBar from "../FinancialsBar";

export class Summary extends Component {
  render() {
    return (
      <InfoSection>
        <div>
          <Price current={this.props.tickerStats.price.regularMarketPrice} />
          <Stats stats={this.props.tickerStats} />
          <PriceTarget stats={this.props.tickerStats} />
        </div>
        <ChartsWrapper>
          <div>
            <ChartBox
              data={this.props.chartData}
              options={this.props.chartOptions}
            />
          </div>
          <div>
            <BuySellDoughnut stats={this.props.tickerStats} />
          </div>
          <div>
            <FinancialsBar stats={this.props.tickerStats} />
          </div>
        </ChartsWrapper>
      </InfoSection>
    );
  }
}

export default Summary;