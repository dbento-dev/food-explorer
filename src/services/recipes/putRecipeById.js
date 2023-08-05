import { api } from '../api'

export const putRecipeById = async ({ id, data }) => {
  const response = await api().put(`/recipes/${id}`, data)

  return response.data
}
