import styled from "styled-components";

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem 1rem;
  grid-template-areas:
    "basic description"
    "map description";
  .basic {
    grid-area: basic;
    display: grid;
    grid-template-columns: repeat(3, 12rem);
    height: 16rem;

    p {
      margin: 0.2rem 0;
    }
  }
  .map {
    grid-area: map;
    width: 550px;
  }
  .description {
    grid-area: description;
    margin-left: 1rem;
  }
  iframe {
    border: 0;
  }
`;
