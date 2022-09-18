import React , {useState} from 'react'

const initialState = ['Bruce', 'Wayne']

export const ArrayUseState = () => {
  const [person, setPerson] = useState(initialState)

  const handleClick = () =>{

    // person.push('clark')
    // person.push('kent')
    // setPerson(person)


    const newPerson = [...person]
    newPerson.push('clark')
    newPerson.push('kent')
    setPerson(newPerson)
  }
  console.log("ArrayState Render")

  return (
    <div>
         <button onClick={handleClick}>Click</button>
         {person.map(person =>(
          <div key={person}>
            {person}
          </div>
         ))}

    </div>
  )
}

