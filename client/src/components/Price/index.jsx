import React, { Component } from "react";
import { getTickerStats } from "../../services/tickerService";
import { PriceText, PriceContainer, PriceChange } from "./price-styles";

class Price extends Component {
  state = {
    ...this.props,
  };

  componentDidMount() {
    this.interval = setInterval(async () => {
      if (this.props.ticker) {
        const { data: tickerStats } = await getTickerStats(this.props.ticker);
        this.setState({
          current: tickerStats.price.regularMarketPrice,
          changePercent: tickerStats.price.regularMarketChangePercent,
          change: tickerStats.price.regularMarketChange,
        });
      }
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const addPlus = Math.sign(this.state.change) === -1 ? "" : "+";
    return (
      <PriceContainer>
        <PriceText>{this.state.current.toFixed(2)}</PriceText>
        <PriceChange>
          {addPlus + this.state.change.toFixed(2)} (
          {addPlus + (this.state.changePercent * 100).toFixed(2)}%)
        </PriceChange>
      </PriceContainer>
    );
  }
}

export default Price;
