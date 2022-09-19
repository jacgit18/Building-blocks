import React , {useState} from 'react'
import {ParentOne} from "./ParentOne.js"
import {ChildOne} from "./ChildOne.js"

export const GrandParent = () =>{

  const [newCount, setNewCount] = useState(0)
  console.log("GrandParent Render")
	// In react when a parent component  renders react will recursively render all of its child components this can lead to unnecessary renders where the child component goes through the render phase but not the commit phase  
	
	// But to optimize performance you can extract expensive child component and instead pass it down as props to the parent component 


  return (
    <div>
      <button onClick={() => setNewCount((nc)=> nc +1)}>
      GrandParent Count -{newCount} 
      </button>
      <ParentOne newCount={newCount}>             
              <ChildOne />
            </ParentOne>
    </div>
  )
}