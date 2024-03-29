export const initialState = {
  user: null,
  todos: [],
  currentTodo: null,
  todoCompleted: null,
  currentUser: null
}

export function reducer (state, action) {
  switch (action.type) {
    case 'LOGIN': return { ...state, user: action.payload }
    case 'LOGOUT' : return { ...state, user: null }
    case 'GET_TODO': return { ...state, todos: action.payload }
    case 'CREATE_TODO': return { ...state, todos: [...state.todos, action.payload] }
    case 'UPDATE_TODO': {
      const _todoIndex = state.todos.findIndex(todo => todo._id === action.payload._id)
      state.todos[_todoIndex] = action.payload
      return { ...state, currentTodo: null }
    }
    case 'UPDATE_USER' : return { ...state, currentUser: action.payload }
    case 'DELETE_TODO': return { ...state, todos: state.todos.filter(todo => todo._id !== action.payload) }
    case 'SET_TODO_COMPLETED': return { ...state, todoCompleted: action.payload }
    case 'SET_CURRENT_TODO': return { ...state, currentTodo: action.payload }
    default: return state
  }
}
