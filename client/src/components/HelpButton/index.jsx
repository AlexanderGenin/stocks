import React, { Component } from "react";
import { Button } from "./helpButton-styles";

export default class HelpButton extends Component {
  handleClick = () => {
    alert(
      "Type in a ticker in the search bar.\nFor example, you can type AAPL (for Apple), AMZN (for Amazon), V (for Visa), NKE (for Nike), etc.\n\nP. S. I'm still working on the project and it's not yet stable. Something might not work properly. If the app crushes, please, refresh the page. :)"
    );
  };

  render() {
    return (
      <Button type="button" onClick={() => this.handleClick()}>
        &#10068;
      </Button>
    );
  }
}
