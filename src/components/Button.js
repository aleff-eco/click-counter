import React from "react";
import "../stylesheets/Button.css";

function Button({text, clickButton, clickManagment}) {
  return(
    <button className={ clickButton ? "button-click" : "button-restart" } onClick={clickManagment} >
      
      {text}
    </button>
  );
}


export default Button