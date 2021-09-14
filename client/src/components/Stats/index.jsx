import React, { Component } from "react";
import {
  numberWithCommas,
  shortenNumber,
  toFixed,
  toPercentages,
} from "../../utilities";
import { Table } from "./stats-styles";

export class Stats extends Component {
  render() {
    const { summaryDetail, defaultKeyStatistics, financialData } =
      this.props.stats || {};
    const { marketCap, trailingPE, forwardPE, dividendYield, volume } =
      summaryDetail;
    const { enterpriseValue, trailingEps, enterpriseToEbitda } =
      defaultKeyStatistics;
    const { returnOnEquity } = financialData;
    return (
      <Table>
        <tbody>
          <tr>
            <td>Market Cap&nbsp;</td>
            <td>{shortenNumber(marketCap)}</td>
          </tr>
          <tr>
            <td>EV&nbsp;</td>
            <td>{shortenNumber(enterpriseValue)}</td>
          </tr>
          <tr>
            <td>Trailing P/E&nbsp;</td>
            <td>{toFixed(trailingPE) || "NA"}</td>
          </tr>
          <tr>
            <td>Forward P/E&nbsp;</td>
            <td>{toFixed(forwardPE) || "NA"}</td>
          </tr>
          <tr>
            <td>EPS&nbsp;</td>
            <td>{toFixed(trailingEps) || "NA"}</td>
          </tr>
          <tr>
            <td>EV/EBITDA&nbsp;</td>
            <td>{toFixed(enterpriseToEbitda) || "NA"}</td>
          </tr>
          <tr>
            <td>ROE&nbsp;</td>
            <td>{toPercentages(returnOnEquity) || "NA"}</td>
          </tr>
          <tr>
            <td>Dividend yield&nbsp;</td>
            <td>{toPercentages(dividendYield) || "NA"}</td>
          </tr>
          <tr>
            <td>Volume&nbsp;</td>
            <td>{numberWithCommas(volume) || "NA"}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Stats;
