import React, { Component } from "react";
import { AttributeStyles, ItemsCart } from "../../PDP/PDPStyles";
import Item from "./Item";
export class Attributes extends Component {
  render() {
    const { attributes, f_idx, cartItems } = this.props;
    return (
      <>
        {attributes.map((attribute, s_idx) => {
          return (
            <AttributeStyles key={s_idx}>
              <div className="attribute">
                <div className="attribute__name">{attribute.name}:</div>
                <ItemsCart>
                  {attribute.items.map((item, idx) => {
                    return (
                      <Item
                        attribute={attribute}
                        f_idx={f_idx}
                        cartItems={cartItems}
                        idx={idx}
                        item={item}
                        swatch={attribute.type === "swatch"}
                        key={idx}
                      />
                    );
                  })}
                </ItemsCart>
              </div>
            </AttributeStyles>
          );
        })}
      </>
    );
  }
}

export default Attributes;
