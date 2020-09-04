import React, { cloneElement, Children } from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'

import './flex-gallery.css'

const ITEMS_PER_ROW = 5

const variants = {
  initial: {
    opacity: 0,
    y: 50
  },
  exit: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0
  }
}

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
    <motion.div
      className='flex-gallery'
      variants={variants}
    >
      {rows.map((_,rowIndex) => renderRow(
        childrenAsArray.slice(rowIndex * ITEMS_PER_ROW, (rowIndex * ITEMS_PER_ROW) + ITEMS_PER_ROW),
        rowIndex,
        reverse
      ))}
    </motion.div>
  )
}

FlexGallery.displayName = 'FlexGallery'

export default FlexGallery