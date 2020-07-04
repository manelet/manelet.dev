import { createRef } from 'react'

export default () => ({
  refs: {
    nav: createRef(null),
    splash: createRef(null),
    navMenu: createRef(null)
  },
  theme: undefined
})
