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
                <td>{marketCap || "N/A"}</td>
              </tr>
              <tr>
                <th>Enterprise Value</th>
                <td>{enterpriseValue || "N/A"}</td>
              </tr>
              <tr>
                <th>Trailing P/E</th>
                <td>{trailingPE || "N/A"}</td>
              </tr>
              <tr>
                <th>Forward P/E</th>
                <td>{forwardPE || "N/A"}</td>
              </tr>
              <tr>
                <th>PEG Ratio (5 yr expected)</th>
                <td>{pegRatio || "N/A"}</td>
              </tr>
              <tr>
                <th>Price/Sales (ttm)</th>
                <td>{priceToSalesTrailing12Months || "N/A"}</td>
              </tr>
              <tr>
                <th>Price/Book (mrq)</th>
                <td>{priceToBook || "N/A"}</td>
              </tr>
              <tr>
                <th>Enterprise Value/Revenue</th>
                <td>{enterpriseToRevenue || "N/A"}</td>
              </tr>
              <tr>
                <th>Enterprise Value/EBITDA</th>
                <td>{enterpriseToEbitda || "N/A"}</td>
              </tr>
            </Table>
          </WrapperValuation>
          <WrapperDividends>
            <Title content={"Dividends & Splits"} icon={<PercentageSquare />} />
            <Table>
              <tr>
                <th colSpan={2}>Forward Annual Dividend Rate</th>
                <td>{dividendRate || "N/A"}</td>
              </tr>
              <tr>
                <th colSpan={2}>Forward Annual Dividend Yield</th>
                <td>{dividendYield || "N/A"}</td>
              </tr>
              <tr>
                <th colSpan={2}>Trailing Annual Dividend Rate</th>
                <td>{trailingAnnualDividendRate || "N/A"}</td>
              </tr>
              <tr>
                <th colSpan={2}>Trailing Annual Dividend Yield</th>
                <td>{trailingAnnualDividendYield || "N/A"}</td>
              </tr>
              <tr>
                <th colSpan={2}>5 Year Average Dividend Yield</th>
                <td>{fiveYearAvgDividendYield || "N/A"}</td>
              </tr>
              <tr>
                <th colSpan={2}>Payout Ratio</th>
                <td>{payoutRatio || "N/A"}</td>
              </tr>
              <tr>
                <th>Dividend Date</th>
                <td colSpan={2}>{dividendDate || "N/A"}</td>
              </tr>
              <tr>
                <th>Ex-Dividend Date 4</th>
                <td colSpan={2}>{exDividendDate || "N/A"}</td>
              </tr>
              <tr>
                <th colSpan={2}>Last Split Factor 2</th>
                <td>{lastSplitFactor || "N/A"}</td>
              </tr>
              <tr>
                <th>Last Split Date 3</th>
                <td colSpan={2}>{lastSplitDate || "N/A"}</td>
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
              <td>{lastFiscalYearEnd || "N/A"}</td>
            </tr>
            <tr>
              <th>Most Recent Quarter (mrq)</th>
              <td>{mostRecentQuarter || "N/A"}</td>
            </tr>
          </Table>
          <Table>
            <caption>Profitability</caption>
            <tr>
              <th>Profit Margin</th>
              <td>{profitMargins || "N/A"}</td>
            </tr>
            <tr>
              <th>Operating Margin (ttm)</th>
              <td>{operatingMargins || "N/A"}</td>
            </tr>
          </Table>
          <Table>
            <caption>Management Effectiveness</caption>
            <tr>
              <th>Return on Assets (ttm)</th>
              <td>{returnOnAssets || "N/A"}</td>
            </tr>
            <tr>
              <th>Return on Equity (ttm)</th>
              <td>{returnOnEquity || "N/A"}</td>
            </tr>
          </Table>
          <Table>
            <caption>Income Statement</caption>
            <tr>
              <th>Revenue (ttm)</th>
              <td>{totalRevenue || "N/A"}</td>
            </tr>
            <tr>
              <th>Revenue Per Share (ttm)</th>
              <td>{revenuePerShare || "N/A"}</td>
            </tr>
            <tr>
              <th>Quarterly Revenue Growth (yoy)</th>
              <td>{revenueGrowth || "N/A"}</td>
            </tr>
            <tr>
              <th>Gross Profit (ttm)</th>
              <td>{grossProfits || "N/A"}</td>
            </tr>
            <tr>
              <th>EBITDA</th>
              <td>{ebitda || "N/A"}</td>
            </tr>
            <tr>
              <th>Net Income Avi to Common (ttm)</th>
              <td>{netIncomeToCommon || "N/A"}</td>
            </tr>
            <tr>
              <th>Diluted EPS (ttm)</th>
              <td>{trailingEps || "N/A"}</td>
            </tr>
            <tr>
              <th>Quarterly Earnings Growth (yoy)</th>
              <td>{earningsQuarterlyGrowth || "N/A"}</td>
            </tr>
          </Table>
          <Table>
            <caption>Balance Sheet</caption>
            <tr>
              <th>Total Cash (mrq)</th>
              <td>{totalCash || "N/A"}</td>
            </tr>
            <tr>
              <th>Total Cash Per Share (mrq)</th>
              <td>{totalCashPerShare || "N/A"}</td>
            </tr>
            <tr>
              <th>Total Debt (mrq) </th>
              <td>{totalDebt || "N/A"}</td>
            </tr>
            <tr>
              <th>Total Debt/Equity (mrq) </th>
              <td>{debtToEquity || "N/A"}</td>
            </tr>
            <tr>
              <th>Current Ratio (mrq)</th>
              <td>{currentRatio || "N/A"}</td>
            </tr>
            <tr>
              <th>Book Value Per Share (mrq)</th>
              <td>{bookValue || "N/A"}</td>
            </tr>
          </Table>
          <Table>
            <caption>Cash Flow Statement</caption>
            <tr>
              <th>Operating Cash Flow (ttm)</th>
              <td>{operatingCashflow || "N/A"}</td>
            </tr>
            <tr>
              <th>Levered Free Cash Flow (ttm)</th>
              <td>{freeCashflow || "N/A"}</td>
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
              <td>{beta || "N/A"}</td>
            </tr>
            <tr>
              <th>52-Week Change 3</th>
              <td>{fiftyTwoWeekChange || "N/A"}</td>
            </tr>
            <tr>
              <th>S&P500 52-Week Change 3</th>
              <td>{SandP52WeekChange || "N/A"}</td>
            </tr>
            <tr>
              <th>52 Week High 3</th>
              <td>{fiftyTwoWeekHigh || "N/A"}</td>
            </tr>
            <tr>
              <th>52 Week Low 3 </th>
              <td>{fiftyTwoWeekLow || "N/A"}</td>
            </tr>
            <tr>
              <th>50-Day Moving Average 3</th>
              <td>{fiftyDayAverage || "N/A"}</td>
            </tr>
            <tr>
              <th>200-Day Moving Average 3</th>
              <td>{twoHundredDayAverage || "N/A"}</td>
            </tr>
          </Table>
          <Table>
            <caption>Share Statistics</caption>
            <tr>
              <th>Avg Vol (3 month)</th>
              <td>{averageVolume || "N/A"}</td>
            </tr>
            <tr>
              <th>Avg Vol (10 day)</th>
              <td>{averageVolume10days || "N/A"}</td>
            </tr>
            <tr>
              <th>Shares Outstanding</th>
              <td>{sharesOutstanding || "N/A"}</td>
            </tr>
            <tr>
              <th>Implied Shares Outstanding</th>
              <td>{impliedSharesOutstanding || "N/A"}</td>
            </tr>
            <tr>
              <th>Float</th>
              <td>{floatShares || "N/A"}</td>
            </tr>
            <tr>
              <th>% Held by Insiders</th>
              <td>{heldPercentInsiders || "N/A"}</td>
            </tr>
            <tr>
              <th>% Held by Institutions</th>
              <td>{heldPercentInstitutions || "N/A"}</td>
            </tr>
            <tr>
              <th>Shares Short (Jul 14, 2021)</th>
              <td>{sharesShort || "N/A"}</td>
            </tr>
            <tr>
              <th>Short Ratio (Jul 14, 2021)</th>
              <td>{shortRatio || "N/A"}</td>
            </tr>
            <tr>
              <th>Short % of Float (Jul 14, 2021)</th>
              <td>{shortPercentOfFloat || "N/A"}</td>
            </tr>
            <tr>
              <th>Short % of Shares Outstanding (Jul 14, 2021)</th>
              <td>{sharesPercentSharesOut || "N/A"}</td>
            </tr>
            <tr>
              <th>Shares Short (prior month Jun 14, 2021)</th>
              <td>{sharesShortPriorMonth || "N/A"}</td>
            </tr>
          </Table>
        </div>
      </Container>
    );
  }
}

export default Financials;
