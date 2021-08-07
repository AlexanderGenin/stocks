import React from "react";
import { Container, H1, H2 } from "./heading-styles";

const Heading = ({ content, ticker }) => {
  return (
    <Container>
      <H1>{content}</H1>
      <H2>{ticker}</H2>
    </Container>
  );
};

export default Heading;
