import React from 'react'


export const ChildTh = ({name}) =>{
  const date = new Date()
  console.log("ChildTh Render")

  return (
    <div>
    Hello {name}. it is {date.getHours()}:{date.getMinutes()}:{' '} {date.getSeconds()}
    </div>
  )
}

export const MemoizedChildTh = React.memo(ChildTh)