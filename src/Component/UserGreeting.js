import React, { Component } from 'react'
 
// conditional rendering can be done with if/else, element variables, ternary, & short circuit
class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false
    }

  }
  // cant do if else within tags
  render() {
    let Messege;

//     if(this.state.isLoggedIn){
//         return (
//             <>
//               <> Welcome josh</>      
//             </>
//           )
//     } else {
//     return (
//       <>
//         <> Welcome Guest</>
//       </>
//     )
//   }

// conditional element vairiable 
// if(this.state.isLoggedIn){
     
//     Messege = <>Welcome josh</>      
      
// } else {
//     Messege = <>Welcome Guest</>      

// }

//  return <>{Messege}</>


 // ternay can be used inside jsx
//  return this.state.isLoggedIn ? (
// <> Welcome josh</>        

//  ) : (
// <> Welcome Guest</>

//  )
  
 

// Short Circuit use when rendering something or nothing

return this.state.isLoggedIn && <>Welcome josh</> 

  }
}

export default UserGreeting