import { atom, selector } from 'recoil'

const key = 'manelet-theme'
const lsTheme = window.localStorage.getItem(key)
const theme = lsTheme ? lsTheme : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

if (!lsTheme) {
  window.localStorage.setItem(key, theme)
}

if (theme === 'dark') {
  document.getElementsByTagName('html')[0].classList.add('dark')
}

const themeState = atom({ key, default: theme })

export const themeSelector = selector({
  key: key + '-selector',
  get: ({ get }) => get(themeState),
  set: ({ set }, value) => {
    console.log('SET', value);
    window.localStorage.setItem(key, value)
    document.getElementsByTagName('html')[0].classList.toggle('dark')
    set(themeState, value)
  }
})
