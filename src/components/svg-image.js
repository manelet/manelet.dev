import React from 'react'

const ImgSvg = ({ id = 'clip', title, src }) => {
  return (
    <>
      <img
        src={src}
        alt={title}
        style={{ clipPath: `url(#${id})` }}
      />
      <svg
        width='0'
        height='0'
      >
        <defs> 
          <clipPath
            id={id}
            clipPathUnits='objectBoundingBox'
          >
          <path
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="1.5794"
            strokeMiterlimit="10"
            d='M0.766,0.965 C0.553,1,0.44,1,0.297,0.965 C0.154,0.927,0.131,1,0.048,0.776 C-0.035,0.506,0.015,0.263,0.048,0.153 C0.081,0.042,0.038,0.067,0.273,0.025 C0.508,-0.016,0.662,0.006,0.766,0.025 C0.833,0.038,0.873,0.04,0.902,0.067 C0.918,0.082,0.917,0.055,0.945,0.153 C1,0.43,1,0.648,0.98,0.776 C0.949,0.917,0.96,0.911,0.766,0.965'
          />
          </clipPath>
        </defs>
      </svg>         
    </>
  )
}

export default ImgSvg