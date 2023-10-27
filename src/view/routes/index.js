import { createBrowserRouter } from 'react-router-dom'
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
  }
])
