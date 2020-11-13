import React from 'react'

import SEO from '../../components/seo'
import PageWrapper from '../../components/page-wrapper'
import H1 from '../../components/articles/h1'
import Pills from '../../components/about/pills'

const Layout = ({ image, slug, children, location, title = '', description = ''}) => {
  return (
    <>
      <SEO
        image={image}
        slug={slug}
        title={title}
        description={description}
      />
      <PageWrapper
        transition={{ staggerChildren: .3 }}
        className='page cont page-about flex-col'      
      >
        <div className="cont-inner flex-col mx-auto">
          <H1>
            {title}
          </H1>

          <Pills pathname={location.pathname} />

          {children}
        </div>
      </PageWrapper>
    </>
  )
}

export default Layout