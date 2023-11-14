import { createHashRouter } from 'react-router-dom'
import { Layout } from '../components/layout/layout'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Login } from '../pages/Login/Login'
import { SignIn } from '../pages/SignIn/SignIn'
import { ProtectedRoute } from './ProtectedRoute'

export const router = createHashRouter([
  {
    path: 'login',
    Component: Login
  },
  {
    path: 'sign-in',
    Component: SignIn
  },
  {
    path: 'home',
    Component: Layout,
    children: [
      {
        path: 'dashboard',
        Component: Dashboard,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )
      }
    ]
  }
])
