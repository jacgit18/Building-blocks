import React from 'react'
import Person from './Person'

export default function NameList() {
  const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    }
  ]
//   key prop not acessible by child
// key is a special string attribute you need to include when creating lists of elements.
// Key give the elements a stable identity
// key help react identify which items have changed, are addede, or are removed
// help in effiecient update of the user interface
  const personList = persons.map(person => <Person key={person.id} person={person} />)
  
  const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  // the only time you shoud use index as key is when item in list doesnt have a unique id,
  // the list is a static list and wont change, and wont be reordered or filtered and sll three of this condition must be met
  
  // otherwise you can use a library or npm package that generates a unique id for a array and set that to key for array
  // or hash out unique value 
  return <>{personList}</>
  // return <>{nameList}</>

}

 