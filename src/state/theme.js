import { createRef } from 'react'
import { atom, selector } from 'recoil'

const key = 'manelet-theme'
const isSsr = typeof window === 'undefined'
let theme = 'light'

if (!isSsr) {
  const lsTheme = window.localStorage.getItem(key)
  theme = lsTheme ? lsTheme : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  
  if (!lsTheme) {
    window.localStorage.setItem(key, theme)
  }
  
  if (theme === 'dark') {
    document.getElementsByTagName('html')[0].classList.add('dark')
  }
}

const themeState = atom({ key, default: theme })

export const themeSelector = selector({
  key: key + '-selector',
  get: ({ get }) => get(themeState),
  set: ({ set }, value) => {
    if (!isSsr) {
      window.localStorage.setItem(key, value)
      document.getElementsByTagName('html')[0].classList.toggle('dark')
    }

    set(themeState, value)
  }
})