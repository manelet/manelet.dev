import React from 'react'
import { motion } from 'framer-motion'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import { defaultVariants } from '../../components/page-wrapper'
import Layout from '../../components/about/layout'
import h from '../../components/articles/h'
import Skills from '../../components/about/skills'
import Career from '../../components/about/career'

import './about.css'

const About = ({ location, data }) => {
  return (
    <>
      <Layout
        image={data.manelImage1.image.fluid.src}
        slug='/about'
        location={location}
        title='About'
        description='Manel has been developing websites since his childhood. Discover his road to senior frontend development from the beginnings'
      >
        <motion.div id='about-beginnings' className="flex flex-col md:flex-row my-5 md:my-20" variants={defaultVariants}>
          <div className="showcase w-full relative flex justify-center items-center flex-wrap mb-10 md:mb-0">
            <div
              className='shadow-2xl relative md:absolute w-full rounded-full overflow-hidden mb-auto'
              style={{
                maxWidth: '300px',
                transform: 'rotateY(15deg)'
              }}
            >
              <Img fluid={data.manelImage1.image.fluid} />
            </div>
            <div
              className='shadow-2xl absolute right-0 md:right-auto md:left-0 w-full rounded-full overflow-hidden mb-auto'
              style={{
                maxWidth: '150px',
                bottom: '-3em',
                transform: 'rotateY(15deg)'
              }}
            >
              <Img fluid={data.manelImage2.image.fluid} />
            </div>
          </div>
          <div className='flex w-full flex-col'>
            <h.h2>Beginnings</h.h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col-reverse md:flex-row my-5 md:my-20" variants={defaultVariants}>
          <div className='flex w-full flex-col'>
            <h.h3>My first steps towards web design early in the late 90's</h.h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>          
          <div className="showcase w-full relative flex justify-between md:justify-center flex-wrap items-center mb-10 md:mb-0">
            <div
              className='relative left-0 md:absolute w-full rounded-lg overflow-hidden my-0 shadow-2xl z-10'
              style={{ maxWidth: '300px', transform: 'rotateY(-30deg)' }}
            >
              <Img fluid={data.csImage.image.fluid} />
            </div>
            <div
              className='absolute right-0 w-full rounded-lg overflow-hidden my-0 shadow-2xl bottom-0 md:bottom-auto z-10 -mb-10 md:-mb-auto'
              style={{
                maxWidth: '250px',
                transform: 'rotateY(-30deg)'
              }}
            >
              <Img fluid={data.frontPageImage.image.fluid} />
            </div>            
          </div>
        </motion.div>

        <motion.div id='about-career' className="flex flex-col my-5 md:my-20 w-full items-center" variants={defaultVariants}>
          <h.h2>Career</h.h2>
          <Career />
        </motion.div>

        <motion.div id='about-entrepreneurship' className="flex flex-col-reverse md:flex-row my-10 md:my-20" variants={defaultVariants}>
          <div className='flex w-full flex-col'>
            <h.h3>Entrepreneurship</h.h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>          
          <div className="showcase w-full relative flex justify-center flex-wrap items-center">
            <div
              className='w-full rounded-lg overflow-hidden my-0 shadow-2xl z-10'
              style={{ maxWidth: '300px', transform: 'rotateY(-30deg)' }}
            >
              <Img fluid={data.csImage.image.fluid} />
            </div>
            <div
              className='relative md:absolute bottom-0 right-0 w-full rounded-lg overflow-hidden my-0 shadow-2xl'
              style={{
                maxWidth: '250px',
                transform: 'rotateY(-30deg)'
              }}
            >
              <Img fluid={data.frontPageImage.image.fluid} />
            </div>            
          </div>
        </motion.div>

        <motion.div id='about-skills' className="flex flex-col py-20 w-full max-w-3xl items-center mx-auto my-5 md:my-20" variants={defaultVariants}>
          <h.h2 className='mb-16 md:mb-10'>Skills</h.h2>
          <Skills />
        </motion.div>
        
      </Layout>
    </>
  )
}

export default About

export const query = graphql`
  query {
    manelImage1: file (relativePath: { eq: "about/manel-computer.jpg" }) {
      image: childImageSharp {
        fluid (maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    manelImage2: file (relativePath: { eq: "about/manel-football.jpg" }) {
      image: childImageSharp {
        fluid (maxWidth: 300) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    csImage: file (relativePath: { eq: "about/counter-strike.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }

    frontPageImage: file (relativePath: { eq: "about/frontpage.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }    
  }
`