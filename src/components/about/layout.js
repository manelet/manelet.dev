import React, { useLayoutEffect, useRef } from 'react'

import SEO from '../../components/seo'
import PageWrapper from '../../components/page-wrapper'
import Pills from '../../components/about/pills'
import { useLayout } from '../../context/layout'

import './layout.css'

const Layout = ({ image, slug, children, location, title = '', description = ''}) => {
  const [{ refs }] = useLayout()
  const ref = useRef(null)
  const onScroll = () => {
    if (window.scrollY > 100 && !ref.current.classList.contains('scrolled')) {
      ref.current.classList.add('scrolled')
    } else if (window.scrollY < 100 && ref.current.classList.contains('scrolled')) {
      ref.current.classList.remove('scrolled')
    }
  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  })

  return (
    <>
      <SEO
        image={image}
        slug={slug}
        title={title}
        description={description}
      />
      <div
        ref={ref}
        className="cont flex-col sticky about-header"
        style={{
          top: refs.nav.current ? `${refs.nav.current.offsetHeight}px` : '0px'
        }}        
      >
        <div className="pills-wrapper cont-inner">
          <Pills refs={{ aboutHeader: ref, nav: refs.nav }} pathname={location.pathname} />          
        </div>
      </div>
      <PageWrapper
        transition={{ staggerChildren: .3 }}
        className='page cont page-about flex-col'      
      >
        <div className="cont-inner flex-col mx-auto">
          {children}
        </div>
      </PageWrapper>
    </>
  )
}

export default Layout