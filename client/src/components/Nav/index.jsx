import React, { Component } from "react";
import { NavContainer } from "./nav-styles";

const Nav = ({ items, selectedItem, onItemSelect }) => {
  return (
    <>
      <NavContainer>
        {items.map((item, index) => (
          <div
            onClick={() => onItemSelect(index)}
            key={item.name}
            className={index === selectedItem ? "active" : ""}
          >
            <div className="wrapper">{item.icon}</div>
            <h2>{item.name}</h2>
          </div>
        ))}
      </NavContainer>
    </>
  );
};

export default Nav;
