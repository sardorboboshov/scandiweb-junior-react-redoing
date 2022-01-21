import React, { Component } from "react";
import {
  mapStateToPropsForProducts,
  mapDispatchToProps,
} from "../../store/Maps";
import { client } from "../../store/client";
import { connect } from "react-redux";
import { queryHeader } from "../../Queries/Query";
import HeaderDisplay from "./HeaderDisplay";
class Header extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      currencies: [],
      isLoaded: false,
      error: "",
      categories: [],
    };
  }

  async componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      try {
        const response = await client.query({
          query: queryHeader,
        });
        this.setState({
          currencies: response.data.currencies,
          categories: response.data.categories,
          isLoaded: true,
        });
      } catch (err) {
        this.setState({
          error: err,
        });
      }
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    if (this.state.error) {
      return <p>Error... </p>;
    }
    if (!this.state.isLoaded) {
      return <p>Loading...</p>;
    }
    const categories = this.state.categories.map((category) => category.name);

    return (
      <HeaderDisplay
        categories={categories}
        currencies={this.state.currencies}
        set_symbol={this.props.set_symbol}
      />
    );
  }
}

export default connect(mapStateToPropsForProducts, mapDispatchToProps)(Header);
