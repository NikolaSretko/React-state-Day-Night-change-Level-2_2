import React, { useState } from "react";
import "./Button.scss";

const Button = () => {
const [buttonText, setButtonText] = useState("Change to Dark");
const [buttonStyle, setButtonStyle] = useState("default");

const handleClick = () => {
    if (buttonText === "Change to Dark") {
    setButtonText("Change to Light");
    setButtonStyle("dark");
    } else {
    setButtonText("Change to Dark");
    setButtonStyle("default");
    }
};

return (
    <button className={`button-${buttonStyle}`} onClick={handleClick}>
        {buttonText}
    </button>
);
};

export default Button;
