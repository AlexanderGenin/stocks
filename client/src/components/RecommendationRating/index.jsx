import React, { Component } from "react";
import { withTheme } from "styled-components";

class RecommendationRating extends Component {
  /**
   * Draws a rounded rectangle using the current state of the canvas.
   * If you omit the last three params, it will draw a rectangle
   * outline with a 5 pixel border radius
   * @param {CanvasRenderingContext2D} ctx
   * @param {Number} x The top left x coordinate
   * @param {Number} y The top left y coordinate
   * @param {Number} width The width of the rectangle
   * @param {Number} height The height of the rectangle
   * @param {Number} [radius = 5] The corner radius; It can also be an object
   *                 to specify different radii for corners
   * @param {Number} [radius.tl = 0] Top left
   * @param {Number} [radius.tr = 0] Top right
   * @param {Number} [radius.br = 0] Bottom right
   * @param {Number} [radius.bl = 0] Bottom left
   * @param {Boolean} [fill = false] Whether to fill the rectangle.
   * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
   */

  roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke === "undefined") {
      stroke = true;
    }
    if (typeof radius === "undefined") {
      radius = 5;
    }
    if (typeof radius === "number") {
      radius = { tl: radius, tr: radius, br: radius, bl: radius };
    } else {
      var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
      for (var side in defaultRadius) {
        radius[side] = radius[side] || defaultRadius[side];
      }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(
      x + width,
      y + height,
      x + width - radius.br,
      y + height
    );
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
      ctx.fill();
    }
    if (stroke) {
      ctx.stroke();
    }
  }

  canvasRef = React.createRef();
  draw(canvas, rating) {
    let color;
    const PXS_IN_SEGMENT = 65;
    if (rating < 1.5) {
      color = this.props.theme.darkMainColor;
    } else if (1.5 <= rating && rating < 2.5) {
      color = this.props.theme.mainColor;
    } else if (2.5 <= rating && rating < 3.5) {
      color = this.props.theme.lightMainColor;
    } else if (3.5 <= rating && rating < 4.5) {
      color = this.props.theme.lightExtraColor;
    } else if (4.5 < rating) {
      color = this.props.theme.extraColor;
    }

    let ctx = canvas.current.getContext("2d");
    let coord = 20 + (rating - 1) * PXS_IN_SEGMENT;

    ctx.beginPath();
    ctx.strokeStyle = this.props.theme.linesColor;
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(20, 50);
    ctx.lineTo(280, 50);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(20, 55);
    ctx.lineTo(20, 45);
    ctx.moveTo(85, 55);
    ctx.lineTo(85, 45);
    ctx.moveTo(150, 55);
    ctx.lineTo(150, 45);
    ctx.moveTo(215, 55);
    ctx.lineTo(215, 45);
    ctx.moveTo(280, 55);
    ctx.lineTo(280, 45);
    ctx.stroke();

    ctx.font = "bold 18px 'Nunito', sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = this.props.theme.darkMainColor;
    ctx.fillText("1", 20, 80);
    ctx.fillStyle = this.props.theme.mainColor;
    ctx.fillText("2", 85, 80);
    ctx.fillStyle = this.props.theme.lightMainColor;
    ctx.fillText("3", 150, 80);
    ctx.fillStyle = this.props.theme.lightExtraColor;
    ctx.fillText("4", 215, 80);
    ctx.fillStyle = this.props.theme.extraColor;
    ctx.fillText("5", 280, 80);

    ctx.font = "14px 'Nunito', sans-serif";
    ctx.fillStyle = this.props.theme.textColor;
    ctx.fillText("Strong", 21, 110);
    ctx.fillText("Buy", 21, 130);
    ctx.fillText("Buy", 85, 110);
    ctx.fillText("Hold", 150, 110);
    ctx.fillText("Under-", 215, 110);
    ctx.fillText("perform", 215, 130);
    ctx.fillText("Sell", 280, 110);

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(coord, 38);
    ctx.lineTo(coord - 4, 30);
    ctx.lineTo(coord + 4, 30);
    ctx.fill();

    this.roundRect(ctx, coord - 20, 0, 40, 30, 6, color, null);

    ctx.font = "bold 18px sans-serif";
    ctx.fillStyle = "white";
    ctx.fillText(rating.toString(), coord, 22);
  }

  componentDidMount() {
    this.draw(this.canvasRef, this.props.rating);
  }

  componentDidUpdate() {
    this.draw(this.canvasRef, this.props.rating);
  }

  render() {
    return <canvas ref={this.canvasRef} width={300} height={150}></canvas>;
  }
}

export default withTheme(RecommendationRating);
