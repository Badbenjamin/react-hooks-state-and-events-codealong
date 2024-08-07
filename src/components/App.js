import React from "react";
import Toggle from "./Toggle";
import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(Array(3).fill(true))

  function handleClick(i) {
    const whichButton = isOn.slice()
    whichButton[i] = whichButton[i] ? false : true;
    setIsOn(whichButton)
  }



  return (
    <div>
      <h3>Toggle</h3>
      <Toggle onClick={() => handleClick(0)} isOn={isOn[0]} />
      <Toggle onClick={() => handleClick(1)} isOn={isOn[1]} />
      <Toggle onClick={() => handleClick(2)} isOn={isOn[2]} />
    </div>
  );
}

export default App;
