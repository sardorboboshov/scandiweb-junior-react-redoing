import styled from "styled-components";
import { AttributeStyles, ItemsCart } from "../PDP/PDPStyles";
import { CartProductStyles } from "../Cart/CartStyles";
export const BackdropStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background: rgba(57, 55, 72, 0.22);
`;

export const CartOverlayStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  .intro {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    .bag {
      font-weight: 700;
      font-size: 16px;
      text-transform: capitalize;
    }
    .items {
      font-weight: 500;
      font-size: 16px;
    }
  }

  .total {
    display: flex;
    font-weight: 600;
    font-size: 16px;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .total--text {
    font-family: "Roboto";
    font-weight: 500;
  }
  .total--sum {
    font-family: "Raleway";
    font-weight: 700;
  }

  .buttons--wrapper {
    display: flex;
    flex-direction: column;
  }

  .buttons {
    display: flex;
    gap: 12px;
    .button {
      all: unset;
      width: 140px;
      height: 43px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 600;
      &:hover {
        cursor: pointer;
      }
    }
    .view {
      color: var(--c-black);
      background: white;
      border: 1px solid #1d1f22;
    }
    .checkout {
      color: white;
      background: var(--c-primary);
      border: 1px solid transparent;
    }
  }
  .content {
    margin-top: 0.1rem;
    color: white;
  }
`;

export const CartProductOverlayStyles = styled(CartProductStyles)`
  gap: 1rem;
  justify-content: space-between;
  .items--1 {
    justify-content: space-between;

    .brand,
    .name {
      font-weight: 300;
      font-size: 16px;
    }
    .price {
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 5px;
    }
  }
  .items--2 {
    gap: 6px;
    .items--2-1 {
      .count {
        font-size: 16px;
        font-weight: 500;
      }
    }
    .img {
      img {
        width: 110px;
        display: flex;
        position: relative;
        text-align: center;
      }
    }
  }
`;

export const AttributesOverlay = styled(AttributeStyles)`
  gap: 0;
  .attribute {
    .attribute__name {
      font-weight: 300;
      font-size: 12px;
      margin-bottom: 0.2rem;
    }
  }
`;

export const ItemsOverlay = styled(ItemsCart)`
  gap: 0.5rem;
  .item__swatch {
    display: none;
    width: 24px;
    height: 24px;
  }

  .item__swatch__active {
    display: flex;
  }

  .item {
    width: 24px;
    height: 24px;
    font-size: 8px;
    font-family: "Source Sans Pro";
    background: rgba(166, 166, 166, 0.2);
    border: 1px solid #a6a6a6;
    color: #a6a6a6;
  }
  .item__active {
    color: var(--c-black);
    background: white;
  }
`;

export const ModalOverlayStyles = styled.div`
  position: absolute;
  top: 6rem;
  right: 5rem;
  width: 350px;

  background-color: white;
  padding: 1rem;
  padding-bottom: 0;
  z-index: 30;
  display: flex;
  @media (max-width: 514px) {
    top: 10rem;
  }
  @media (min-height: 540px) {
    overflow-y: scroll;
    max-height: 540px;
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 1px solid slategrey;
      border-radius: 5px;
    }
  }
`;
