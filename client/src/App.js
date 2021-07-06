import React, { Component } from "react";
import yf from "yahoo-finance";
import InfoSection from "./components/infoSection";
import Search from "./components/searchBox";
import { getTickers } from "./services/tickerService";
import { getTickerInfo, getTickerHistory } from "./services/tickerService";
import ChartBox from "./components/chartBox";

class App extends Component {
  state = {
    tickersList: [],
    ticker: "",
    price: "",
    previousPrice: "",
    tickerHistory: null,
    chartData: {},
    chartOptions: {
      parsing: {
        xAxisKey: "date",
        yAxisKey: "close",
      },
      scales: {
        x: {
          reverse: true,
        },
      },
    },
  };

  handleSubmit = async (ticker) => {
    try {
      const data = await getTickerInfo(ticker);
      console.log(data.data.price.regularMarketPrice);
      const { data: tickerHistory } = await getTickerHistory(ticker);
      console.log(tickerHistory);
      this.setState({ chartData: this.formatHistoryData(tickerHistory) });

      // setInterval(async function () {
      //   const data = await getTickerInfo(ticker);
      //   console.log(data.data.price.regularMarketPrice);
      // }, 2000);
    } catch (e) {
      console.error(e);
    }
    // const { data } = await getTickerInfo(this.state.ticker);
    // console.log(data);
    // this.setState((state) => ({
    //   price: data.price.regularMarketPrice,
    //   previousPrice: state.price,
    // }));
    // setInterval();
  };

  formatHistoryData = (tickerHistory) => {
    return {
      datasets: [
        {
          data: tickerHistory,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
        },
      ],
    };
  };

  // handleChange = ({ currentTarget: input }) => {
  //   // this.setState({ ticker: e.target.value });
  // };

  render() {
    let chart = !(
      this.state.chartData &&
      Object.keys(this.state.chartData).length === 0 &&
      this.state.chartData.constructor === Object
    ) ? (
      <ChartBox data={this.state.chartData} options={this.state.chartOptions} />
    ) : null;
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>Type in the ticker</p>
        <Search
          options={this.state.tickersList}
          placeholder={"Type in the ticker..."}
          inputId={"tickers-input"}
          listId={"tickers-list"}
          onSubmit={this.handleSubmit}
          // onChnage={this.handleChange}
        />
        {chart}
        {/* <InfoSection ticker={this.state.ticker} /> */}
        {/* <p>{this.state.price}</p> */}
        {/* <p>{this.state.price - this.state.previousPrice}</p> */}
      </div>
    );
  }
}

export default App;
