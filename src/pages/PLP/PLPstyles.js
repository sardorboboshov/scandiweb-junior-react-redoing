import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.div`
  font-size: 42px;
  font-weight: 400;
  text-transform: capitalize;
`;

export const ProductListStyles = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 56px;
  flex-wrap: wrap;
  margin: 2rem;
  p {
    display: flex;
    cursor: pointer;
  }
`;

export const Div = styled.div`
  margin: 3rem 3rem;
  margin-top: 6rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Card = styled.div`
  width: 500px;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    .circle_icon {
      visibility: visible;
    }
  }
  .footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    width: 100%;
    align-items: baseline;
  }

  .product--name {
    font-family: "Raleway";
    font-weight: 300;
    font-size: 18px;
    color: var(--c-black);
  }

  .product--price {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
  }

  ${({ out_of_stock }) =>
    out_of_stock &&
    css`
      img,
      .product--name,
      .product--price {
        opacity: 0.5;
      }
    `}
`;

export const ImageContainer = styled.div`
  .img--container {
    position: relative;
  }
  img {
    position: static;
    max-width: 354px;
    max-height: 330px;
    width: auto;
    height: auto;
    margin-bottom: 1rem;
    align-self: center;
  }

  .circle_icon {
    position: absolute;
    visibility: hidden;
    right: 0px;
    bottom: -30px;
  }
  .wrap {
    display: flex;
    position: relative;
    text-align: center;
  }
  .wrap img + .content {
    position: absolute;
    left: 25.42%;
    right: 25.71%;
    top: 44.24%;
    bottom: 43.94%;
    font-size: 1.2rem;
    font-weight: 600;
    color: #8d8f9a;
    line-height: 160%;
  }
`;
