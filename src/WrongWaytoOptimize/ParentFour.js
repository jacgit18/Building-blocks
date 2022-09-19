import React, { useState, useMemo, useCallback } from 'react'
import { MemoizedChildFive } from './ChildFive'

export const ParentFour = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Vishwas')

  const person = {
    fname: 'Bruce',
    lname: 'Wayne',
  }

  const memoizedPerson = useMemo(() => person, []) // added as fix
// If a component has object or functions and your wrapping one of the its child components with react memo not good todo 
 // useCallback can fix this issue 
const handleClick = () => {}

  const memoizedHandleClick = useCallback(handleClick, [])

  console.log('ParentFour Render')
  return (
    <div>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      {/* <MemoizedChildFive name={name} person={person} /> */}
       {/* <MemoizedChildFive name={name} person={memoizedPerson} />  fix*/}

      {/* <MemoizedChildFive name={name} handleClick={handleClick} /> */}
      <MemoizedChildFive name={name} handleClick={memoizedHandleClick} />

    </div>
  )
}
