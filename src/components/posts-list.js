import React from 'react'

const PostsList = () => {
  return (
    <div className="cont">
      <div className="cont-inner flex-col">
        <h2>posts</h2>

        <div className='flex flex-wrap'>
          <div className="w-full lg:w-1/2 p-5 px-0 lg:pr-5">
            <div className='home-posts'>
              <h3 className='text-2xl'>title post</h3>
              <p>desc</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-5 px-0 lg:pr-5">
            <div className='home-posts'>
              <h3 className='text-2xl'>title post</h3>
              <p>desc</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-5 px-0 lg:pr-5">
            <div className='home-posts'>
              <h3 className='text-2xl'>title post</h3>
              <p>desc</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-5 px-0 lg:pr-5">
            <div className='home-posts'>
              <h3 className='text-2xl'>title post</h3>
              <p>desc</p>
            </div>
          </div>            
        </div>
      </div>
    </div>
  )
}

export default PostsList