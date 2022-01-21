import React, { Component } from "react";
import { connect } from "react-redux";
import {
  mapStateToPropsForProducts,
  mapDispatchToProps,
} from "../../store/Maps";
import { CartProductStyles } from "./CartStyles";
import Attributes from "./Attributes/Attributes";
import CartHalfDisplay from "./CartHalfDisplay";
import { getNumberOfCurrency } from "../../store/functions";
export class CartDisplay extends Component {
  render() {
    const { data, symbol, f_idx, cartItems, currency } = this.props;
    return (
      <>
        <hr />

        <CartProductStyles>
          <div className="items--1">
            <div className="brand">{data.brand}</div>
            <div className="name">{data.name}</div>
            <div className="price">
              {symbol}
              {data.prices[getNumberOfCurrency(currency)].amount}
            </div>
            <Attributes
              f_idx={f_idx}
              cartItems={cartItems}
              attributes={data.attributes}
            />
          </div>
          <CartHalfDisplay id={data.id} f_idx={f_idx} gallery={data.gallery} />
        </CartProductStyles>
      </>
    );
  }
}

export default connect(
  mapStateToPropsForProducts,
  mapDispatchToProps
)(CartDisplay);
