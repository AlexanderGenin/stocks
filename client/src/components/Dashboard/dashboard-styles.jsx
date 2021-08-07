import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 1rem 2rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainContent = styled.main`
  height: 100vh;
  width: calc(100% - 12rem);
  color: ${(props) => props.theme.textColor};
`;
