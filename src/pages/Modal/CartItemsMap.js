import React, { Component } from "react";
import CartProductOverlay from "./CartProductOverlay";
import {
  mapStateToPropsForProducts,
  mapDispatchToProps,
} from "../../store/Maps";

import { connect } from "react-redux";
class CartItemsMap extends Component {
  render() {
    return (
      <>
        {this.props.cartItems.map((item, f_idx) => {
          return (
            <div key={JSON.stringify(item.attributes)}>
              <CartProductOverlay item={item} f_idx={f_idx} />
            </div>
          );
        })}
      </>
    );
  }
}

export default connect(
  mapStateToPropsForProducts,
  mapDispatchToProps
)(CartItemsMap);
