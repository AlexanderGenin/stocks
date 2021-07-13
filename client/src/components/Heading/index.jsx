import React from "react";
import { H1, H2 } from "./heading-styles";

const Heading = ({ content, ticker }) => {
  return (
    <>
      <H1>{content}</H1>
      <H2>{ticker}</H2>
    </>
  );
};

export default Heading;
