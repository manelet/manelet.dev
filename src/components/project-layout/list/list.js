import React, { useRef, useCallback, useLayoutEffect, useEffect } from 'react'
import { useStaticQuery, graphql, Link, navigate } from 'gatsby'
import cn from 'classnames'
import { motion } from 'framer-motion'

import useWindow from '../../../hooks/useWindow'

const variants = {
  highlighted: {
    scale: 1.1
  },
  idle: {
    scale: 1
  }
}

const ProjectsList = props => {
  const { isTablet } = useWindow()
  const { allProjects: { projects } } = useStaticQuery(graphql`
    query {
      allProjects: allMdx(
        filter: { fileAbsolutePath: { regex : "\/projects/" } }
      ) {
        projects: edges {
          project: node {
            id
            excerpt
            fields {
              slug
            }
            frontmatter {
              name
              url
              github
              stack
              description
              bg_color
              has_image
            }
          }
        }
      }
    }
  `)

  const refs = {
    projects: new Array(projects.length).fill(useRef(null)),
    wrapper: useRef(null),
    wrapperScroll: useRef(null)
  }

  const handleNavigate = useCallback(
    e => navigate(
      e.currentTarget.dataset.projectSlug,
      { state: { projectListScroll: refs.wrapperScroll.current }}
    ),
    []
  )

  const onScroll = useCallback(e => refs.wrapperScroll.current = e.target.scrollLeft, [])

  useEffect(() => {
    const index = projects.findIndex(({ project }) => project.frontmatter.name === props.pageContext.name)

    if (index >= 0) {
      const currentProject = refs.projects[index].current
      const currentProjectWidth = currentProject.clientWidth
      refs.wrapperScroll.current = index * currentProjectWidth
      refs.wrapper.current.addEventListener('scroll', onScroll)
      refs.wrapper.current.scrollTo({ left: refs.wrapperScroll.current })
      return () => refs.wrapper.current.removeEventListener('scroll', onScroll)
    }
  }, [props.pageContext.name])


  return (
    <div ref={refs.wrapper} className="project-list">
      <ul className='project-list-inner'>
        {projects.map(({ project }, i) => {
          const isActive = project.frontmatter.name === props.pageContext.name
          let style = { backgroundColor: project.frontmatter.bg_color }

          if (project.frontmatter.has_image) {
            style = {
              ...style,
              backgroundImage: `url('/images${project.fields.slug.slice(0, -1)}.png')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }
          }

          return (
            <motion.li
              whileHover='highlighted'
              initial='idle'
              animate={isTablet ? 'idle' : isActive ? 'highlighted' : 'idle'}
              key={`proj-${project.fields.slug}`}
              className={cn('project-list-item', isActive && 'active')}
              onClick={handleNavigate}
              data-project-slug={project.fields.slug}
              data-active={isActive}
              ref={refs.projects[i]}
              variants={variants}
              style={style}
            >
              <Link to={project.fields.slug} className='text-xl'>
                {project.frontmatter.name}
              </Link>
              <p className="text-sm">
                {project.frontmatter.description}
              </p>
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProjectsList