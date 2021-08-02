import React, { Component } from "react";
import { ReactComponent as ClipboardText } from "../../icons/clipboard-text.svg";
import { ReactComponent as MoneyReceive } from "../../icons/money-receive.svg";
import { ReactComponent as Activity } from "../../icons/activity.svg";
import { ReactComponent as InfoCircle } from "../../icons/info-circle.svg";
import { Logo, Nav, Sidebar } from "./sidebar-styles";

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
      </Sidebar>
    );
  }
}

export default Menu;
