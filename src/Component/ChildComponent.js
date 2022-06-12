import React from "react";

export default function ChildComponent(props) {
  return (
    <>
      {/* arrow functions are good for passing params from child to ParentComponent in return */}
      {/* <button onClick={props.greetHandler}> Greet Parent</button> */}
      {/* access method through props  and pass param */}
      <button onClick={() => props.greetHandler("child")}> Greet Parent</button>
    </>
  );
}
