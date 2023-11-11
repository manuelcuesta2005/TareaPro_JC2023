import './Dashboard.css'
import { FormAddTodo } from '../../components/formAddTodo/formAddTodo'
import { Todolist } from '../../components/todoList/todoList'
import { useContext } from 'react'
import { TodosContext } from '../../../context/todos'
import { useTodo } from '../../../hooks/useTodo'

export const Dashboard = () => {
  const { state } = useContext(TodosContext)
  useTodo()

  return (
    <>
      <FormAddTodo />
      <Todolist todos={state.todos} />
    </>

  )
}
