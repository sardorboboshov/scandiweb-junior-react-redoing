import styled from "styled-components";

export const AttributeStyles = styled.div`
  .attribute {
    &__name {
      text-transform: uppercase;
      display: flex;
      font-style: normal;
      font-weight: bold;
      font-family: "Roboto Condensed";

      font-size: 18px;
      line-height: 18px;
      color: var(--c-black);
      margin-bottom: 1rem;
    }
  }
`;

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;

  .item__swatch {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 63px;
    height: 45px;
    display: flex;
    padding: 10px;
    border: 1px solid var(--c-black);
    font-size: 0.6rem;
    &__active {
      font-weight: 600;
      color: #e25822;
    }
  }

  .item {
    width: 63px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--c-black);
    font-family: "Source Sans Pro";
    font-size: 16px;
    &__active {
      background-color: var(--c-black);
      color: white;
    }
  }

  .item,
  .item__swatch {
    &:hover {
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
      cursor: pointer;
    }
  }
`;

export const ItemsCart = styled(Items)`
  .item,
  .item__swatch {
    &:hover {
      transform: none;
    }
  }
`;
