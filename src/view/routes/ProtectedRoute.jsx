import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { TodosContext } from '../../context/todos'

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  const { state } = useContext(TodosContext)
  if (!state.user) return <Navigate to='/login' replace />
  return children
}
