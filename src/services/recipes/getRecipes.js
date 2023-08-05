import { api } from '../api'

export const getRecipes = async ({ search }) => {
  const response = await api().get(`/recipes?filter=${search}`)

  return response.data
}
