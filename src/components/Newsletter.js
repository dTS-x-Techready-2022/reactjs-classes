import React from "react";

const Newsletter = (props) => {
  return (
    <div id="newsletter">
      <div className="title-wrapper">
        <h3>NEWSLETTER</h3>
      </div>
      <div className="forms-wrapper">
        <input placeholder="Email" />
        <button onClick={props.greetingFn}>SUBMMIT</button>
      </div>
    </div>
  );
};

export default Newsletter;
