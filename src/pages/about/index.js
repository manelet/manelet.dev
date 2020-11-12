import React from 'react'
import { motion } from 'framer-motion'

import { defaultVariants } from '../../components/page-wrapper'
import Layout from '../../components/about/layout'
import ImgSvg from '../../components/svg-image'
import H2 from '../../components/articles/h2'

import './about.css'

const About = ({ location }) => {
  return (
    <Layout
      location={location}
      title='About'
      description='Manel has been developing websites since his childhood. Discover his road to senior frontend development from the beginnings'
    >
      <motion.div className="flex flex-col md:flex-row" variants={defaultVariants}>
        <div className="w-full relative flex justify-center">
          <div 
            className='w-full relative md:absolute'
            style={{ maxWidth: '300px' }}
          >
            <ImgSvg src='/images/manel.jpg' id='manelet-young' />
          </div>
          <div 
            className='w-full hidden md:block absolute mx-auto left-0'
            style={{ maxWidth: '200px', bottom: '-3rem', transform: 'rotate(5deg)' }}
          >
            <ImgSvg src='/images/frontpage.jpg' id='frontpage' />
          </div>
          <div 
            className='w-full hidden md:block absolute right-0 mx-auto'
            style={{ maxWidth: '300px', bottom: '-6rem', transform: 'rotate(-5deg)' }}
          >
            <ImgSvg src='/images/counter-strike.jpg' id='counter-strike' />
          </div>           
        </div>
        <div className='flex w-full md:ml-20 flex-col'>
          <H2>Beginnings</H2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </motion.div>
    </Layout>
  )
}

export default About