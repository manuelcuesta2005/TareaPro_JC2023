import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../components/layout/layout'
import { Dashboard } from '../pages/Dashboard/Dashboard'
import { Login } from '../pages/Login/Login'
import { SignIn } from '../pages/SignIn/SignIn'

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
        Component: Dashboard
      }
    ]
  }
])
