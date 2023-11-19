export const initialState = {
  user: null,
  todos: [],
  currentTodo: null,
  setTodoByName: null
}

export function reducer (state, action) {
  switch (action.type) {
    case 'LOGIN': return { ...state, user: action.payload }
    case 'LOGOUT' : return { ...state, user: null }
    case 'GET_TODO': return { ...state, todos: action.payload }
    case 'GET_TODO_BY_NAME' : return { ...state, setTodoById: state.todos.filter(todoName => todoName.name !== action.payload) }
    case 'CREATE_TODO': return { ...state, todos: [...state.todos, action.payload] }
    case 'UPDATE_TODO': {
      const _todoIndex = state.todos.findIndex(todo => todo._id === action.payload._id)
      state.todos[_todoIndex] = action.payload
      return { ...state, currentTodo: null }
    }
    case 'DELETE_TODO': return { ...state, todos: state.todos.filter(todo => todo._id !== action.payload) }
    case 'SET_CURRENT_TODO': return { ...state, currentTodo: action.payload }
    default: return state
  }
}
