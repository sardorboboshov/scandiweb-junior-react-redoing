import React, { Component } from "react";
import { client } from "../../store/client";
import PageDisplay from "./PageDisplay";
import { queryPLP } from "../../Queries/Query";
import {
  mapStateToPropsForProducts,
  mapDispatchToProps,
} from "../../store/Maps";

import { connect } from "react-redux";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
      error: "",
    };
  }
  async fetchingData() {
    try {
      const response = await client.query({
        query: queryPLP(this.props.match.params.categoryId),
      });
      this.setState({
        data: response.data,
        isLoaded: true,
      });
    } catch (err) {
      this.setState({
        error: err,
      });
    }
  }

  async componentDidMount() {
    await this.fetchingData();
  }
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.match.params.categoryId !== this.props.match.params.categoryId
    ) {
      await this.fetchingData();
    }
  }

  render() {
    if (this.state.error) {
      return <p>Error... from plp</p>;
    }
    if (!this.state.isLoaded) {
      return <p>Loading...</p>;
    }
    if (this.state.data.category) {
      const productsData = this.state.data.category;
      return <PageDisplay productsData={productsData} />;
    }
  }
}
export default connect(mapStateToPropsForProducts, mapDispatchToProps)(Page);
