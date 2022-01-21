import React, { Component } from "react";
import {
  mapStateToPropsForProducts,
  mapDispatchToProps,
} from "../../store/Maps";
import { connect } from "react-redux";
import cart_plus from "../../components/images/cart_plus.svg";
import cart_minus from "../../components/images/cart_minus.svg";
import Image from "./Image";
export class CartHalfDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_number: 0,
    };
  }
  render() {
    const { f_idx, gallery, id } = this.props;
    const crementHandler = (crement) => {
      this.props.crement_pr({
        id,
        attributes: this.props.cartItems[f_idx].attributes,
        crement: crement,
      });
    };

    return (
      <div className="items--2">
        <div className="items--2-1">
          <div className="crement" onClick={crementHandler.bind(this, "plus")}>
            <img src={cart_plus} alt="" />
          </div>
          <div className="count">{this.props.cartItems[f_idx].count}</div>
          <div className="crement" onClick={crementHandler.bind(this, "minus")}>
            <img src={cart_minus} alt="" />
          </div>
        </div>
        <Image gallery={gallery} />
      </div>
    );
  }
}

export default connect(
  mapStateToPropsForProducts,
  mapDispatchToProps
)(CartHalfDisplay);
