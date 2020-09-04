import React, { useEffect, useState } from 'react'

const Instagram = () => {
  const [images, setImages] = useState(null)

  useEffect(() => {
    fetch('https://www.instagram.com/maneleat/?__a=1 ')
      .then(response => response.json())
      .then(data => setImages(data.graphql.user.edge_owner_to_timeline_media.edges))
  }, [])

  return (
    <div className='flex w-full bg-orange-100 p-5 rounded-lg my-6'>
      <div className="flex flex-col justify-center">
        <h3 className="text-3xl">I love to cook! and you?</h3>
        <p>Feel free to follow me @maneleat on Instagram to see my recipes!</p>
      </div>
      <div className="flex flex-wrap justify-center -mb-16 w-full max-w-xs">
        {new Array(4).fill(undefined).map((_, i) => {
          if (!images) {
            return (
              <div className='w-32 h-32 rounded bg-gray-100 mr-4 mb-4' />
            )
          }

          return (
            <img
              src={images[i].node.display_url}
              className='rounded overdlow-hidden w-32 h-32 mr-4 mb-4'
            />
          )
        })}
      </div>
    </div>
  )
}

export default Instagram