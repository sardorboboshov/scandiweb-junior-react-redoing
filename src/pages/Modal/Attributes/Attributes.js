import React, { Component } from "react";
import { AttributesOverlay } from "../ModalStyles";
import Items from "./Items";

export class Attributes extends Component {
  render() {
    return (
      <>
        {this.props.attributes.map((attribute, s_idx) => {
          return (
            <AttributesOverlay key={s_idx}>
              <div className="attribute">
                <div className="attribute__name">{attribute.name}:</div>
                <Items attribute={attribute} f_idx={this.props.f_idx} />
              </div>
            </AttributesOverlay>
          );
        })}
      </>
    );
  }
}

export default Attributes;
