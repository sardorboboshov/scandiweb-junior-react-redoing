import React, { Component } from "react";

export class BasketCount extends Component {
  render() {
    return (
      <>
        {this.props.number_of_products > 0 && (
          <span className="header__basketcount">
            {this.props.number_of_products}
          </span>
        )}
      </>
    );
  }
}

export default BasketCount;
