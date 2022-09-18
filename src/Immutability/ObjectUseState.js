import React , {useState} from 'react'

const initialState = {
  fname: 'Bruce',
  lname: 'Wayne'
}

export const ObjectUseState = () => {
  const [person, setPerson] = useState(initialState)

  const changeName = () =>{
    // dont directly mutate object wont update properly make a copy
    // person.fname = 'Clark'
    // person.lname = 'Kent'
    // setPerson(person)

    const newPerson = {...person}
    newPerson.fname = 'Clark'
    newPerson.lname = 'Kent'
    setPerson(newPerson)
  }
  console.log("ObjectState Render")

  return (
    <div>
         <button onClick={changeName}>{person.fname} {person.lname}</button>

    </div>
  )
}

