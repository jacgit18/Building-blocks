import React  from "react";


 export const Greet = (props) => {
return( 
<>
<h2>Hello {props.name} aka {props.alias}</h2>
{props.children} 
</>

)
// props render children tags
}
 // works when like this: import {Greet}  from './Component/Greet'; 

//   const Greet = () => <h2>Hell NO</h2>


// export default Greet; 
// give issue when import {Greet}  from './Component/Greet'; 
// but works import Greet  from './Component/Greet';  

