import React, { Component } from "react";
import overlay_plus from "../../components/images/overlay_plus.svg";
import overlay_minus from "../../components/images/overlay_minus.svg";
export class HalfOverlay extends Component {
  render() {
    return (
      <div className="items--2">
        <div className="items--2-1">
          <div
            className="crement"
            onClick={this.props.crementHandler.bind(this, "plus")}
          >
            <img src={overlay_plus} alt="" />
          </div>
          <div className="count">{this.props.count}</div>
          <div
            className="crement"
            onClick={this.props.crementHandler.bind(this, "minus")}
          >
            <img src={overlay_minus} alt="" />
          </div>
        </div>
        <div className="img">
          <img src={this.props.img} alt="" />
        </div>
      </div>
    );
  }
}

export default HalfOverlay;
