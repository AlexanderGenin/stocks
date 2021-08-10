import React, { Component } from "react";
import Search from "./../Search/index";
import { InfoSection } from "./../App/app-styles";
import Price from "./../Price/index";
import ChartBox from "./../ChartBox/index";
import Stats from "../Stats";
import Heading from "./../Heading/index";
import { ChartsWrapper, MainContent, Wrapper } from "./dashboard-styles";
import PriceTarget from "../PriceTarget";
import { BuySellDoughnut } from "./../BuySellDoughnut/index";
import { FinancialsBar } from "./../FinancialsBar/index";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

export class Dashboard extends Component {
  render() {
    return (
      <>
        <MainContent>
          {/* <PerfectScrollbar options={{ swipeEasing: true, wheelSpeed: 0.5 }}> */}
          <Wrapper>
            {this.props.tickerInfo && (
              <Heading
                content={this.props.tickerInfo.price.longName}
                ticker={this.props.tickerInfo.price.symbol}
              />
            )}
            <Search
              options={this.props.matchingTickers}
              placeholder={"Type in a ticker..."}
              onSubmit={(e) => this.props.onSubmit(e)}
              onChange={(e) => this.props.onChange(e)}
              onClick={(ticker) => this.props.onClick(ticker)}
            />
          </Wrapper>
          {this.props.tickerInfo && (
            <InfoSection>
              <div>
                <Price
                  current={this.props.tickerInfo.price.regularMarketPrice}
                />
                <Stats data={this.props.tickerInfo} />
                <PriceTarget data={this.props.tickerInfo} />
              </div>
              <ChartsWrapper>
                <div>
                  <ChartBox
                    data={this.props.chartData}
                    options={this.props.chartOptions}
                  />
                </div>
                <div>
                  <BuySellDoughnut />
                </div>
                <div>
                  <FinancialsBar />
                </div>
              </ChartsWrapper>
            </InfoSection>
          )}
          {/* </PerfectScrollbar> */}
        </MainContent>
      </>
    );
  }
}

export default Dashboard;
