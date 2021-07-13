import React, { Component } from "react";
import Search from "./components/Search/index";
import { getTickers } from "./services/tickerService";
import { getTickerInfo, getTickerHistory } from "./services/tickerService";
import ChartBox from "./components/ChartBox";
import Heading from "./components/Heading";
import Price from "./components/Price";

class App extends Component {
  state = {
    typingTimeout: 0,
    matchingTickers: [],
    ticker: "",
    previousPrice: "",
    tickerHistory: null,
  };

  handleSubmit = async (e) => {
    const ticker = e.target.query.value;
    try {
      const { data: tickerData } = await getTickerInfo(ticker);
      this.setState({ tickerData });
      console.log(tickerData);
      const { data: tickerHistory } = await getTickerHistory(ticker);
      this.setState({
        chartData: this.formatHistoryData(tickerHistory),
        chartOptions: {
          animation: {
            duration: 0,
          },
          parsing: {
            xAxisKey: "date",
            yAxisKey: "close",
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              reverse: true,
            },
            y: {
              grid: {
                display: false,
              },
            },
          },
          elements: {
            point: {
              radius: 0,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      setInterval(async function () {
        const { data: tickerData } = await getTickerInfo(ticker);
        this.setState({ price: tickerData.price.regularMarketPrice });
      }, 2000);
    } catch (e) {
      console.error(e);
    }
  };

  formatHistoryData = (tickerHistory) => {
    tickerHistory.forEach(
      (el) => (el.date = new Date(el.date).toLocaleDateString("ru-RU"))
    );

    return {
      datasets: [
        {
          label: "",
          data: tickerHistory,
          borderColor: "#2FC57D",
          borderWidth: 2,
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
    return (
      <React.Fragment>
        <Search
          options={this.state.matchingTickers}
          placeholder={"Type in the ticker..."}
          inputId={"tickers-input"}
          listId={"tickers-list"}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        {this.state.tickerData && (
          <Heading
            content={this.state.tickerData.price.longName}
            ticker={this.state.tickerData.price.symbol}
          />
        )}
        {/* {this.state.tickerData && (
          <Price current={this.state.tickerData.price.regularMarketPrice} />
        )} */}
        {this.state.chartData && (
          <ChartBox
            data={this.state.chartData}
            options={this.state.chartOptions}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
