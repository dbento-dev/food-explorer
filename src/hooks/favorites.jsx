import { createContext, useContext, useState } from 'react'

import { postFavorite } from '../services/favorites/postFavorite'
import { deleteFavorite } from '../services/favorites/deleteFavorite'

export const FavoritesContext = createContext()

function FavoritesProvider({ children }) {
  const [isLoadingFavorite, setIsLoadingFavorite] = useState(false)

  const handleFavorite = async (id) => {
    setIsLoadingFavorite(true)
    try {
      const response = await postFavorite({
        recipeId: id
      })
      alert(response.message)
      setIsLoadingFavorite(false)
    } catch (error) {
      alert(error.response.data.message)
      setIsLoadingFavorite(false)
    }
  }

  const handleRemoveFavorite = async ({ id }) => {
    setIsLoadingFavorite(true)

    try {
      await deleteFavorite({
        favoriteId: id
      })
      setIsLoadingFavorite(false)
    } catch (error) {
      alert(error.response.data.message)
      setIsLoadingFavorite(false)
    }
  }

  return (
    <FavoritesContext.Provider
      value={{
        handleFavorite,
        handleRemoveFavorite,
        isLoadingFavorite
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

function useFavorites() {
  const context = useContext(FavoritesContext)
  return context
}

export { FavoritesProvider, useFavorites }
