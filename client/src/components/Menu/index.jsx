import React, { Component } from "react";
import { Logo, Sidebar, Author, Social } from "./sidebar-styles";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { IconContext } from "react-icons";
import Nav from "../Nav";

export class Menu extends Component {
  render() {
    return (
      <Sidebar>
        <Logo>Stocksy</Logo>
        <Nav
          items={this.props.items}
          onItemSelect={this.props.onItemSelect}
          selectedItem={this.props.selectedItem}
        />
        <Author>
          <IconContext.Provider value={{ size: "1.4rem" }}>
            <p>By Alex Genin</p>
            <a href="alexgenin.com">alexgenin.com</a>
            <Social>
              <a href="#">
                <IoLogoLinkedin />
              </a>
              <a href="#">
                <IoLogoGithub />
              </a>
              <a href="#">
                <IoLogoInstagram />
              </a>
            </Social>
          </IconContext.Provider>
        </Author>
      </Sidebar>
    );
  }
}

export default Menu;
