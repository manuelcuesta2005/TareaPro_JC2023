import { createContext, useState } from 'react'

export const TodosContext = createContext()

// eslint-disable-next-line react/prop-types
export const TodosProvider = ({ children }) => {
  const initialState = {user: [], todos: [], currentTodo: null }
  const [todo, setTodo] = useState(initialState)

  return (
    <TodosContext.Provider value={{ todo, setTodo }}>
      {children}
    </TodosContext.Provider>
  )
}
