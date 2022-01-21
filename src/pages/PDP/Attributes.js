import React, { Component } from "react";
import Attribute from "./Attribute";
export class Attributes extends Component {
  render() {
    const { attributes, clickHandler } = this.props;
    return (
      <>
        {attributes.length > 0 &&
          attributes.map((attribute, idx) => {
            return (
              <Attribute
                attribute={attribute}
                key={idx}
                clickHandler={clickHandler}
              />
            );
          })}
      </>
    );
  }
}

export default Attributes;
