import React, { Component } from "react";
import Title from "./../Title/index";
import { ReactComponent as WalletMoney } from "../../icons/wallet-money.svg";
import { ReactComponent as StatusUp } from "../../icons/status-up.svg";
import { ReactComponent as CardReceive } from "../../icons/card-receive.svg";
import { ReactComponent as TrendUp } from "../../icons/trend-up.svg";
import { ReactComponent as Star1 } from "../../icons/star-1.svg";
import { ChartWrapper, Flex, FlexContainer, Table } from "./analysis-styles";
import RecommendationTrends from "./../RecommendationTrends";
import EarningsTrends from "../EarningsTrends";
import PriceTarget from "../PriceTarget";
import { ReactComponent as Tag2 } from "../../icons/tag-2.svg";
import RecommendationRating from "../RecommendationRating";
import EarningsEstimate from "../EarningsEstimate";
import RevenueEstimate from "../RevenueEstimate";

export class Analysis extends Component {
  render() {
    return (
      <>
        <FlexContainer>
          <Flex>
            <div>
              <Title content={"Earnings Estimate"} icon={<WalletMoney />} />
              <EarningsEstimate
                earnings={this.props.tickerStats.calendarEvents.earnings}
              />
            </div>
            <Title content={"Earnings Trends"} icon={<TrendUp />} />
            <ChartWrapper>
              <EarningsTrends earnings={this.props.tickerStats.earnings} />
            </ChartWrapper>
            <Title content={"Price Target"} icon={<Tag2 />} />
            <div>
              <PriceTarget stats={this.props.tickerStats} />
            </div>
          </Flex>
          <Flex>
            <div>
              <Title content={"Revenue Estimate"} icon={<CardReceive />} />
              <RevenueEstimate
                revenue={this.props.tickerStats.calendarEvents.earnings}
              />
            </div>
            <Title content={"Recommendation Trends"} icon={<StatusUp />} />
            <ChartWrapper>
              <RecommendationTrends
                recommendationTrend={this.props.tickerStats.recommendationTrend}
              />
            </ChartWrapper>
            <div>
              <Title content={"Recommendation Rating"} icon={<Star1 />} />
              <RecommendationRating
                rating={this.props.tickerStats.financialData.recommendationMean}
              />
            </div>
          </Flex>
        </FlexContainer>
      </>
    );
  }
}

export default Analysis;
