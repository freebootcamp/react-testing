import React, { useState } from "react";

const Dynamic = () => {
  const [text, setText] = useState("Before change");

  const clickHandler = () => {
    setText("Changed");
  };

  return (
    <div>
      <h1>Dynamic</h1>
      {text}
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
};

export default Dynamic;
