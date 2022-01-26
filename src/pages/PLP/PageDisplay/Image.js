import React, { Component } from "react";
import { ImageContainer } from "../PLPstyles";
import {
  mapStateToPropsForProducts,
  mapDispatchToProps,
} from "../../../store/Maps";
import circle_icon from "../../../components/images/circle_icon.svg";
import { connect } from "react-redux";
export class Image extends Component {
  render() {
    const click_plp_handler = (product) => {
      this.props.add_to_cart_plp({
        id: product.id,
        all_attributes: product.attributes,
        prices: product.prices,
      });
    };
    const { product } = this.props;
    return (
      <>
        {product.inStock === true && (
          <ImageContainer>
            <div className="img--container">
              <img src={product.gallery[0]} alt="" />

              <img
                className="circle_icon"
                src={circle_icon}
                alt=""
                onClick={(e) => {
                  e.preventDefault();
                  click_plp_handler(product);
                }}
              />
            </div>
          </ImageContainer>
        )}
        {product.inStock === false && (
          <ImageContainer>
            <div className="image--container wrap">
              <img src={product.gallery[0]} alt="" />

              <div className="content">OUT OF STOCK</div>
            </div>
          </ImageContainer>
        )}
      </>
    );
  }
}

export default connect(mapStateToPropsForProducts, mapDispatchToProps)(Image);
