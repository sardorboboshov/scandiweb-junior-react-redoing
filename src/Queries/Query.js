import { gql } from "@apollo/client";

export const queryHeader = gql`
  query Header {
    categories {
      name
    }
    currencies {
      label
      symbol
    }
  }
`;

export const queryPDP = (productId) => gql`
  query Product {
    product(id: "${productId}") {
      name
      id
      category
      gallery
      inStock
      description
      brand
      attributes {
        name
        type
        items {
          displayValue
          value
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      
    }
}
`;

export const queryPLP = (categoryId) => gql`
  query Category {
    category(input: { title: "${categoryId}" }) {
      name
      products {
        id
        name
        description
        category
        inStock
        brand
        attributes {
          type
          name
          items {
            displayValue
            value
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        gallery
      }
    }
  }
`;
