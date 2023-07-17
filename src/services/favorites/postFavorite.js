import { api } from '../api'

export const postFavorite = async ({ recipeId }) => {
  const config = {
    recipe_id: recipeId
  }
  const response = await api.post('/favorites', config)
  return response.data
}
