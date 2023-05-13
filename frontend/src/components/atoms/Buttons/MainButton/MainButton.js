import React from "react";

import "./MainButton.scss";

const MainButton = (props) => {
    return (
        <button onClick={props.onClick} type={props.type} className="background-orange main-button">
            {props.text}
        </button>
    );
};

export default MainButton;
