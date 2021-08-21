import React, { Component } from "react";
import Title from "./../Title/index";
import { ReactComponent as WalletMoney } from "../../icons/wallet-money.svg";
import { EarningsTable } from "./analysis-styles";

export class Analysis extends Component {
  render() {
    return (
      <>
        <Title content={"Earnings Estimate"} icon={<WalletMoney />} />
        <EarningsTable>
          <thead>
            <tr>
              <th></th>
              <th className="numberOfAnalysts">Number of analysts</th>
              <th>
                <div className="avg">Avg.</div>
              </th>
              <th>
                <div className="low">Low</div>
              </th>
              <th>
                <div className="high">High</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Current Qtr. (Jun 2021)</th>
              <td className="numberOfAnalysts">28</td>
              <td>1</td>
              <td>0.82</td>
              <td>1.16</td>
            </tr>
            <tr>
              <th>Next Qtr. (Sep 2021)</th>
              <td className="numberOfAnalysts">27</td>
              <td>1.11</td>
              <td>0.83</td>
              <td>1.31</td>
            </tr>
            <tr>
              <th>Current Year (2021)</th>
              <td className="numberOfAnalysts">40</td>
              <td>5.18</td>
              <td>4.74</td>
              <td>5.6</td>
            </tr>
            <tr>
              <th>Next Year (2022)</th>
              <td className="numberOfAnalysts">40</td>
              <td>5.34</td>
              <td>4.77</td>
              <td>6.11</td>
            </tr>
          </tbody>
        </EarningsTable>
      </>
    );
  }
}

export default Analysis;
