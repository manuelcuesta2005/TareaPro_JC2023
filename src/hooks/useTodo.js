import { useContext, useEffect } from 'react'
import { TodosContext } from '../context/todos'

export const useTodo = () => {
  const { state, dispatch } = useContext(TodosContext)

  useEffect(() => {
    fetch(`https://todos-api.3.us-1.fl0.io/api/todo?userId=${state.user._id}`)
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: 'GET_TODO', payload: response.todos })
      })
  }, [])
}
