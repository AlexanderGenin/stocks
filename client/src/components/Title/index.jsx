import React from "react";
import { H3, Wrapper } from "./title-styles";

export default function Title({ content, icon }) {
  return (
    <Wrapper>
      {icon}
      <H3>{content}</H3>
    </Wrapper>
  );
}
