import React, { Component } from "react";
import {
  mapStateToPropsForProducts,
  mapDispatchToProps,
} from "../../../store/Maps";

import { connect } from "react-redux";

import styled from "styled-components";

const getNumberOfCurrency = (str) => {
  if (str === "USD") {
    return 0;
  } else if (str === "GBP") {
    return 1;
  } else if (str === "AUD") {
    return 2;
  } else if (str === "JPY") {
    return 3;
  } else if (str === "RUB") {
    return 4;
  }
};

class PricePage extends Component {
  render() {
    return (
      <PricePageStyle>
        <div className="product--price">
          {
            this.props.prices[getNumberOfCurrency(this.props.currency)].currency
              .symbol
          }
          {this.props.prices[getNumberOfCurrency(this.props.currency)].amount}
        </div>
      </PricePageStyle>
    );
  }
}

export default connect(
  mapStateToPropsForProducts,
  mapDispatchToProps
)(PricePage);

const PricePageStyle = styled.div`
  .product--price {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #1d1f22;
    display: block;
  }
`;
