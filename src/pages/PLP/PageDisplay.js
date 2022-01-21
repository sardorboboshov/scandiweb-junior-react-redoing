import React, { Component } from "react";

import Footer from "./PageDisplay/Footer";
import Image from "./PageDisplay/Image";
import { Title, ProductListStyles, Div, StyledLink, Card } from "./PLPstyles";

export class PageDisplay extends Component {
  render() {
    const { productsData } = this.props;
    return (
      <Div>
        <Title>{productsData.name}</Title>
        <ProductListStyles>
          {productsData.products.map((product, idx) => (
            <StyledLink
              to={`/${product.category}/${product.id}`}
              out_of_stock={product.inStock === false ? 1 : 0}
              key={idx}
            >
              <Card
                key={idx}
                out_of_stock={product.inStock === false ? 1 : 0}
                nu_of_attributes={product.attributes.length === 0}
              >
                <Image product={product} />

                <Footer product={product} />
              </Card>
            </StyledLink>
          ))}
        </ProductListStyles>
      </Div>
    );
  }
}

export default PageDisplay;
