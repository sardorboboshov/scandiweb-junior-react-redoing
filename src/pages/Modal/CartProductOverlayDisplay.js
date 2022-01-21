import React, { Component } from "react";

import { getNumberOfCurrency } from "../../store/functions";
import { connect } from "react-redux";
import {
  mapStateToPropsForProducts,
  mapDispatchToProps,
} from "../../store/Maps";
import { CartProductOverlayStyles } from "./ModalStyles";
import Attributes from "./Attributes/Attributes";
import HalfOverlay from "./HalfOverlay";
export class CartProductOverlayDisplay extends Component {
  render() {
    const { data } = this.props;
    const amount = this.props.data.prices[
      getNumberOfCurrency(this.props.currency)
    ].amount;
    const crementHandler = (crement) => {
      this.props.crement_pr({
        id: this.props.data.id,
        attributes: this.props.cartItems[this.props.f_idx].attributes,
        crement: crement,
      });
    };
    return (
      <CartProductOverlayStyles>
        <div className="items--1">
          <div className="brand">{data.brand}</div>
          <div className="name">{data.name}</div>
          <div className="price">
            {this.props.symbol}
            {amount}
          </div>
          <Attributes attributes={data.attributes} f_idx={this.props.f_idx} />
        </div>
        <HalfOverlay
          crementHandler={crementHandler}
          count={this.props.cartItems[this.props.f_idx].count}
          img={data.gallery[0]}
        />
      </CartProductOverlayStyles>
    );
  }
}

export default connect(
  mapStateToPropsForProducts,
  mapDispatchToProps
)(CartProductOverlayDisplay);
