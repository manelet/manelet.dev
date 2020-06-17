import React from 'react'

import Nav from './nav/nav'
import Footer from './footer'

const Layout = ({ children, ...props }) => {  
  return (
    <div>
      <Nav path={props.path} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout