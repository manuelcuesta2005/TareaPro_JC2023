import { RouterProvider } from 'react-router-dom'
import { TodosProvider } from '../context/todos'
import { router } from './routes/index'

export const App = () => {
  return (
    <TodosProvider>
      <RouterProvider router={router} />
    </TodosProvider>
  )
}
