import React, { Component } from "react";
import { Search } from "./../Search/search-styles";
import { InfoSection, Left, Right } from "./../App/app-styles";
import Price from "./../Price/index";
import ChartBox from "./../ChartBox/index";
import Stats from "../Stats";
import Heading from "./../Heading/index";
import { MainContent } from "./dashboard-styles";

export class Dashboard extends Component {
  render() {
    return (
      <>
        <MainContent>
          <Search
            options={this.props.matchingTickers}
            placeholder={"Type in the ticker..."}
            inputId={"tickers-input"}
            listId={"tickers-list"}
            onSubmit={() => this.props.handleSubmit()}
            onChange={() => this.props.handleChange()}
          />
          {this.props.tickerInfo && (
            <Heading
              content={this.props.tickerInfo.price.longName}
              ticker={this.props.tickerInfo.price.symbol}
            />
          )}
          <InfoSection>
            <Left>
              {this.props.tickerInfo && (
                <Price
                  current={this.props.tickerInfo.price.regularMarketPrice}
                />
              )}
              {this.props.tickerInfo && <Stats data={this.props.tickerInfo} />}
            </Left>
            <Right>
              {this.props.chartData && (
                <ChartBox
                  data={this.props.chartData}
                  options={this.props.chartOptions}
                />
              )}
            </Right>
          </InfoSection>
        </MainContent>
      </>
    );
  }
}

export default Dashboard;
