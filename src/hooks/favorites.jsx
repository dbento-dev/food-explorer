import { createContext, useContext, useState } from 'react'
import { api } from '../services/api'

export const FavoritesContext = createContext()

function FavoritesProvider({ children }) {
  const [isLoadingFavorite, setIsLoadingFavorite] = useState(false)

  const handleFavorite = async (id) => {
    setIsLoadingFavorite(true)
    await api
      .post('/favorites', {
        recipe_id: id
      })
      .then(() => {
        setIsLoadingFavorite(false)
      })
      .catch(() => {
        alert(
          'Não foi possível adicionar o prato aos favoritos, tente novamente mais tarde.'
        )
        setIsLoadingFavorite(false)
      })
  }

  const handleRemoveFavorite = async (id) => {
    setIsLoadingFavorite(true)
    await api
      .delete(`/favorites/${id}`)
      .then(() => {
        setIsLoadingFavorite(false)
      })
      .catch(() => {
        alert(
          'Não foi possível remover o prato dos favoritos, tente novamente mais tarde.'
        )
        setIsLoadingFavorite(false)
      })
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
