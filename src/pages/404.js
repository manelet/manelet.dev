  import React from 'react'
  import SEO from '../components/SEO'
  import PageWrapper from '../components/page-wrapper'

  const NotFound = () => {
    return (
      <>
        <SEO title='Page not found' />
        <PageWrapper className='page cont'>
          <div className="cont-inner flex-col items-center">
            <h1 className="text-3xl md:text-5xl">
              Oops, this page doesn't exist <span role='img' aria-label='please'>🙏</span>
            </h1>

            <div>
              <img title='Page not found, sorry :(' alt='travolta gif' src="/images/travolta.gif" />
            </div>
          </div>
        </PageWrapper>
      </>
    )
  }
  
  export default NotFound