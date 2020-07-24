import { TOGGLE_THEME, TOGGLE_MOBILE_MENU } from './actions'

export default ctx => (state = ctx, action) => { 
  switch (action.type) {
    case TOGGLE_MOBILE_MENU:
      return { ...state, mobileMenuOpened: !state.mobileMenuOpened}
    case TOGGLE_THEME:
      return { ...state, theme: action.theme }
    default:
      return state
  }
}