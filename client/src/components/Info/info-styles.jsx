import styled from "styled-components";

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1em 1em;
  grid-template-areas:
    "basic description"
    "map description";
  .basic {
    grid-area: basic;
    display: grid;
    grid-template-columns: repeat(3, 12rem);
  }
  .map {
    grid-area: map;
    width: 550px;
  }
  .description {
    grid-area: description;
    margin-left: 1rem;
  }
`;
