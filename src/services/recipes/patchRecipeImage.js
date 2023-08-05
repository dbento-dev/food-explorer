import { api } from '../api'

export const patchRecipeImage = async ({ id, data }) => {
  const response = await api().patch(`/recipes/${id}`, data)

  return response.data
}
