import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export class Navlinks extends Component {
  render() {
    return (
      <>
        {this.props.categories.map((category) => {
          return (
            <NavLink
              key={category}
              className="link"
              activeClassName="active"
              to={"/" + category}
            >
              {category}
            </NavLink>
          );
        })}
      </>
    );
  }
}

export default Navlinks;
