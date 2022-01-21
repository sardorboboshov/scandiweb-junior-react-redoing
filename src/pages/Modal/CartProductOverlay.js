import React, { Component } from "react";
import { client } from "../../store/client";
import { connect } from "react-redux";
import {
  mapStateToPropsForProducts,
  mapDispatchToProps,
} from "../../store/Maps";
import CartProductOverlayDisplay from "./CartProductOverlayDisplay";
import { queryPDP } from "../../Queries/Query";
class CartProductOverlay extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      data: [],
      isLoaded: false,
      error: "",
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
      return <p>Error... from modal overlay</p>;
    }
    if (!this.state.isLoaded) {
      return <p>Loading...</p>;
    }
    if (this.state.data) {
      return (
        <CartProductOverlayDisplay
          data={this.state.data}
          f_idx={this.props.f_idx}
        />
      );
    }
  }
}

export default connect(
  mapStateToPropsForProducts,
  mapDispatchToProps
)(CartProductOverlay);
