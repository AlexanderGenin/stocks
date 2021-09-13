import React, { Component } from "react";
import Search from "./../Search/index";
import Heading from "./../Heading/index";
import { MainContent, Content, Wrapper } from "./dashboard-styles";
import "react-perfect-scrollbar/dist/css/styles.css";
import Summary from "../Summary";
import Analysis from "../Analysis";
import Info from "../Info";
import Financials from "../Financials";

export class Dashboard extends Component {
  render() {
    const pages = [
      <Summary {...this.props} />,
      <Financials {...this.props} />,
      <Analysis {...this.props} />,
      <Info {...this.props} />,
    ];
    return (
      <>
        <MainContent>
          <Wrapper>
            {this.props.tickerStats && (
              <Heading
                content={this.props.tickerStats.price.longName}
                ticker={this.props.tickerStats.price.symbol}
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
          <Content>
            {this.props.tickerStats && pages[this.props.selectedItem]}
          </Content>
        </MainContent>
      </>
    );
  }
}

export default Dashboard;
