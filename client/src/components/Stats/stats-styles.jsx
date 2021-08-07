import styled from "styled-components";

export const Table = styled.table`
  width: 14rem;
  color: ${(props) => props.theme.textColor};
  /* margin: 1rem auto; */

  tr td:first-child {
    text-align: left;
    padding: 0.5rem 0;
  }

  tr td:last-child {
    text-align: right;
    padding: 0.5rem 0;
  }
`;
