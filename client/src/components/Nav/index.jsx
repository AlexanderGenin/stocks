import React from "react";
import { NavContainer } from "./nav-styles";

const Nav = ({ items, selectedItem, onItemSelect }) => {
  return (
    <NavContainer>
      {items.map(({ icon, name }, index) => (
        <div
          onClick={() => onItemSelect(index)}
          key={index}
          className={index === selectedItem ? "active" : ""}
        >
          <div className="wrapper">{icon}</div>
          <h2>{name}</h2>
        </div>
      ))}
    </NavContainer>
  );
};

export default Nav;
