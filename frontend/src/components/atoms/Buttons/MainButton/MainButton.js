import React from "react";

import "./MainButton.scss";

const MainButton = ({ onClick, type, disabled, text, ...props }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className="background-orange main-button"
      {...props}
    >
      {text}
    </button>
  );
};

export default MainButton;
