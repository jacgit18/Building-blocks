import React from 'react'

export const ChildTwo = ({ name }) => {
  console.log('ChildTwo Render')
  return <div>ChildTwo component - {name}</div>
}
// makes so child doesnt re render each time 
export const MemoizedChildTwo = React.memo(ChildTwo)