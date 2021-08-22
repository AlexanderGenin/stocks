import React, { Component } from "react";
import {
  Container,
  Table,
  Wrapper,
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
                <td>123</td>
              </tr>
              <tr>
                <th>Enterprise Value</th>
                <td>123</td>
              </tr>
              <tr>
                <th>Trailing P/E</th>
                <td>123</td>
              </tr>
              <tr>
                <th>Forward P/E</th>
                <td>123</td>
              </tr>
              <tr>
                <th>PEG Ratio (5 yr expected)</th>
                <td>123</td>
              </tr>
              <tr>
                <th>Price/Sales (ttm)</th>
                <td>123</td>
              </tr>
              <tr>
                <th>Price/Book (mrq)</th>
                <td>123</td>
              </tr>
              <tr>
                <th>Enterprise Value/Revenue</th>
                <td>123</td>
              </tr>
              <tr>
                <th>Enterprise Value/EBITDA</th>
                <td>123</td>
              </tr>
            </Table>
          </WrapperValuation>
          <WrapperDividends>
            <Title content={"Dividends & Splits"} icon={<PercentageSquare />} />
            <Table>
              <tr>
                <th colSpan={2}>Forward Annual Dividend Rate</th>
                <td>0.88</td>
              </tr>
              <tr>
                <th colSpan={2}>Forward Annual Dividend Yield</th>
                <td>0.60%</td>
              </tr>
              <tr>
                <th colSpan={2}>Trailing Annual Dividend Rate</th>
                <td>0.83</td>
              </tr>
              <tr>
                <th colSpan={2}>Trailing Annual Dividend Yield</th>
                <td>0.58%</td>
              </tr>
              <tr>
                <th colSpan={2}>5 Year Average Dividend Yield</th>
                <td>1.32</td>
              </tr>
              <tr>
                <th colSpan={2}>Payout Ratio 4</th>
                <td>16.31%</td>
              </tr>
              <tr>
                <th>Dividend Date 3 </th>
                <td colSpan={2}>May 12, 2021</td>
              </tr>
              <tr>
                <th>Ex-Dividend Date 4</th>
                <td colSpan={2}>Aug 05, 2021</td>
              </tr>
              <tr>
                <th colSpan={2}>Last Split Factor 2</th>
                <td>4:1</td>
              </tr>
              <tr>
                <th>Last Split Date 3</th>
                <td colSpan={2}>Aug 30, 2020</td>
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
              <td>Sep 25, 2020</td>
            </tr>
            <tr>
              <th>Most Recent Quarter (mrq)</th>
              <td>Jun 25, 2021</td>
            </tr>
          </Table>
          <Table>
            <caption>Profitability</caption>
            <tr>
              <th>Profit Margin</th>
              <td>25,00%</td>
            </tr>
            <tr>
              <th>Operating Margin (ttm)</th>
              <td>28.79%</td>
            </tr>
          </Table>
          <Table>
            <caption>Management Effectiveness</caption>
            <tr>
              <th>Return on Assets (ttm)</th>
              <td>19.30%</td>
            </tr>
            <tr>
              <th>Return on Equity (ttm)</th>
              <td>127.13%</td>
            </tr>
          </Table>
          <Table>
            <caption>Income Statement</caption>
            <tr>
              <th>Revenue (ttm)</th>
              <td>47.16B</td>
            </tr>
            <tr>
              <th>Revenue Per Share (ttm)</th>
              <td>20.61</td>
            </tr>
            <tr>
              <th>Quarterly Revenue Growth (yoy)</th>
              <td>36.40%</td>
            </tr>
            <tr>
              <th>Gross Profit (ttm)</th>
              <td>104.96B</td>
            </tr>
            <tr>
              <th>EBITDA</th>
              <td>110.93B</td>
            </tr>
            <tr>
              <th>Net Income Avi to Common (ttm)</th>
              <td>86.8B</td>
            </tr>
            <tr>
              <th>Diluted EPS (ttm)</th>
              <td>5.11</td>
            </tr>
            <tr>
              <th>Quarterly Earnings Growth (yoy)</th>
              <td>93.20%</td>
            </tr>
          </Table>
          <Table>
            <caption>Balance Sheet</caption>
            <tr>
              <th>Total Cash (mrq)</th>
              <td>61.7B</td>
            </tr>
            <tr>
              <th>Total Cash Per Share (mrq)</th>
              <td>3.73</td>
            </tr>
            <tr>
              <th>Total Debt (mrq) </th>
              <td>135.49B</td>
            </tr>
            <tr>
              <th>Total Debt/Equity (mrq) </th>
              <td>210.78</td>
            </tr>
            <tr>
              <th>Current Ratio (mrq)</th>
              <td>1.06</td>
            </tr>
            <tr>
              <th>Book Value Per Share (mrq)</th>
              <td>3.88</td>
            </tr>
          </Table>
          <Table>
            <caption>Cash Flow Statement</caption>
            <tr>
              <th>Operating Cash Flow (ttm)</th>
              <td>104.41B</td>
            </tr>
            <tr>
              <th>Levered Free Cash Flow (ttm)</th>
              <td>80.63B</td>
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
              <td>1.21</td>
            </tr>
            <tr>
              <th>52-Week Change 3</th>
              <td>36.44%</td>
            </tr>
            <tr>
              <th>S&P500 52-Week Change 3</th>
              <td>34.53%</td>
            </tr>
            <tr>
              <th>52 Week High 3</th>
              <td>150.00</td>
            </tr>
            <tr>
              <th>52 Week Low 3 </th>
              <td>100.82</td>
            </tr>
            <tr>
              <th>50-Day Moving Average 3</th>
              <td>139.32</td>
            </tr>
            <tr>
              <th>200-Day Moving Average 3</th>
              <td>131.15</td>
            </tr>
          </Table>
          <Table>
            <caption>Share Statistics</caption>
            <tr>
              <th>Avg Vol (3 month)</th>
              <td>84.19M</td>
            </tr>
            <tr>
              <th>Avg Vol (10 day)</th>
              <td>88.02M</td>
            </tr>
            <tr>
              <th>Shares Outstanding</th>
              <td>16.53B</td>
            </tr>
            <tr>
              <th>Implied Shares Outstanding</th>
              <td>N/A</td>
            </tr>
            <tr>
              <th>Float</th>
              <td>16.51B</td>
            </tr>
            <tr>
              <th>% Held by Insiders</th>
              <td>0.07%</td>
            </tr>
            <tr>
              <th>% Held by Institutions</th>
              <td>58.54%</td>
            </tr>
            <tr>
              <th>Shares Short (Jul 14, 2021)</th>
              <td>96.36M</td>
            </tr>
            <tr>
              <th>Short Ratio (Jul 14, 2021)</th>
              <td>1.14</td>
            </tr>
            <tr>
              <th>Short % of Float (Jul 14, 2021)</th>
              <td>0.58%</td>
            </tr>
            <tr>
              <th>Short % of Shares Outstanding (Jul 14, 2021)</th>
              <td>0.58%</td>
            </tr>
            <tr>
              <th>Shares Short (prior month Jun 14, 2021)</th>
              <td>108.94M</td>
            </tr>
          </Table>
        </div>
      </Container>
    );
  }
}

export default Financials;
