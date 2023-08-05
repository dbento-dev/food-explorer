import { api } from '../api'

export const deleteFavorite = async ({ favoriteId }) => {
  const config = {
    params: {
      favorite_id: favoriteId
    }
  }
  const response = await api().delete('/favorites', config)
  return response.data
}
