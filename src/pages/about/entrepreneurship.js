import React from 'react'

import Layout from '../../components/about/layout'
import Wip from '../../components/wip'

const Entrepreneurship = ({ location }) => {
  return (
    <Layout
      slug='/about/entrepreneurship'
      title='Entrepreneurship'
      description=''
      location={location}
    >
      <Wip description='' />
    </Layout>
  )
}

export default Entrepreneurship