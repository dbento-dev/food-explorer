import { createContext, useContext, useState } from 'react'

import { postFavorite } from '../services/favorites/postFavorite'
import { deleteFavorite } from '../services/favorites/deleteFavorite'
import { toast } from 'react-toastify'

export const FavoritesContext = createContext()

function FavoritesProvider({ children }) {
  const [isLoadingFavorite, setIsLoadingFavorite] = useState(false)

  const handleFavorite = async (id) => {
    setIsLoadingFavorite(true)
    try {
      const response = await postFavorite({
        recipeId: id
      })
      toast.success(response.message)
      setIsLoadingFavorite(false)
    } catch (error) {
      toast.error(error.response.data.message)
      setIsLoadingFavorite(false)
    }
  }

  const handleRemoveFavorite = async ({ id }) => {
    setIsLoadingFavorite(true)

    try {
      const response = await deleteFavorite({
        favoriteId: id
      })
      toast.success(response.message)
      setIsLoadingFavorite(false)
    } catch (error) {
      toast.error(error.response.data.message)
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
