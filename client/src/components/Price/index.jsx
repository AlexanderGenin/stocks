import React from "react";
import { PriceText, PriceContainer } from "./price-styles";

const Price = ({ current }) => {
  return (
    <PriceContainer>
      <PriceText>{current}</PriceText>
    </PriceContainer>
  );
};

export default Price;
