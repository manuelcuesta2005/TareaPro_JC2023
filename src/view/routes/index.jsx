import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/layout/layout'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Login } from '../pages/Login/Login'
import { SignIn } from '../pages/SignIn/SignIn'
import { ProtectedRoute } from './ProtectedRoute'

export const router = createBrowserRouter([
  {
    path: 'login',
    Component: Login
  },
  {
    path: 'sign-in',
    Component: SignIn
  },
  {
    path: '',
    Component: Layout,
    children: [
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )
      }
    ]
  }
])
