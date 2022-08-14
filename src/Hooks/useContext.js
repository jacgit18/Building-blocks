import React from "react";
import {ComponentCon } from "./context/ComponentCon";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export function ContextHooker() {

  return(
    <UserContext.Provider value="josh">
    <ChannelContext.Provider value="coder">

     <ComponentCon />

     </ChannelContext.Provider>
    </UserContext.Provider>
  )
}