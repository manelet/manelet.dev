import { atom, selector } from 'recoil'

const key = 'manelet-theme'
const lsTheme = window.localStorage.getItem(key)
const theme = lsTheme || window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

if (!lsTheme) {
  window.localStorage.setItem(key, theme)
}

const themeState = atom({ key, default: theme })

export const themeSelector = selector({
  key: key + '-selector',
  get: ({ get }) => get(themeState),
  set: ({ set }, value) => {
    window.localStorage.setItem(key, value)
    set(themeState, value)
  }
})
