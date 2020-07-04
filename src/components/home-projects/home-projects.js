import React, { useCallback } from 'react'
import { Link, navigate, useStaticQuery, graphql } from "gatsby"
import cn from 'classnames'

const HomeProjects = () => {
  const { homeProjects: { projects = [] } } = useStaticQuery(graphql`
    query HomeProjects {
      homeProjects: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        projects: edges {
          project: node {
            frontmatter {
              name
              path
              url
              github
              stack
              description
              bg_color
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
              {projects.map(({ project: { frontmatter } }) => (
                <li
                  onClick={goToProject}
                  data-path={frontmatter.path}
                  key={frontmatter.path}
                  className={cn(`${frontmatter.bg_color}-600`)}
                >
                  <div>
                    <h2>
                      <Link to={frontmatter.path}>
                        {frontmatter.name}
                      </Link>
                    </h2>
                    {frontmatter.description}
                  </div>
                </li>
              ))}
            </ul>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default HomeProjects