import React, { Component } from "react";
import { ReactComponent as ClipboardText } from "../../icons/clipboard-text.svg";
import { ReactComponent as MoneyReceive } from "../../icons/money-receive.svg";
import { ReactComponent as Activity } from "../../icons/activity.svg";
import { ReactComponent as InfoCircle } from "../../icons/info-circle.svg";
import { Logo, Nav, Sidebar, Author, Social } from "./sidebar-styles";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { IconContext } from "react-icons";

export class Menu extends Component {
  render() {
    return (
      <Sidebar>
        <Logo>Stocksy</Logo>
        <Nav>
          <div>
            <ClipboardText />
            <h2>Summary</h2>
          </div>
          <div>
            <MoneyReceive />
            <h2>Financials</h2>
          </div>
          <div>
            <Activity />
            <h2>Analysis</h2>
          </div>
          <div>
            <InfoCircle />
            <h2>Info</h2>
          </div>
        </Nav>
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
