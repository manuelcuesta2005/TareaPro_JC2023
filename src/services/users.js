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
