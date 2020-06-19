import React, { createRef, createContext, useContext } from 'react'

const LayoutContext = createContext()

const refs = {
  nav: createRef(null),
  splash: createRef(null)
}

export const LayoutProvider = ({ children }) => {
  return (
    <LayoutContext.Provider value={refs}>
      {children}
    </LayoutContext.Provider>
  )
}

export const useLayout = () => {
  return useContext(LayoutContext)
}