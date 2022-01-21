import React, { Component } from "react";
import ProductPageDisplay from "./ProductPageDisplay";
import { client } from "../../store/client";
import {
  mapStateToPropsForProducts,
  mapDispatchToProps,
} from "../../store/Maps";
import { connect } from "react-redux";
import { queryPDP } from "../../Queries/Query";
class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      error: "",
      active_img: "",
      selectedAttributes: {},
    };
  }

  async componentDidMount() {
    if (!this.state.isLoaded) {
      try {
        const response = await client.query({
          query: queryPDP(this.props.match.params.productId),
        });
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

  render() {
    const clickHandler = (attribute, item) => {
      this.setState((prevState) => {
        let selectedAttributes = {
          ...prevState.selectedAttributes,
        };
        selectedAttributes[`${attribute.name}`] = item.displayValue;
        return { selectedAttributes };
      });
    };

    if (this.state.error) {
      return <p>Error... from pdp</p>;
    }
    if (!this.state.isLoaded) {
      return <p>Loading...</p>;
    }
    if (this.state.data) {
      return (
        <ProductPageDisplay
          state={this.state}
          clickHandler={clickHandler}
          active_img={this.state.active_img}
          setImg={(img) => {
            this.setState({ active_img: img });
          }}
        />
      );
    }
  }
}

export default connect(
  mapStateToPropsForProducts,
  mapDispatchToProps
)(ProductPage);
