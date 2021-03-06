import React, { Component } from "react";
import { InfoSection } from "../App/app-styles";
import PriceTarget from "../PriceTarget";
import Stats from "../Stats";
import Price from "./../Price/index";
import { ChartsWrapper } from "./../Dashboard/dashboard-styles";
import ChartBox from "./../ChartBox/index";
import BuySellDoughnut from "../BuySellDoughnut";
import FinancialsBar from "../FinancialsBar";
import Title from "./../Title/index";
import { ReactComponent as Tag2 } from "../../icons/tag-2.svg";

export class Summary extends Component {
  render() {
    return (
      <InfoSection>
        <div>
          <Price
            ticker={this.props.ticker}
            currency={this.props.tickerStats.price.currency}
            currencySymbol={this.props.tickerStats.price.currencySymbol}
            current={this.props.tickerStats.price.regularMarketPrice}
            changePercent={
              this.props.tickerStats.price.regularMarketChangePercent
            }
            change={this.props.tickerStats.price.regularMarketChange}
          />
          <Stats stats={this.props.tickerStats} />
          <Title content={"Price Target"} icon={<Tag2 />} />
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
