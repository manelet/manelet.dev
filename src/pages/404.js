  import React from 'react'
  import SEO from '../components/seo'
  import PageWrapper from '../components/page-wrapper'
  import h from '../components/articles/h'

  const NotFound = () => {
    return (
      <>
        <SEO title='Page not found' />
        <PageWrapper className='page cont'>
          <div className="cont-inner flex-col items-center">
            <h.h1>
              Oops, this page doesn't exist <span role='img' aria-label='please'>🙏</span>
            </h.h1>

            <div>
              <img title='Page not found, sorry :(' alt='travolta gif' src="/images/travolta.gif" />
            </div>
          </div>
        </PageWrapper>
      </>
    )
  }
  
  export default NotFound