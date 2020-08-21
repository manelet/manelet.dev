import React from 'react'

import Nav from './nav/nav'
import Footer from './footer/footer'
import Transition from '../page-transition'

const Layout = ({ children, path, location }) => {
  return (
    <>
      <Nav path={path} />
      <Transition location={location}>
        {children}
      </Transition>      
      <Footer />
    </>
  )
}

export default Layout