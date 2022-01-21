import React, { Component } from "react";
export class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_number: 0,
    };
  }
  render() {
    const clickHandler = (name, length) => {
      if (name === "prev") {
        this.setState((prevState) => ({
          img_number: (prevState.img_number - 1 + length) % length,
        }));
      }
      if (name === "next") {
        this.setState((prevState) => ({
          img_number: (prevState.img_number + 1) % length,
        }));
      }
    };
    const { gallery } = this.props;
    return (
      <>
        {gallery.length > 1 ? (
          <div className="container">
            <img src={gallery[this.state.img_number]} alt=" " />
            <div className="chevron">
              <div
                className="left"
                onClick={clickHandler.bind(this, "prev", gallery.length)}
              >
                {"<"}
              </div>
              <div
                className="right"
                onClick={clickHandler.bind(this, "next", gallery.length)}
              >
                {">"}
              </div>
            </div>
          </div>
        ) : (
          <div className="img">
            <img src={gallery[0]} alt="" />
          </div>
        )}
      </>
    );
  }
}

export default Image;
