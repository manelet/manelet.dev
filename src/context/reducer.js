import { TOGGLE_THEME } from './actions'

export default ctx => (state = ctx, action) => { 
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, theme: action.theme }
    default:
      return state
  }
}