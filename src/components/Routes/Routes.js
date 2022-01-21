import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Header from "../../pages/Header/Header";
import Page from "../../pages/PLP/Page";
import ProductPage from "../../pages/PDP/ProductPage";
import Cart from "../../pages/Cart/Cart";

class Category extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/cart" component={Cart} exact />
          <Route path="/*/:productId" component={ProductPage} exact />
          <Route path="/:categoryId" component={Page} exact />

          <Route exact path="/">
            <Redirect to="/all" />
          </Route>
        </Switch>
      </>
    );
  }
}
export default Category;
