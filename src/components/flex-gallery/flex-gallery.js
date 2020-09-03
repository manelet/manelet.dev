import React, { cloneElement, Children } from 'react'
import cn from 'classnames'

import './flex-gallery.css'

const ITEMS_PER_ROW = 5

const renderRow = (images, rowIndex, reverse) => (
  <div
    className={cn('row', reverse && 'reverse', rowIndex % 2 !== 0 && 'flex-row-reverse')}
    data-gallery-row={rowIndex + 1}
    key={`flex-gallery-row-${rowIndex + 1}`}
  >  
    <div
      className='item w-full md:w-1/2'
      data-gallery-item='1'
      key={`flex-gallery-item-1`}    
    >
      {cloneElement(images[0], { ['data-gallery']: true })}
    </div>
    <div className='subrow flex flex-col md:flex-row w-full md:w-1/3'>
      <div className='item'>
        {cloneElement(images[1], { ['data-gallery']: true })}
      </div>

      <div className='item'>
        {cloneElement(images[2], { ['data-gallery']: true })}
      </div> 

      <div className='item'>
        {cloneElement(images[3], { ['data-gallery']: true })}
      </div>

      <div className='item'>
        {cloneElement(images[4], { ['data-gallery']: true })}
      </div>                 
    </div>
  </div>
)

const FlexGallery = ({ children, reverse = false }) => {
  const rows = new Array(Math.ceil(Children.count(children) / ITEMS_PER_ROW)).fill(undefined)
  const childrenAsArray = Children.toArray(children)

  return (
    <div className='flex-gallery'>
      {rows.map((_,rowIndex) => renderRow(
        childrenAsArray.slice(rowIndex * ITEMS_PER_ROW, (rowIndex * ITEMS_PER_ROW) + ITEMS_PER_ROW),
        rowIndex,
        reverse
      ))}
    </div>

    //       {
    //         .map((child, itemIndex) => {
    //           return (
    //             <div
    //               className={cn(
    //                 'item',
    //                 itemIndex === 0 && 'w-1/2',
    //                 itemIndex === 1 && 'w-1/3',
    //                 itemIndex > 1 && itemIndex < 4 && 'w-1/4'
    //               )}
    //               data-gallery-item={itemIndex + 1}
    //               key={`flex-gallery-item-${itemIndex + 1}`}
    //             >
    //               {cloneElement(child, { ['data-gallery']: true })}
    //             </div>
    //           )
    //         }
    //       )}
    //     </div>
    //   ))}
    // </div>
  )
}

FlexGallery.displayName = 'FlexGallery'

export default FlexGallery