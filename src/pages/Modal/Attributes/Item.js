import React, { Component } from "react";
import {
  mapStateToPropsForProducts,
  mapDispatchToProps,
} from "../../../store/Maps";
import { connect } from "react-redux";
export class Item extends Component {
  render() {
    const { attribute, idx, item, isSwatch } = this.props;
    if (isSwatch) {
      return (
        <div
          className={
            attribute.items[idx].displayValue ===
            this.props.cartItems[this.props.f_idx].attributes[attribute.name]
              ? "item__swatch item__swatch__active"
              : "item__swatch"
          }
          style={{ backgroundColor: item.value }}
          key={idx}
        />
      );
    }
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

export default connect(mapStateToPropsForProducts, mapDispatchToProps)(Item);
