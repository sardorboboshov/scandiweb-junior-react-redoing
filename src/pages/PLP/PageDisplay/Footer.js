import React, { Component } from "react";
import PricePage from "./PricePage";
export class Footer extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="footer">
        <Paragraph name={product.name} brand={product.brand} />
        <PricePage prices={product.prices} />
      </div>
    );
  }
}

export default Footer;

class Paragraph extends Component {
  render() {
    return (
      <div className="product--name">
        {this.props.brand} {this.props.name}
      </div>
    );
  }
}
