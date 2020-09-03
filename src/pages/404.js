  import React from 'react'
  import SEO from '../components/SEO'

  const NotFound = () => {
    return (
      <>
        <SEO title='Page not found' />
        <div className='page cont'>
          <div className="cont-inner flex-col items-center">
            <h1 className="text-3xl md:text-5xl">
              Oops, this page doesn't exist 🙏
            </h1>

            <div>
              <img src="/images/travolta.gif" />
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default NotFound