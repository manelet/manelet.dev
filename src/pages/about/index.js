import React from 'react'
import { motion } from 'framer-motion'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import { defaultVariants } from '../../components/page-wrapper'
import Layout from '../../components/about/layout'
import h from '../../components/articles/h'
// import Skills from '../../components/about/skills'
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
        <motion.div
          id='about-beginnings'
          className="flex flex-col-reverse md:flex-row my-5 md:my-20"
          variants={defaultVariants}
        >
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
              The two things that I liked to do the most as a child were playing football, I played for several teams until 16yo because of an injury but I still love playing from time to time.
            </p>
            <p>
              The other one are computers, since a very child I've been passionate about computers, software and technology in general. Ah, I also played a lot of video games <span role='img' aria-label='smile'>😅</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row my-5 md:my-20"
          variants={defaultVariants}
        >
          <div className='flex w-full flex-col'>
            <h.h3>First steps towards web</h.h3>
            <p>
              I still do remember myself toying with Frontpage 98 with 10yo playing with tables to create layouts and going crazy trying to align images. At that time it was more like a kind of "painting" and having fun rather than developing, but it created the needed curiosity to keep digging.
            </p>
            
            <p>
              Some years after I started playing Counter-Strike (a lot) and it was then when I really started to learn programming, some design ideas and how a website was made from the inside, whithout a proper website, your clan wasn't going to be popular <span role='img' aria-label='hahaha'>🤪</span>.
            </p>

            <p>
              Without even knowing it, those years gave me a direction for my career.
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

        <motion.div
          id='about-career'
          className="flex flex-col my-5 md:my-20 w-full items-center"
          variants={defaultVariants}
        >
          <h.h2>Career</h.h2>
          <Career />
        </motion.div>

        <motion.div
          id='about-entrepreneurship'
          className="flex flex-col-reverse md:flex-row my-10 md:my-20"
          variants={defaultVariants}
        >
          <div className='flex w-full flex-col'>
            <h.h3>Entrepreneurship</h.h3>
            <p>
              Co-founded an ecommerce with my good friend <a href='https://instagram.com/xavill' target='_blank' rel='noreferrer noopener'>Xavi</a> on 2011, we ourselves manufactured the buttons with a couple of machines we bought.
            </p>
            <p>
              We created a custom ecommerce site from scratch with PHP/MySQL that allowed us to customize price on our own, I even created an online custom designer with jQuery <span role='img' aria-label='angel'>😇</span>.
            </p>
            <p>
              Learned a toon of SEO and we managed to create a 10k monthly turnover within six months and 0 spent on marketing.              
            </p>
            <p>
              I still dream on creating a company from scratch.
            </p>
          </div>          
          <div className="showcase w-full relative flex justify-center flex-wrap items-center">
            <div
              className='w-full rounded-lg overflow-hidden my-0 shadow-2xl z-10'
              style={{ maxWidth: '300px', transform: 'rotateY(-30deg)' }}
            >
              <Img fluid={data.butonet1.image.fluid} />
            </div>
            <div
              className='relative md:absolute bottom-0 right-0 w-full rounded-lg overflow-hidden my-0 shadow-2xl'
              style={{
                maxWidth: '250px',
                transform: 'rotateY(-30deg)',
                zIndex: 10
              }}
            >
              <Img fluid={data.butonet2.image.fluid} />
            </div>            
          </div>
        </motion.div>

        {/* <motion.div id='about-skills' className="flex flex-col py-20 w-full max-w-3xl items-center mx-auto my-5 md:my-20" variants={defaultVariants}>
          <h.h2 className='mb-16 md:mb-10'>Skills</h.h2>
          <Skills />
        </motion.div> */}
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

    butonet1: file (relativePath: { eq: "about/butonet1.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }   

    butonet2: file (relativePath: { eq: "about/butonet2.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }              
  }
`