import React from "react";
import { PriceText, PriceContainer, PriceChange } from "./price-styles";

const Price = ({ current }) => {
  return (
    <PriceContainer>
      <PriceText>{current}</PriceText>
      <PriceChange>+12,63 (14,43 %)</PriceChange>
    </PriceContainer>
  );
};

export default Price;
