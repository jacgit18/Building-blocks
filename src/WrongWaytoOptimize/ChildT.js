import React from 'react'


export const ChildT = ({children, name}) =>{
// child is always a new reference causing it to re-render 
// so there is no reason to wrap your child component with react memo if the child component itself has children elements 
  console.log("ChildT Render")

  return (
    <div>
      {children} {name}
    </div>
  )
}

export const MemoizedChildT = React.memo(ChildT)