export const initialState = {
  user: null,
  todos: [],
  currentTodo: null
}

export function reducer (state, action) {
  switch (action.type) {
    case 'LOGIN': return { ...state, user: action.payload }
    case 'LOGOUT' : return { ...state, user: null }
    case 'GET_TODO': return { ...state, todos: action.payload }
    case 'CREATE_TODO': return { ...state, todos: [...state.todo, action.payload] }
    case 'UPDATE_TODO': {
      const todoIndex = state.todos.findIndex(todo => todo._id === action.payload._id)
      state.todos[todoIndex] = action.payload
      return { ...state, currentTodo: null }
    }
    case 'DELETE_TODO': return { ...state, todos: state.todo.filter(todo => todo._id !== action.payload) }
    default: return state
  }
}
