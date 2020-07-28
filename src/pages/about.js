import React from 'react'

const About = () => {
  return (
    <div className='page cont'>
      <div className="cont-inner flex-col">
        <h1 className="text-5xl">
          About
        </h1>        

        <div className="flex flex-col md:flex-row">
          <div className='w-full md:w-1/2 relative' style={{ maxWidth: '500px' }}>
            <img src="/images/manel.jpg" alt="" style={{ clipPath: 'url(#clip)' }} />
            <svg
              // className='top-0 left-0'
              width='0'
              height='0'
            >
              <defs> 
                <clipPath
                  id="clip"
                  // clipPathUnits="objectBoundingBox"
                  clipPathUnits='objectBoundingBox'
                >
                <path
                  fill="#FFFFFF"
                  stroke="#000000"
                  strokeWidth="1.5794"
                  strokeMiterlimit="10"
                  // d="M 215 100.3 c 97.8 -32.6 90.5 -71.9 336 -77.6 c 92.4 -2.1 98.1 81.6 121.8 116.4 c 101.7 149.9 53.5 155.9 14.7 178 c -96.4 54.9 5.4 269 -6.5 433.9 c -23 57 -83.5 231.8 -180.5 174.8 c -33.5 -14.5 -164.5 80.2 -358.5 -23.8 C 131 888 96 877 96 787 C 64 263 98.6 139.1 215 100.3 z"
                  // d='M286,531 C206.681897,563.349344 164.527114,551.771716 111,531 C57.4728859,510.228284 48.9139997,575.586644 18,427 C-12.9139997,278.413356 5.63679161,144.785775 18,84 C30.3632084,23.2142254 14.0410373,36.9743559 102,14 C189.958963,-8.97435592 247.341698,3.21880027 286,14 C311.10026,21.0000726 326.181245,21.9799118 337,37 C342.843809,45.1131819 342.640762,30.5204322 353,84 C382.537493,236.48731 376.550161,356.613105 366,427 C354.376043,504.55088 358.610499,501.386306 286,531 Z'
                  d='M0.766,0.965 C0.553,1,0.44,1,0.297,0.965 C0.154,0.927,0.131,1,0.048,0.776 C-0.035,0.506,0.015,0.263,0.048,0.153 C0.081,0.042,0.038,0.067,0.273,0.025 C0.508,-0.016,0.662,0.006,0.766,0.025 C0.833,0.038,0.873,0.04,0.902,0.067 C0.918,0.082,0.917,0.055,0.945,0.153 C1,0.43,1,0.648,0.98,0.776 C0.949,0.917,0.96,0.911,0.766,0.965'
                />
                </clipPath>
              </defs>
              {/* <image id='img' href='/images/manel.jpg' />
              <use clipPath="url(#clip)" href="#img" /> */}
            </svg>          
          </div>
          <div className='flex w-full md:w-1/2'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About