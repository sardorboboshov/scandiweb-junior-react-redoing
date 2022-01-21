import React, { Component } from "react";
import { client } from "../../store/client";
import {
  mapStateToPropsForProducts,
  mapDispatchToProps,
} from "../../store/Maps";
import { connect } from "react-redux";
import { queryPDP } from "../../Queries/Query";
import CartDisplay from "./CartDisplay";
export class CartProduct extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      data: [],
      isLoaded: false,
      error: "",
      img_number: 0,
    };
  }

  async componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      try {
        const response = await client.query({
          query: queryPDP(this.props.item.id),
        });
        this._isMounted &&
          this.setState({
            data: response.data.product,
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
      return <p>Error... from cart</p>;
    }
    if (!this.state.isLoaded) {
      return <p>Loading...</p>;
    }
    if (this.state.data) {
      return <CartDisplay data={this.state.data} f_idx={this.props.f_idx} />;
    }
  }
}

export default connect(
  mapStateToPropsForProducts,
  mapDispatchToProps
)(CartProduct);
