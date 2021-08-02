import React, { Component } from "react";

export default function Title({ content, Icon }) {
  return (
    <>
      <Icon />
      <h3>{content}</h3>
    </>
  );
}
