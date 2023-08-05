import { api } from '../api'

export const getFavoritesRecipes = async () => {
  const response = await api().get('/favorites')
  return response.data
}
