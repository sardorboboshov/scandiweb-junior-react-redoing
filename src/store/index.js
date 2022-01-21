import { createStore } from "redux";
import {
  add_to_cart_pr,
  add_to_cart_plp,
  
  crement_pr,
  total_sum,
} from "../store/functions";

if (!localStorage.getItem("currency")) {
  localStorage.setItem("currency", "USD");
}

if (!localStorage.getItem("symbol")) {
  localStorage.setItem("symbol", "$");
}

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", "[]");
}

const currency_localStorage = localStorage.getItem("currency");
const symbol = localStorage.getItem("symbol");

const initialState = {
  currency: currency_localStorage,
  symbol: symbol,
  showOverlay: false,
  cartItems: JSON.parse(localStorage.getItem("cart")),
  total_price: total_sum(JSON.parse(localStorage.getItem("cart"))),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "set_symbol":
      localStorage.setItem("symbol", action.payload);
      return {
        symbol: localStorage.getItem("symbol"),
      };
    case "set_currency":
      localStorage.setItem("currency", action.payload);
      return {
        ...state,
      };

    case "switch_show_overlay":
      return {
        showOverlay: !state.showOverlay,
      };

    case "close_overlay":
      return {
        showOverlay: false,
      };

    case "add_to_cart":
      localStorage.setItem(
        "cart",
        JSON.stringify(
          add_to_cart_pr(
            JSON.parse(localStorage.getItem("cart")),
            action.payload
          )
        )
      );

      return {
        cartItems: JSON.parse(localStorage.getItem("cart")),
      };

    case "add_to_cart_plp":
      localStorage.setItem(
        "cart",
        JSON.stringify(
          add_to_cart_plp(
            JSON.parse(localStorage.getItem("cart")),
            action.payload
          )
        )
      );
      return {
        cartItems: JSON.parse(localStorage.getItem("cart")),
      };

    case "crement_pr":
      localStorage.setItem(
        "cart",
        JSON.stringify(
          crement_pr(JSON.parse(localStorage.getItem("cart")), action.payload)
        )
      );
      return {
        ...state,
        cartItems: JSON.parse(localStorage.getItem("cart")),
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
