  import React from 'react'
  import SEO from '../components/SEO'
  import PageWrapper from '../components/page-wrapper'
  import H1 from '../components/articles/h1'

  const NotFound = () => {
    return (
      <>
        <SEO title='Page not found' />
        <PageWrapper className='page cont'>
          <div className="cont-inner flex-col items-center">
            <H1>
              Oops, this page doesn't exist <span role='img' aria-label='please'>🙏</span>
            </H1>

            <div>
              <img title='Page not found, sorry :(' alt='travolta gif' src="/images/travolta.gif" />
            </div>
          </div>
        </PageWrapper>
      </>
    )
  }
  
  export default NotFound