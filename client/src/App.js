import React, { Component } from "react";
import { getTickerInfo } from "./services/tickerService";

class App extends Component {
  state = {
    ticker: "",
    price: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getTickerInfo(this.state.ticker);
    this.setState({ price: data.price.regularMarketPrice });
  };

  handleChange = (e) => {
    this.setState({ ticker: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>Type in the ticker</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="ticker"
            value={this.state.ticker}
            id="first"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.price}</p>
      </div>
    );
  }
}

export default App;
