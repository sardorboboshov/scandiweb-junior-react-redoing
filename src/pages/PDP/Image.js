import React, { Component } from "react";
import { PDPImageContainer } from "./ProductPageStyles";
export class Image extends Component {
  render() {
    return (
      <>
        {this.props.inStock === true && (
          <PDPImageContainer>
            <div className="img--container">
              <img src={this.props.img} alt="" />
            </div>
          </PDPImageContainer>
        )}
        {this.props.inStock === false && (
          <PDPImageContainer>
            <div className="image--container wrap">
              <img src={this.props.img} alt="" />

              <div className="content">OUT OF STOCK</div>
            </div>
          </PDPImageContainer>
        )}
      </>
    );
  }
}

export default Image;
