import React, { Component } from "react";
import { getTickers } from "../../services/tickerService";
import { getTickerInfo, getTickerHistory } from "../../services/tickerService";
import { Menu } from "../Menu/index";
import { ThemeProvider } from "styled-components";
import Dashboard from "../Dashboard";

class App extends Component {
  state = {
    ticker: "",
    typingTimeout: 0,
    matchingTickers: [],
    prevPrice: null,
    tickerInfo: null,
    tickerHistory: null,
    chartData: null,
    chartOptions: {
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
          ticks: {
            autoSkip: true,
            maxTicksLimit: 20,
          },
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
  };

  theme = {
    mainColor: "#2745EA",
    linesColor: "#90929673",
  };

  handleSubmit = async (e) => {
    const ticker = e.target.query.value;
    try {
      // Fetch the necessary ticker data for setting the App state
      const [{ data: tickerInfo }, { data: tickerHistory }] = await Promise.all(
        [getTickerInfo(ticker), getTickerHistory(ticker)]
      );

      console.log(tickerInfo, tickerHistory);

      this.setState({
        tickerInfo,
        chartData: this.formatData(tickerHistory),
      });
    } catch (e) {
      console.error(e);
    }
  };

  formatData = (tickerHistory) => {
    // Use dd.mm.yyyy format instead of ISO format
    tickerHistory.forEach(
      (el) => (el.date = new Date(el.date).toLocaleDateString("ru-RU"))
    );

    const data = (canvas) => {
      let ctx = canvas.getContext("2d");
      let gradient = ctx.createLinearGradient(0, 0, 0, 270);
      gradient.addColorStop(0, "#C639E8");
      gradient.addColorStop(1, "#09090B");

      return {
        datasets: [
          {
            label: "",
            data: tickerHistory,
            fill: true,
            backgroundColor: gradient,
            borderColor: "#C639E8",
            borderWidth: 2,
            lineTension: 0.5,
          },
        ],
      };
    };

    return data;
  };

  handleChange = (e) => {
    this.getTickers(e.target.value);
  };

  getTickers = async (value) => {
    const { data: matchingTickers } = await getTickers(value);
    const mapped = matchingTickers.map((el) => el.Ticker);
    this.setState({ matchingTickers: mapped });
  };

  render() {
    return (
      <>
        <ThemeProvider theme={this.theme}>
          <Menu />
          <Dashboard {...this.state} />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
