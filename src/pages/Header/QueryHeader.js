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
