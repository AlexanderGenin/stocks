import React from "react";
import { RiQuestionLine } from "react-icons/ri";
import { Table } from "./stats-styles";

const Stats = (params) => {
  return (
    <Table>
      <tbody>
        <tr>
          <td>
            Market Cap&nbsp;
            <RiQuestionLine />
          </td>
          <td>2.37T</td>
        </tr>
        <tr>
          <td>
            EV&nbsp;
            <RiQuestionLine />
          </td>
          <td>2.41T</td>
        </tr>
        <tr>
          <td>
            P/E Ratio&nbsp;
            <RiQuestionLine />
          </td>
          <td>32.5</td>
        </tr>
        <tr>
          <td>
            Forward P/E&nbsp;
            <RiQuestionLine />
          </td>
          <td>32.5</td>
        </tr>
        <tr>
          <td>
            EPS&nbsp;
            <RiQuestionLine />
          </td>
          <td>32.5</td>
        </tr>
        <tr>
          <td>
            EV/EBITDA&nbsp;
            <RiQuestionLine />
          </td>
          <td>32.5</td>
        </tr>
        <tr>
          <td>
            ROE&nbsp;
            <RiQuestionLine />
          </td>
          <td>32.5</td>
        </tr>
        <tr>
          <td>
            Dividend yield&nbsp;
            <RiQuestionLine />
          </td>
          <td>0.64%</td>
        </tr>
        <tr>
          <td>
            Volume&nbsp;
            <RiQuestionLine />
          </td>
          <td>104,818,578</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Stats;
