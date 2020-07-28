import React, { useRef, cloneElement } from 'react'

import Nav from './nav/nav'
import Footer from './footer/footer'
import Transition from '../page-transition'

const Layout = ({ children, path }) => {
  return (
    <div>
      <Nav path={path} />
      <Transition>
        {children}
      </Transition>      
      <Footer />
    </div>
  )
}

export default Layout