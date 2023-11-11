import { useContext, useEffect } from 'react'
import { TodosContext } from '../context/todos'
import { getTodo } from '../services/todos'

export const useTodo = () => {
  const { dispatch } = useContext(TodosContext)

  useEffect(() => {
    getTodo().then(todos => dispatch({ type: 'GET_TODO', payload: todos }))
  }, [])
}
