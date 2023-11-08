import { createContext, useReducer } from 'react'
import { reducer } from '../reducer/todo'

export const TodosContext = createContext()

// eslint-disable-next-line react/prop-types
export const TodosProvider = ({ children }) => {
  const initialState = { user: [], todos: [], currentTodo: null }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  )
}
