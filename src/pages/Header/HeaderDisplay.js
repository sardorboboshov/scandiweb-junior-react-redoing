import React, { Component } from "react";
import { Navlinks } from "./Navlinks";
import { Currencies } from "./Currencies";
import BasketCount from "./BasketCount";
import { Navigation } from "./HeaderStyles";
import down_vector from "../../components/images/down_vector.svg";
import up_vector from "../../components/images/up_vector.svg";
import { connect } from "react-redux";
import {
  mapStateToPropsForProducts,
  mapDispatchToProps,
} from "../../store/Maps";
import logo from "../../components/images/logo.svg";
import cart from "../../components/images/cart.svg";

export class HeaderDisplay extends Component {
  constructor(props) {
    super(props);
    this.basket_click_handler = this.basket_click_handler.bind(this);
  }
  basket_click_handler(e) {
    e.stopPropagation();
    this.props.switch_show_overlay();
  }

  render() {
    const { categories, currencies } = this.props;
    return (
      <Navigation>
        <div className="items">
          <div className="items-1">
            <Navlinks categories={categories} />
          </div>
          <img className="logo" src={logo} alt="logo" />
        </div>

        <ul className="right__corner">
          <li className="nav__listitem">
            <div className="currency">
              <img src={down_vector} alt="logo" className="down_vector" />
              <img src={up_vector} alt="logo" className="up_vector" />
              <div>{this.props.symbol}</div>
            </div>
            <ul className="nav__listitemdrop">
              <Currencies
                currencies={currencies}
                set_currencyHandler={this.props.set_currency}
                set_symbol={this.props.set_symbol}
              />
            </ul>
          </li>
          <li className="nav__listitem">
            <div
              className="wrapper--basket"
              onClick={this.basket_click_handler}
            >
              <img className="basket" src={cart} alt="logo" />
              <BasketCount number_of_products={this.props.number_of_products} />
            </div>
          </li>
        </ul>
      </Navigation>
    );
  }
}

export default connect(
  mapStateToPropsForProducts,
  mapDispatchToProps
)(HeaderDisplay);
