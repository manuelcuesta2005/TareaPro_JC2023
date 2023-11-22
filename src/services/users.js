import { API_URL_USER } from '../env'

export const newUser = (body) => {
  return fetch(API_URL_USER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(response => response.user)
}

export const loginUser = (_id) => {
  return fetch(API_URL_USER + '/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ _id })
  }).then(response => response.json())
    .then(response => response.user)
}

export const updateUser = (body) => {
  return fetch(API_URL_USER, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(response => response.user)
}
