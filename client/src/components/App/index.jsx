import React, { Component } from "react";
import { getTickers } from "../../services/tickerService";
import { getTickerStats, getTickerHistory } from "../../services/tickerService";
import { Menu } from "../Menu/index";
import { ThemeProvider } from "styled-components";
import Dashboard from "../Dashboard";
import { Container } from "./app-styles";

class App extends Component {
  state = {
    ticker: "",
    typingTimeout: 0,
    matchingTickers: [],
    prevPrice: null,
    tickerStats: null,
    tickerHistory: null,
    chartData: null,
    chartOptions: {
      interaction: {
        intersect: false,
        mode: "index",
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
          pointHoverRadius: 8,
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
    darkMainColor: "#0D2398",
    mainColor: "#2745EA",
    lightMainColor: "#7B8EF2",
    extraColor: "#C639E8",
    lightExtraColor: "#DB80F1",
    bgColor: "#111317",
    boxColor: "#1A1E23",
    linesColor: "#90929673",
    textColor: "#959598",
    extraTextColor: "#959598",
  };

  handleSubmit = async (e) => {
    this.clearData();
    const ticker = e.target.query.value;
    await this.getTicker(ticker);
  };

  handleClick = async (ticker) => {
    this.clearData();
    await this.getTicker(ticker);
  };

  getTicker = async (ticker) => {
    try {
      // Fetch the necessary ticker data for setting the App state
      const [{ data: tickerStats }, { data: tickerHistory }] =
        await Promise.all([getTickerStats(ticker), getTickerHistory(ticker)]);

      console.log(tickerStats, tickerHistory);

      this.setState({
        tickerStats,
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
      let gradient = ctx.createLinearGradient(0, 0, 0, 260);
      gradient.addColorStop(0, "#2744ea4b");
      gradient.addColorStop(1, "#09090B");

      return {
        datasets: [
          {
            label: "",
            data: tickerHistory,
            fill: true,
            backgroundColor: gradient,
            borderColor: this.theme.mainColor,
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
    const mapped = matchingTickers;
    let tickerWithoutDots = mapped.filter((el) => !el.Ticker.includes("."));
    let tickerWithDots = mapped.filter((el) => el.Ticker.includes("."));
    this.setState({
      matchingTickers: [...tickerWithoutDots, ...tickerWithDots],
    });
  };

  clearData = () => {
    this.setState({
      prevPrice: null,
      tickerStats: null,
      tickerHistory: null,
      chartData: null,
    });
  };

  render() {
    return (
      <>
        <ThemeProvider theme={this.theme}>
          <Container>
            <Menu />
            <Dashboard
              {...this.state}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              onClick={this.handleClick}
              clearData={this.clearData}
            />
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
