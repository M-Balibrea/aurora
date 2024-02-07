/** @format */

import React, { createContext, useContext, useState, useEffect } from 'react'
import { SECTIONS } from '../content/Sections'

const NavbarContext = createContext()

const NavbarProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    setActiveSection(SECTIONS.aurora)
  }, [])

  return (
    <NavbarContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavbarContext.Provider>
  )
}

const useNavbar = () => {
  const context = useContext(NavbarContext)
  if (!context) {
    throw new Error('useNavbar debe ser utilizado dentro de un NavbarProvider')
  }
  return context
}

export { NavbarProvider, useNavbar }
