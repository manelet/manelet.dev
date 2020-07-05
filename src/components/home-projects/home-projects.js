import React, { useCallback } from 'react'
import { Link, navigate, useStaticQuery, graphql } from "gatsby"
import cn from 'classnames'

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
            }
            fields {
              slug
            }            
          }
        }
      }
    }
  `)
  
  const goToProject = useCallback(e => {
    e.preventDefault()
    e.stopPropagation()
    const url = e.currentTarget.getAttribute('data-path')
    navigate(url)
  }, [])

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
          {/* <div className='w-full'> */}
            <ul>
              {projects.map(({ project: { fields: { slug }, frontmatter } }) => {                
                return (
                  <li
                    onClick={goToProject}
                    data-path={slug}
                    key={slug}
                    className={cn(`${frontmatter.bg_color}-600`)}
                  >
                    <div>
                      <h2>
                        <Link to={slug}>
                          {frontmatter.name}
                        </Link>
                      </h2>
                      {frontmatter.description}
                    </div>
                  </li>
                )
              })}
            </ul>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default HomeProjects