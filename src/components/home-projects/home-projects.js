import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import List from '../list/list'

import './home-projects.css'

const HomeProjects = () => {
  const { homeProjects: { projects = [] } } = useStaticQuery(graphql`
    query HomeProjects {
      homeProjects: allMdx(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        projects: edges {
          project: node {
            frontmatter {
              name
              url
              github
              stack
              description
              bg_color
              has_image
            }
            fields {
              slug
            }            
          }
        }
      }
    }
  `)

  return (
    <div className="cont pt-8 pb-20" id='home-projects'>
      <div className="cont-inner items-center flex-col lg:flex-row">
        <div className='flex flex-col w-full lg:max-w-xs mb-4 md:my-auto'>
          <p className='font-bold text-3xl'>
            Projects
          </p>
          <p>
            <span role='img' aria-label='heart'>♥️</span> bootsrapping side projects, toy with new techs and experiment
          </p>
        </div>
        <div className='projects'>
          <List items={projects} />
        </div>
      </div>
    </div>
  )
}

export default HomeProjects