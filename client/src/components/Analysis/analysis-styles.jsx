import styled from "styled-components";

export const EarningsTable = styled.table`
  border-collapse: collapse;

  tr {
    th,
    td {
      text-align: center;
      padding: 1rem;
      padding-left: 1rem;
    }

    th:first-child {
      text-align: left;
      padding-left: 0;
    }
  }
  div {
    width: 2.6rem;
    margin: 0 auto;
    padding: 0.3rem 0.1rem;
    border-radius: 5px;
    color: #dae0eb;
    &.avg {
      background-color: ${(props) => props.theme.mainColor};
    }
    &.low {
      background-color: ${(props) => props.theme.textColor};
    }
    &.high {
      background-color: ${(props) => props.theme.extraColor};
    }
  }
  tbody > tr:nth-child(2) {
    border-bottom: solid ${(props) => props.theme.linesColor} 1px;
  }
  .numberOfAnalysts {
    width: 5rem;
  }
`;
