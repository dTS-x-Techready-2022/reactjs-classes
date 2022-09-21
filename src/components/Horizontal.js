import React from "react";

const Horizontal = (props) => {
  return (
    <div id="horizontal">
      {props.imgs.map((image, i) => {
        return (
          <div key={i} className="image-wrapper">
            <img src={image} className="image image-1" />
          </div>
        );
      })}
    </div>
  );
};

export default Horizontal;
