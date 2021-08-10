import styled from "styled-components";

export const MainContent = styled.main`
  height: 100vh;
  width: calc(100% - 12rem);
  position: relative;
  overflow-y: scroll;
  color: ${(props) => props.theme.textColor};
  &::-webkit-scrollbar {
    width: 8px;
    background-color: ${(props) => props.theme.bgColor};
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: ${(props) => props.theme.bgColor};
    /* border: 1px solid #ccc; */
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #2b2d32;
    /* border: 1px solid #aaa; */
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #37393b;
  }
  &::-webkit-scrollbar-thumb:active {
    background-color: #37393b;
  }
`;

export const Wrapper = styled.div`
  margin: 1rem 4rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChartsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  grid-template-areas:
    "one one"
    "two three";

  div:nth-child(1) {
    grid-area: one;
  }

  div:nth-child(2) {
    grid-area: two;
  }

  div:nth-child(3) {
    grid-area: three;
  }
`;
