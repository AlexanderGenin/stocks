import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  & > div > table {
    margin: 1rem;
  }
`;

export const Wrapper = styled.div`
  border-radius: 15px;
  background-color: ${(props) => props.theme.boxColor};
  padding: 1rem;
`;

export const Table = styled.table`
  width: 18rem;
  caption {
    font-weight: bold;
    text-align: left;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-left: 3px ${(props) => props.theme.mainColor} solid;
    padding-left: 0.6rem;
    font-size: 1rem;
  }
  tr th {
    text-align: left;
    padding: 0.4rem 0;
    font-weight: normal;
  }

  tr td {
    text-align: right;
    padding: 0.4rem 0;
  }
`;
