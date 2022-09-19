import React , {useState} from 'react'
import { MemoizedChildT } from './ChildT'
import { MemoizedChildTh } from './ChildTh'


export const ParentT = () =>{

  const [count, setCount] = useState(0)  
  const [name, setName] = useState("joe")

  console.log("Parent T Render")
      // when count is updated time isnt update because of memo rare use case

  return (
    <div>
      <button onClick={() => setCount((c)=> c +1)}>Count -{count} </button>
      <button onClick={() => setName('codervolution')}>Change name </button>
      {/* < MemoizedChildT name={name}>
      <strong>Hello</strong>
        
      </MemoizedChildT> */}

      <MemoizedChildTh name={name}/> 


    </div>
  )
}