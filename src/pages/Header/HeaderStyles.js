import styled from "styled-components";

export const Navigation = styled.header`
  position: relative;

  ul,
  li {
    list-style-type: none;
  }
  ul {
    display: flex;
  }

  .up_vector {
    display: none;
  }
  .nav__listitem {
    list-style: none;
    font-weight: bold;
    position: relative;
    padding: 1.5rem 1rem;
    cursor: pointer;
    &:hover ul,
    &:focus ul {
      opacity: 1;
      visibility: visible;
    }
    &:hover .down_vector,
    &:focus .down_vector {
      display: none;
    }
    &:hover .up_vector,
    &:focus .up_vector {
      display: block;
    }

    .currency {
      width: 40px;
      display: flex;
      gap: 10px;
      flex-direction: row-reverse;
      justify-content: flex-start;
      div {
        font-weight: 500;
      }
    }
  }
  .nav__listitemdrop {
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    padding: 1rem;
    margin-top: 1rem;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    width: 114px;
    top: 2rem;
    visibility: hidden;

    li {
      align-self: flex-start;
      display: flex;
      flex-direction: column;
      padding: 0.5rem;
      flex-wrap: nowrap;
      font-weight: 500;
      font-size: 1rem;
      color: var(--c-black);
      &:hover {
        color: var(--c-white);
        background-color: var(--c-black);
        width: 100%;
      }
    }
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  .items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(50% + 41px);
  }
  .items-1 {
    display: flex;

    justify-content: space-between;
    align-items: center;
  }
  .wrapper--basket {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header__basketcount {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    top: -13px;
    right: -14px;
    width: 23px;
    height: 23px;
    background-color: black;
    color: white;
    border-radius: 50%;

    font-weight: 700;
    font-size: 14px;
    font-family: Roboto;
  }

  .link {
    text-decoration-style: none;
    padding: 2rem 1rem;
    text-transform: uppercase;
    font-family: "Raleway";
    font-weight: normal;
    font-size: 1rem;
    border: 2px solid transparent;
  }
  .active {
    color: var(--c-primary);
    box-sizing: content-box;
    border-bottom: 2px solid var(--c-primary);
    font-weight: 600;
  }
`;
