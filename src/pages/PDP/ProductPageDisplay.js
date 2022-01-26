import React, { Component } from "react";
import PriceProduct from "./PriceProduct";
import Attributes from "./Attributes";
import ReactHtmlParser from "react-html-parser";
import {
  DescriptionWrapper,
  StyledLinkPr,
  Wrapper,
  OneStyle,
  StyledDescription,
} from "./ProductPageStyles";
import Images from "./Images";
import Image from "./Image";
import {
  mapStateToPropsForProducts,
  mapDispatchToProps,
} from "../../store/Maps";
import { connect } from "react-redux";
import { getLengthOfObject } from "../../store/functions";
class ProductPageDisplay extends Component {
  render() {
    const { state, active_img, clickHandler, setImg } = this.props;
    const { selectedAttributes, data } = state;
    const notselectedAllAttributes =
      getLengthOfObject(selectedAttributes) === data.attributes.length ? 0 : 1;
    const out_of_stock = data.inStock === false ? 1 : 0;
    return (
      <DescriptionWrapper>
        <Images gallery={data.gallery} setImg={setImg} />
        <Image inStock={data.inStock} img={active_img || data.gallery[0]} />
        {/* <div className="big-image">
          <img src={active_img || data.gallery[0]} alt="" />
        </div> */}
        <OneStyle
          className="description"
          notselected={notselectedAllAttributes}
        >
          <div className="product__brand">{data.brand}</div>
          <div className="product__name">{data.name}</div>
          <Attributes
            attributes={data.attributes}
            clickHandler={clickHandler}
          />
          <PriceProduct prices={data.prices} />
          <Wrapper
            notselected={notselectedAllAttributes}
            out_of_stock={out_of_stock}
          >
            <StyledLinkPr
              notselected={notselectedAllAttributes}
              out_of_stock={out_of_stock}
              onClick={() =>
                this.props.add_to_cart({
                  id: data.id,
                  attributes: selectedAttributes,
                  prices: data.prices,
                })
              }
            >
              <div>add to cart</div>
            </StyledLinkPr>
          </Wrapper>
          <StyledDescription className="description--text">
            {ReactHtmlParser(data.description)}
          </StyledDescription>
        </OneStyle>
      </DescriptionWrapper>
    );
  }
}

export default connect(
  mapStateToPropsForProducts,
  mapDispatchToProps
)(ProductPageDisplay);
