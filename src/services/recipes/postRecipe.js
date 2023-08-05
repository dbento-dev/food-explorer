import { api } from '../api'

export const postRecipe = async ({ data }) => {
  const response = await api().post(`/recipes`, data)

  return response.data
}
