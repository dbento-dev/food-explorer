import { api } from '../api'

export const deleteRecipeById = async ({ id }) => {
  const response = await api.delete(`/recipes/${id}`)

  return response.data
}
