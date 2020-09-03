import { createRef } from 'react'

export default () => ({
  refs: {
    nav: createRef(null),
    splash: createRef(null),
    burger: createRef(null),
    navInner: createRef(null),
    navMenu: createRef(null),
    logoWrapper: createRef(null),
    logoLetters: [createRef(null), createRef(null), createRef(null), createRef(null), createRef(null)]
  },
  theme: typeof window !== 'undefined'
    ? window.localStorage.getItem('color-mode')
      ? window.localStorage.getItem('color-mode')
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    : undefined,
  mobileMenuOpened: false
})
