import React, { useEffect, useState } from 'react'

import './instagram.css'

const Instagram = () => {
  const [images, setImages] = useState(null)

  useEffect(() => {
    fetch('https://www.instagram.com/maneleat/?__a=1 ')
      .then(response => response.json())
      .then(data => setImages(data.graphql.user.edge_owner_to_timeline_media.edges))
  }, [])

  return (
    <div className='instagram-widget'>
      <div className="text">
        <h3 className="text-3xl">I love to cook! and you?</h3>
        <p>Feel free to follow me on Instagram to see my recipes and exchange dishes ideas!</p>
        <div className='svg'>
          <svg viewBox="0 0 512 512">
            <g>
              <path d="M378.7,247.7c-3.3-8.5-7.7-15.7-14.9-22.9c-7.2-7.2-14.4-11.6-22.9-14.9c-8.2-3.2-17.7-5.4-31.4-6   c-13.8-0.6-18.2-0.8-53.4-0.8s-39.6,0.1-53.4,0.8c-13.8,0.6-23.2,2.8-31.4,6c-8.5,3.3-15.7,7.7-22.9,14.9s-11.6,14.4-14.9,22.9   c-3.2,8.2-5.4,17.7-6,31.4c-0.6,13.8-0.8,18.2-0.8,53.4s0.1,39.6,0.8,53.4c0.6,13.8,2.8,23.2,6,31.4c3.3,8.5,7.7,15.7,14.9,22.9   c7.2,7.2,14.4,11.6,22.9,14.9c8.2,3.2,17.7,5.4,31.4,6c13.8,0.6,18.2,0.8,53.4,0.8s39.6-0.1,53.4-0.8c13.8-0.6,23.2-2.8,31.4-6   c8.5-3.3,15.7-7.7,22.9-14.9c7.2-7.2,11.6-14.4,14.9-22.9c3.2-8.2,5.4-17.7,6-31.4c0.6-13.8,0.8-18.2,0.8-53.4s-0.1-39.6-0.8-53.4   C384.1,265.3,381.9,255.9,378.7,247.7z M361.4,384.8c-0.6,12.6-2.7,19.5-4.5,24c-2.3,6-5.2,10.4-9.7,14.9s-8.8,7.3-14.9,9.7   c-4.6,1.8-11.4,3.9-24,4.5c-13.7,0.6-17.7,0.8-52.3,0.8s-38.7-0.1-52.3-0.8c-12.6-0.6-19.5-2.7-24-4.5c-6-2.3-10.4-5.2-14.9-9.7   s-7.3-8.8-9.7-14.9c-1.8-4.6-3.9-11.4-4.5-24c-0.6-13.7-0.8-17.8-0.8-52.3s0.1-38.7,0.8-52.3c0.6-12.6,2.7-19.5,4.5-24   c2.3-6,5.2-10.4,9.7-14.9s8.8-7.3,14.9-9.7c4.6-1.8,11.4-3.9,24-4.5c13.7-0.6,17.8-0.8,52.3-0.8s38.7,0.1,52.3,0.8   c12.6,0.6,19.5,2.7,24,4.5c6,2.3,10.4,5.2,14.9,9.7s7.3,8.8,9.7,14.9c1.8,4.6,3.9,11.4,4.5,24c0.6,13.7,0.8,17.8,0.8,52.3   S362,371.2,361.4,384.8z" />
              <path d="M256,266c-36.7,0-66.5,29.8-66.5,66.5S219.3,399,256,399s66.5-29.8,66.5-66.5S292.7,266,256,266z    M256,375.7c-23.8,0-43.2-19.3-43.2-43.2c0-23.8,19.3-43.2,43.2-43.2s43.2,19.3,43.2,43.2C299.2,356.3,279.8,375.7,256,375.7z" id="XMLID_145_" />
              <circle cx="325.1" cy="263.4" r="15.5" />
            </g>
          </svg>
          <button className='p-2 py-4 pl-0'>
            @maneleat
          </button>            
        </div>
      </div>
      <div className="images">
        {new Array(4).fill(undefined).map((_, i) => {
          if (!images) {
            return (
              <div
                key={`ig-loading-${i}`}
                className='w-32 h-32 rounded bg-gray-100 mr-4 mb-4'
              />
            )
          }

          return (
            <a
              href={`https://www.instagram.com/p/${images[i].node.shortcode}/`}
              target='_blank'
              key={`ig-thumb-${images[i].node.shortcode}`}
            >
              <img
                src={images[i].node.thumbnail_resources[0].src}
                className='rounded overdlow-hidden w-32 h-32 mr-4 mb-4'
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Instagram