import React from "react";
import { Table } from "../Analysis/analysis-styles";

export default function EarningsEstimate({ earnings }) {
  const { earningsAverage, earningsLow, earningsHigh } = earnings;
  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th className="numberOfAnalysts">Num. of analysts</th>
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
          <td className="numberOfAnalysts">-</td>
          <td>{earningsAverage || "-"}</td>
          <td>{earningsLow || "-"}</td>
          <td>{earningsHigh || "-"}</td>
        </tr>
        <tr>
          <th>Next Qtr. (Sep 2021)</th>
          <td className="numberOfAnalysts">-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <th>Current Year (2021)</th>
          <td className="numberOfAnalysts">-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <th>Next Year (2022)</th>
          <td className="numberOfAnalysts">-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
  );
}
