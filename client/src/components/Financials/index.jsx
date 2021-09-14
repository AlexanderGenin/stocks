import React, { Component } from "react";
import {
  Container,
  Table,
  WrapperDividends,
  WrapperValuation,
} from "./financials-styles";
import Title from "./../Title/index";
import { ReactComponent as NoteFavorite } from "../../icons/note-favorite.svg";
import { ReactComponent as PercentageSquare } from "../../icons/percentage-square.svg";
import { ReactComponent as FavoriteChart } from "../../icons/favorite-chart.svg";
import { ReactComponent as PresentationChart } from "../../icons/presentation-chart.svg";
import {
  formateDate,
  shortenNumber,
  toFixed,
  toPercentages,
} from "../../utilities";

export class Financials extends Component {
  render() {
    const {
      summaryDetail,
      defaultKeyStatistics,
      calendarEvents,
      financialData,
    } = this.props.tickerStats;

    const {
      marketCap,
      trailingPE,
      forwardPE,
      priceToSalesTrailing12Months,
      dividendRate,
      dividendYield,
      fiveYearAvgDividendYield,
      trailingAnnualDividendRate,
      trailingAnnualDividendYield,
      payoutRatio,
      fiftyTwoWeekLow,
      fiftyTwoWeekHigh,
      fiftyDayAverage,
      twoHundredDayAverage,
      averageVolume,
      averageVolume10days,
    } = summaryDetail || {};

    const {
      enterpriseValue,
      pegRatio,
      priceToBook,
      enterpriseToRevenue,
      enterpriseToEbitda,
      lastSplitFactor,
      lastSplitDate,
      lastFiscalYearEnd,
      mostRecentQuarter,
      netIncomeToCommon,
      trailingEps,
      earningsQuarterlyGrowth,
      bookValue,
      beta,
      "52WeekChange": fiftyTwoWeekChange,
      SandP52WeekChange,
      sharesOutstanding,
      impliedSharesOutstanding,
      floatShares,
      heldPercentInsiders,
      heldPercentInstitutions,
      sharesShort,
      shortRatio,
      shortPercentOfFloat,
      sharesPercentSharesOut,
      sharesShortPriorMonth,
    } = defaultKeyStatistics || {};

    const { dividendDate, exDividendDate } = calendarEvents || {};

    const {
      profitMargins,
      operatingMargins,
      returnOnAssets,
      returnOnEquity,
      totalRevenue,
      revenuePerShare,
      revenueGrowth,
      grossProfits,
      ebitda,
      totalCash,
      totalCashPerShare,
      totalDebt,
      debtToEquity,
      currentRatio,
      operatingCashflow,
      freeCashflow,
    } = financialData || {};

    return (
      <Container>
        <div>
          <WrapperValuation>
            <Title
              content={"Valuation Measures"}
              icon={<FavoriteChart />}
            ></Title>
            <Table>
              <tr>
                <th>Market Cap (intraday)</th>
                <td>{shortenNumber(marketCap) || "N/A"}</td>
              </tr>
              <tr>
                <th>Enterprise Value</th>
                <td>{shortenNumber(enterpriseValue) || "N/A"}</td>
              </tr>
              <tr>
                <th>Trailing P/E</th>
                <td>{toFixed(trailingPE) || "N/A"}</td>
              </tr>
              <tr>
                <th>Forward P/E</th>
                <td>{toFixed(forwardPE) || "N/A"}</td>
              </tr>
              <tr>
                <th>PEG Ratio (5 yr expected)</th>
                <td>{toFixed(pegRatio) || "N/A"}</td>
              </tr>
              <tr>
                <th>Price/Sales (ttm)</th>
                <td>{toFixed(priceToSalesTrailing12Months) || "N/A"}</td>
              </tr>
              <tr>
                <th>Price/Book (mrq)</th>
                <td>{toFixed(priceToBook) || "N/A"}</td>
              </tr>
              <tr>
                <th>Enterprise Value/Revenue</th>
                <td>{toFixed(enterpriseToRevenue) || "N/A"}</td>
              </tr>
              <tr>
                <th>Enterprise Value/EBITDA</th>
                <td>{toFixed(enterpriseToEbitda) || "N/A"}</td>
              </tr>
            </Table>
          </WrapperValuation>
          <WrapperDividends>
            <Title content={"Dividends & Splits"} icon={<PercentageSquare />} />
            <Table>
              <tr>
                <th colSpan={2}>Forward Annual Dividend Rate</th>
                <td>{toFixed(dividendRate) || "N/A"}</td>
              </tr>
              <tr>
                <th colSpan={2}>Forward Annual Dividend Yield</th>
                <td>{toPercentages(dividendYield) || "N/A"}</td>
              </tr>
              <tr>
                <th colSpan={2}>Trailing Annual Dividend Rate</th>
                <td>{toFixed(trailingAnnualDividendRate) || "N/A"}</td>
              </tr>
              <tr>
                <th colSpan={2}>Trailing Annual Dividend Yield</th>
                <td>{toPercentages(trailingAnnualDividendYield) || "N/A"}</td>
              </tr>
              <tr>
                <th colSpan={2}>5 Year Average Dividend Yield</th>
                <td>{toFixed(fiveYearAvgDividendYield) || "N/A"}</td>
              </tr>
              <tr>
                <th colSpan={2}>Payout Ratio</th>
                <td>{toPercentages(payoutRatio) || "N/A"}</td>
              </tr>
              <tr>
                <th>Dividend Date</th>
                <td colSpan={2}>{formateDate(dividendDate) || "N/A"}</td>
              </tr>
              <tr>
                <th>Ex-Dividend Date 4</th>
                <td colSpan={2}>{formateDate(exDividendDate) || "N/A"}</td>
              </tr>
              <tr>
                <th colSpan={2}>Last Split Factor 2</th>
                <td>{lastSplitFactor || "N/A"}</td>
              </tr>
              <tr>
                <th>Last Split Date 3</th>
                <td colSpan={2}>{formateDate(lastSplitDate) || "N/A"}</td>
              </tr>
            </Table>
          </WrapperDividends>
        </div>
        <div>
          <Title
            content={"Financial Highlights"}
            icon={<NoteFavorite />}
          ></Title>
          <Table>
            <caption>Fiscal Year</caption>
            <tr>
              <th>Fiscal Year Ends</th>
              <td>{formateDate(lastFiscalYearEnd) || "N/A"}</td>
            </tr>
            <tr>
              <th>Most Recent Quarter (mrq)</th>
              <td>{formateDate(mostRecentQuarter) || "N/A"}</td>
            </tr>
          </Table>
          <Table>
            <caption>Profitability</caption>
            <tr>
              <th>Profit Margin</th>
              <td>{toPercentages(profitMargins) || "N/A"}</td>
            </tr>
            <tr>
              <th>Operating Margin (ttm)</th>
              <td>{toPercentages(operatingMargins) || "N/A"}</td>
            </tr>
          </Table>
          <Table>
            <caption>Management Effectiveness</caption>
            <tr>
              <th>Return on Assets</th>
              <td>{toPercentages(returnOnAssets) || "N/A"}</td>
            </tr>
            <tr>
              <th>Return on Equity</th>
              <td>{toPercentages(returnOnEquity) || "N/A"}</td>
            </tr>
          </Table>
          <Table>
            <caption>Income Statement</caption>
            <tr>
              <th>Revenue</th>
              <td>{shortenNumber(totalRevenue) || "N/A"}</td>
            </tr>
            <tr>
              <th>Revenue Per Share</th>
              <td>{toFixed(revenuePerShare) || "N/A"}</td>
            </tr>
            <tr>
              <th>Quarterly Revenue Growth (yoy)</th>
              <td>{toPercentages(revenueGrowth) || "N/A"}</td>
            </tr>
            <tr>
              <th>Gross Profit</th>
              <td>{shortenNumber(grossProfits) || "N/A"}</td>
            </tr>
            <tr>
              <th>EBITDA</th>
              <td>{shortenNumber(ebitda) || "N/A"}</td>
            </tr>
            <tr>
              <th>Net Income Avi to Common</th>
              <td>{shortenNumber(netIncomeToCommon) || "N/A"}</td>
            </tr>
            <tr>
              <th>Diluted EPS (ttm)</th>
              <td>{toFixed(trailingEps) || "N/A"}</td>
            </tr>
            <tr>
              <th>Quarterly Earnings Growth</th>
              <td>{toPercentages(earningsQuarterlyGrowth) || "N/A"}</td>
            </tr>
          </Table>
          <Table>
            <caption>Balance Sheet</caption>
            <tr>
              <th>Total Cash</th>
              <td>{shortenNumber(totalCash) || "N/A"}</td>
            </tr>
            <tr>
              <th>Total Cash Per Share</th>
              <td>{toFixed(totalCashPerShare) || "N/A"}</td>
            </tr>
            <tr>
              <th>Total Debt </th>
              <td>{shortenNumber(totalDebt) || "N/A"}</td>
            </tr>
            <tr>
              <th>Total Debt/Equity </th>
              <td>{toFixed(debtToEquity) || "N/A"}</td>
            </tr>
            <tr>
              <th>Current Ratio</th>
              <td>{toFixed(currentRatio) || "N/A"}</td>
            </tr>
            <tr>
              <th>Book Value Per Share</th>
              <td>{toFixed(bookValue) || "N/A"}</td>
            </tr>
          </Table>
          <Table>
            <caption>Cash Flow Statement</caption>
            <tr>
              <th>Operating Cash Flow (ttm)</th>
              <td>{shortenNumber(operatingCashflow) || "N/A"}</td>
            </tr>
            <tr>
              <th>Levered Free Cash Flow (ttm)</th>
              <td>{shortenNumber(freeCashflow) || "N/A"}</td>
            </tr>
          </Table>
        </div>
        <div>
          <Title
            content={"Trading Information"}
            icon={<PresentationChart />}
          ></Title>
          <Table>
            <caption>Stock price History</caption>
            <tr>
              <th>Beta (5Y Monthly) </th>
              <td>{toFixed(beta) || "N/A"}</td>
            </tr>
            <tr>
              <th>52-Week Change 3</th>
              <td>{toPercentages(fiftyTwoWeekChange) || "N/A"}</td>
            </tr>
            <tr>
              <th>S&P500 52-Week Change 3</th>
              <td>{toPercentages(SandP52WeekChange) || "N/A"}</td>
            </tr>
            <tr>
              <th>52 Week High 3</th>
              <td>{toFixed(fiftyTwoWeekHigh) || "N/A"}</td>
            </tr>
            <tr>
              <th>52 Week Low 3 </th>
              <td>{toFixed(fiftyTwoWeekLow) || "N/A"}</td>
            </tr>
            <tr>
              <th>50-Day Moving Average 3</th>
              <td>{toFixed(fiftyDayAverage) || "N/A"}</td>
            </tr>
            <tr>
              <th>200-Day Moving Average 3</th>
              <td>{toFixed(twoHundredDayAverage) || "N/A"}</td>
            </tr>
          </Table>
          <Table>
            <caption>Share Statistics</caption>
            <tr>
              <th>Avg Vol (3 month)</th>
              <td>{shortenNumber(averageVolume) || "N/A"}</td>
            </tr>
            <tr>
              <th>Avg Vol (10 day)</th>
              <td>{shortenNumber(averageVolume10days) || "N/A"}</td>
            </tr>
            <tr>
              <th>Shares Outstanding</th>
              <td>{shortenNumber(sharesOutstanding) || "N/A"}</td>
            </tr>
            <tr>
              <th>Implied Shares Outstanding</th>
              <td>{shortenNumber(impliedSharesOutstanding) || "N/A"}</td>
            </tr>
            <tr>
              <th>Float</th>
              <td>{shortenNumber(floatShares) || "N/A"}</td>
            </tr>
            <tr>
              <th>% Held by Insiders</th>
              <td>{toPercentages(heldPercentInsiders) || "N/A"}</td>
            </tr>
            <tr>
              <th>% Held by Institutions</th>
              <td>{toPercentages(heldPercentInstitutions) || "N/A"}</td>
            </tr>
            <tr>
              <th>Shares Short (Jul 14, 2021)</th>
              <td>{shortenNumber(sharesShort) || "N/A"}</td>
            </tr>
            <tr>
              <th>Short Ratio (Jul 14, 2021)</th>
              <td>{toFixed(shortRatio) || "N/A"}</td>
            </tr>
            <tr>
              <th>Short % of Float (Jul 14, 2021)</th>
              <td>{toPercentages(shortPercentOfFloat) || "N/A"}</td>
            </tr>
            <tr>
              <th>Short % of Shares Outstanding (Jul 14, 2021)</th>
              <td>{toPercentages(sharesPercentSharesOut) || "N/A"}</td>
            </tr>
            <tr>
              <th>Shares Short (prior month Jun 14, 2021)</th>
              <td>{shortenNumber(sharesShortPriorMonth) || "N/A"}</td>
            </tr>
          </Table>
        </div>
      </Container>
    );
  }
}

export default Financials;
