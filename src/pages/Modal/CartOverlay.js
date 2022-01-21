import React, { Component } from "react";
import { CartOverlayStyles } from "./ModalStyles";
import { NavLink } from "react-router-dom";
import CartItemsMap from "./CartItemsMap";

import {
  mapStateToPropsForProducts,
  mapDispatchToProps,
} from "../../store/Maps";
import { connect } from "react-redux";
import Modal from "./Modal";
export class CartOverlay extends Component {
  render() {
    return (
      <Modal>
        <CartOverlayStyles>
          <div className="intro">
            <div className="bag">my bag,</div>
            <div className="items">{this.props.number_of_products} items</div>
          </div>
          <CartItemsMap />
          <div className="total">
            <div className="total--text">Total</div>
            <div className="total--sum">
              {this.props.symbol}
              {this.props.total_price}
            </div>
          </div>

          <div className="buttons">
            <NavLink
              to="/cart"
              className="button view"
              onClick={this.props.close_overlay}
            >
              view bag
            </NavLink>

            <button className="button checkout">checkout</button>
          </div>
          <div className="content">{"'"}</div>
        </CartOverlayStyles>
      </Modal>
    );
  }
}

export default connect(
  mapStateToPropsForProducts,
  mapDispatchToProps
)(CartOverlay);
