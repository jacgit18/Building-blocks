import React from 'react'

const UserContext = React.createContext('default value codevolution')
// default shows when no provider
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }


// context type property first export
export default UserContext;
