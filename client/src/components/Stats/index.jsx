import React, { Component } from "react";
import { RiQuestionLine } from "react-icons/ri";
import { Table } from "./stats-styles";

export class Stats extends Component {
  shortenNumber(labelValue) {
    return Math.abs(Number(labelValue)) >= 1.0e12
      ? (Math.abs(Number(labelValue)) / 1.0e12).toFixed(2) + "T"
      : Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
      : Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
      : Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
      : Math.abs(Number(labelValue));
  }

  toPercentages(number) {
    return (number * 100).toFixed(2) + "%";
  }

  render() {
    const stats = this.props.stats;
    return (
      <Table>
        <tbody>
          <tr>
            <td>
              Market Cap&nbsp;
              <RiQuestionLine />
            </td>
            <td>{this.shortenNumber(stats.summaryDetail.marketCap)}</td>
          </tr>
          <tr>
            <td>
              EV&nbsp;
              <RiQuestionLine />
            </td>
            <td>
              {this.shortenNumber(stats.defaultKeyStatistics.enterpriseValue)}
            </td>
          </tr>
          <tr>
            <td>
              Trailing P/E&nbsp;
              <RiQuestionLine />
            </td>
            <td>
              {stats.summaryDetail.trailingPE &&
                stats.summaryDetail.trailingPE.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td>
              Forward P/E&nbsp;
              <RiQuestionLine />
            </td>
            <td>
              {stats.summaryDetail.forwardPE &&
                stats.summaryDetail.forwardPE.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td>
              EPS&nbsp;
              <RiQuestionLine />
            </td>
            <td>
              {stats.defaultKeyStatistics.trailingEps &&
                stats.defaultKeyStatistics.trailingEps.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td>
              EV/EBITDA&nbsp;
              <RiQuestionLine />
            </td>
            <td>
              {stats.defaultKeyStatistics.enterpriseToEbitda &&
                stats.defaultKeyStatistics.enterpriseToEbitda.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td>
              ROE&nbsp;
              <RiQuestionLine />
            </td>
            <td>
              {stats.financialData.returnOnEquity &&
                this.toPercentages(stats.financialData.returnOnEquity)}
            </td>
          </tr>
          <tr>
            <td>
              Dividend yield&nbsp;
              <RiQuestionLine />
            </td>
            <td>
              {stats.summaryDetail.dividendYield &&
                this.toPercentages(stats.summaryDetail.dividendYield)}
            </td>
          </tr>
          <tr>
            <td>
              Volume&nbsp;
              <RiQuestionLine />
            </td>
            <td>
              {stats.summaryDetail.volume &&
                stats.summaryDetail.volume.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Stats;
