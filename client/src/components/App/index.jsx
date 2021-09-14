import React, { Component } from "react";
import { getTickers } from "../../services/tickerService";
import { getTickerStats, getTickerHistory } from "../../services/tickerService";
import { Menu } from "../Menu/index";
import { ThemeProvider } from "styled-components";
import Dashboard from "../Dashboard";
import { Container } from "./app-styles";
import { ReactComponent as ClipboardText } from "../../icons/clipboard-text.svg";
import { ReactComponent as MoneyReceive } from "../../icons/money-receive.svg";
import { ReactComponent as Activity } from "../../icons/activity.svg";
import { ReactComponent as InfoCircle } from "../../icons/info-circle.svg";

class App extends Component {
  state = {
    items: [
      { name: "Summary", icon: <ClipboardText /> },
      { name: "Financials", icon: <MoneyReceive /> },
      { name: "Analysis", icon: <Activity /> },
      { name: "Info", icon: <InfoCircle /> },
    ],
    selectedItem: 0,
    ticker: "",
    typingTimeout: 0,
    matchingTickers: [],
    price: null,
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
        title: {
          display: true,
          padding: 0,
          text: "1-year price change",
          font: {
            family: "'Nunito', 'Arial', sans-serif",
            size: 18,
          },
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
    textColor: "#afb2b6",
    extraTextColor: "#959598",
  };

  handleSubmit = async (e) => {
    this.clearData();
    this.setState({ ticker: e.target.query.value });
    await this.getTicker(this.state.ticker);
  };

  handleClick = async (ticker) => {
    this.clearData();
    this.setState({ ticker });
    await this.getTicker(ticker);
  };

  handleItemSelect = (itemIndex) => {
    this.setState({
      selectedItem: itemIndex,
    });
  };

  getTicker = async (ticker) => {
    try {
      // Fetch the necessary ticker data and set the App state
      const [{ data: tickerStats }, { data: tickerHistory }] =
        await Promise.all([getTickerStats(ticker), getTickerHistory(ticker)]);

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
    try {
      const { data: matchingTickers } = await getTickers(value);
      const mapped = matchingTickers;
      let tickerWithoutDots = mapped.filter((el) => !el.ticker.includes("."));
      let tickerWithDots = mapped.filter((el) => el.ticker.includes("."));
      this.setState({
        matchingTickers: [...tickerWithoutDots, ...tickerWithDots],
      });
    } catch (e) {
      console.error(e);
    }
  };

  clearData = () => {
    this.setState({
      price: null,
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
            <Menu
              items={this.state.items}
              selectedItem={this.state.selectedItem}
              onItemSelect={this.handleItemSelect}
            />
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
