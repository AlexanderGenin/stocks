import React, { Component } from "react";
import SearchBox from "./searchBox";
import Price from "./price";
import ChartBox from "./chartBox";

class InfoSection extends Component {
  state = {
    ticker: "",
    prevPrice: 0,
    currPrice: 0,
  };

  handleSubmit = (ticker) => {
    console.log(ticker);
  };

  render() {
    return (
      <div>
        <SearchBox onSubmit={this.handleSubmit} />
        <Price
          prevPrice={this.state.prevPrice}
          currPrice={this.state.currPrice}
        />
      </div>
    );
  }
}

export default InfoSection;
