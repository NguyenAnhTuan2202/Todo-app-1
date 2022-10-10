import React from "react";

import styled from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styled.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
