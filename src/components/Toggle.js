import React from "react";


function Toggle({ onClick, isOn }) {

  // const color = !isOn ? "red" : "white";

  return <button onClick={onClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
