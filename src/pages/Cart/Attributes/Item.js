import React, { Component } from "react";

export class Item extends Component {
  render() {
    const { attribute, f_idx, cartItems, idx, item, swatch } = this.props;
    if (swatch) {
      return (
        <div
          className={
            attribute.items[idx].displayValue ===
            cartItems[f_idx].attributes[attribute.name]
              ? "item__swatch item__swatch__active"
              : "item__swatch"
          }
          style={{ backgroundColor: item.value }}
          key={idx}
        >
          {attribute.items[idx].displayValue ===
            cartItems[f_idx].attributes[attribute.name] && "SELECTED"}
        </div>
      );
    } else {
      return (
        <div
          className={
            attribute.items[idx].displayValue ===
            this.props.cartItems[this.props.f_idx].attributes[attribute.name]
              ? "item item__active"
              : "item"
          }
          key={idx}
        >
          {item.value}
        </div>
      );
    }
  }
}

export default Item;
