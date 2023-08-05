import { api } from '../api'

export const getRecipeById = async ({ id }) => {
  const response = await api().get(`/recipes/${id}`)

  return response.data
}
