import React , {useState} from 'react'
import {Child} from './Child'

export const Parent = () =>{

  const [count, setCount] = useState(0)
  console.log("Parent Render")
  // button 2 which set value to 0 has same new and old state so wont  re-render after intial render
  // and thus the child wont rerender

  // Third button has similar behavior but with value of 5 and renders parent & child then on next render 
  // just parent since react stops the re-render after it see no diff in state value 

  return (
    <div>
      <button onClick={() => setCount((c)=> c +1)}>Count -{count} </button>
      <button onClick={() => setCount(0)}>Count to 0</button> 
      <button onClick={() => setCount(5)}>Count to 5</button>
      <Child />
    </div>
  )
}