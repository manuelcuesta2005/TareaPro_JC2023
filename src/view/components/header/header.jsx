/* eslint-disable react/prop-types */
import { useContext } from 'react'
import iconUser from '../../../assets/img/user-circle.png'
import { TodosContext } from '../../../context/todos'
import './header.css'

export const Header = () => {
  const { state } = useContext(TodosContext)
  return (
    <header className='user-panel'>
      <p>Bienvenido {state.user}</p>
      <img src={iconUser} alt='icon-user' />
    </header>
  )
}
