import axios from 'axios'

export const addNewTodo = (newTodo: any) => {
  return axios.post('/todos', newTodo)
}
