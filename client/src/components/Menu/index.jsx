import React, { Component } from "react";
import { Logo, Sidebar, Author, Social } from "./sidebar-styles";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import Nav from "../Nav";

export class Menu extends Component {
  render() {
    const { items, onItemSelect, selectedItem } = this.props;

    return (
      <Sidebar>
        <Logo>Stocksy</Logo>
        <Nav
          items={items}
          onItemSelect={onItemSelect}
          selectedItem={selectedItem}
        />
        <Author>
          <IconContext.Provider value={{ size: "1.2rem" }}>
            <p>By Alex Genin</p>
            <a href="https://alexgenin.com" target="_blank" rel="noreferrer">
              alexgenin.com
            </a>
            <Social>
              <a
                href="https://www.linkedin.com/in/alex-genin/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/alexandergenin"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/alexgenin99"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
            </Social>
          </IconContext.Provider>
        </Author>
      </Sidebar>
    );
  }
}

export default Menu;
