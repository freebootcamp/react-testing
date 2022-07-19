import React from "react";
import GreetingHeader from "./GreetingHeader";

const Greeting = (props) => {
  return (
    <div>
      <GreetingHeader header={props.header} />
      Greeting
      {props.message}
    </div>
  );
};

export default Greeting;
