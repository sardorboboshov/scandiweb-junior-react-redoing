import React, { Component } from "react";

export class Currencies extends Component {
  render() {
    return (
      <>
        {this.props.currencies.map((currency, idx) => (
          <li
            onClick={() => {
              this.props.set_currencyHandler(currency.label);
              this.props.set_symbol(currency.symbol);
            }}
            key={idx}
          >
            {currency.symbol} {currency.label}
          </li>
        ))}
      </>
    );
  }
}

export default Currencies;
