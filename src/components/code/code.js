/* eslint react/jsx-key: 0 */

import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import {LiveProvider, LiveEditor, LiveError, LivePreview} from 'react-live'
import {mdx} from '@mdx-js/react'
import { motion } from 'framer-motion'
import dracula from 'prism-react-renderer/themes/dracula'
import github from 'prism-react-renderer/themes/github'
import cn from 'classnames'

import './code.css'

const variants = {
  initial: {
    opacity: 0,
    y: 50
  },
  exit: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0
  }
}

const themes = {
  dracula,
  github
}

export default ({children, className, live, render, theme = 'dracula' }) => {
  let language

  if (typeof className === 'undefined') {
    [language] = children.replace(/`/gi, '').split(/\n/)
    children = children.replace(/`/gi, '').replace(language, '')
  } else {
    language = className.replace(/language-/, '')
  }
  
  if (live) {
    return (
      <div style={{marginTop: '40px', backgroundColor: 'black'}}>
        <LiveProvider
          code={children.trim()}
          transformCode={code => '/** @jsx mdx */' + code}
          scope={{mdx}}
        >
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    )
  }

  if (render) {
    return (
      <div style={{marginTop: '40px'}}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    )
  }

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={themes[theme]}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <motion.div
          variants={variants}
          className={cn('code-inner', language, theme)}
          style={{...style, padding: '20px', overflow: 'auto' }}
        >
          <pre className={className}>
            {tokens.map((line, i) => (
              <div key={`line-${i}`} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span key={`line--${key}`} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </pre>
        </motion.div>
      )}
    </Highlight>
  )
}