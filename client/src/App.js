import React, { Component } from "react";
import yf from "yahoo-finance";
import InfoSection from "./components/infoSection";
import SearchBox from "./components/searchBox";
import { getTickers } from "./services/tickerService";
import { getTickerInfo, getTickerHistory } from "./services/tickerService";
import ChartBox from "./components/chartBox";

class App extends Component {
  state = {
    typingTimeout: 0,
    matchingTickers: [],
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
      elements: {
        point: {
          radius: 0,
        },
      },
    },
  };

  handleSubmit = async (e) => {
    const ticker = e.target.query.value;
    try {
      const data = await getTickerInfo(ticker);
      console.log(data);
      const { data: tickerHistory } = await getTickerHistory(ticker);
      // console.log(tickerHistory);
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
    tickerHistory.forEach(
      (el) => (el.date = new Date(el.date).toLocaleDateString("ru-RU"))
    );

    return {
      datasets: [
        {
          data: tickerHistory,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          lineTension: 0.5,
        },
      ],
    };
  };

  handleChange = (e) => {
    if (this.state.typingTimeout) {
      clearTimeout(this.state.typingTimeout);
    }

    this.setState({
      ticker: e.target.value,
      typingTimeout: setTimeout(() => {
        this.getTickers(e.target.value);
      }, 1000),
    });
  };

  getTickers = async (value) => {
    const { data: matchingTickers } = await getTickers(value);
    const mapped = matchingTickers.map((el) => el.Ticker);
    this.setState({ matchingTickers: mapped });
  };

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
        <SearchBox
          options={this.state.matchingTickers}
          placeholder={"Type in the ticker..."}
          inputId={"tickers-input"}
          listId={"tickers-list"}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        {chart}
      </div>
    );
  }
}

export default App;
