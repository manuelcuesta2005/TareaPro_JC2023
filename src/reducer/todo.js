export const initialState = {
  user: null,
  todo: [],
  currentTodo: null
}

export function reducer (state, action) {
  switch (action.type) {
    case 'LOGIN': return { ...state, user: action.payload }
    case 'LOGOUT' : return { ...state, user: null }
    default: return state
  }
}
