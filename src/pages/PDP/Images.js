import React, { Component } from "react";

export class Images extends Component {
  render() {
    const { gallery } = this.props;
    return (
      <>
        {gallery.length > 1 && (
          <div className="images">
            {gallery.map((img, idx) => {
              return (
                <img
                  alt=""
                  src={img}
                  key={idx}
                  onClick={() => {
                    this.props.setImg(img);
                  }}
                />
              );
            })}
          </div>
        )}
      </>
    );
  }
}

export default Images;
