import React from "react";


// instead of usng props you can destruct Props
// export const FuctionalComp = ({name, alias, children}) => {
    export const FuctionalComp = (props) => {

    // alt way 
    const {name, alias, children} = props;
  return (
    <>
      <h2>
        Hello {name} aka {alias}
      </h2>
      {/* render nested tag */}
      {children}
      {/* {props.children} */}

    </>
  );
  // props render children tags
};
// works when like this: import {Greet}  from './Component/Greet';

//   const Greet = () => <h2>Hell NO</h2>

// export default Greet;
// give issue when import {Greet}  from './Component/Greet';
// but works import Greet  from './Component/Greet';
