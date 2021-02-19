import React, { createContext, FC } from 'react'

export const Context = createContext({})

export const Provider: FC = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>
}
