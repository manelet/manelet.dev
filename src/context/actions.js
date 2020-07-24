export const TOGGLE_THEME = 'TOGGLE_THEME'
export const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU'

export const ACTIONS = {
  toggleTheme: theme => ({ type: TOGGLE_THEME, theme }),
  toggleMobileMenu: () => ({ type: TOGGLE_MOBILE_MENU })
}
