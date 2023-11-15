import { API_URL_TODO } from '../env'

export const deleteTodo = (todoId) => {
  return fetch(API_URL_TODO + '/' + todoId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(response => response.todo)
}

export const createTodo = (body) => {
  return fetch(API_URL_TODO, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(response => response.todo)
}

export const updateTodo = (body) => {
  return fetch(API_URL_TODO, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(response => response.todo)
}
