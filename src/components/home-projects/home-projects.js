import React, { useCallback } from 'react'
import { Link, navigate, useStaticQuery, graphql } from "gatsby"

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
        <div className='flex flex-col w-full md:max-w-xs'>
          <p className='font-bold text-3xl'>
            Projects
          </p>
          <p>
            ♥️ bootsrapping side projects, toy with new techs and experiment
          </p>
        </div>
        <div className='projects'>
          <div className='w-full'>
            <ul className='flex flex-wrap'>
              {projects.map(({ project: { frontmatter } }) => (
                <li
                  onClick={goToProject}
                  data-path={frontmatter.path}
                  key={frontmatter.path}
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeProjects