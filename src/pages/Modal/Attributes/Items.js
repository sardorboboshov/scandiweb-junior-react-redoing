import React, { Component } from "react";
import { ItemsOverlay } from "../ModalStyles";
import {
  mapStateToPropsForProducts,
  mapDispatchToProps,
} from "../../../store/Maps";
import { connect } from "react-redux";

import Item from "./Item";
class Items extends Component {
  render() {
    const attribute = this.props.attribute;
    return (
      <ItemsOverlay>
        {attribute.items.map((item, idx) => {
          const isSwatch = attribute.type === "swatch" ? 1 : 0;
          return (
            <Item
              f_idx={this.props.f_idx}
              attribute={attribute}
              idx={idx}
              item={item}
              isSwatch={isSwatch}
              key={idx}
            />
          );
        })}
      </ItemsOverlay>
    );
  }
}

export default connect(mapStateToPropsForProducts, mapDispatchToProps)(Items);
