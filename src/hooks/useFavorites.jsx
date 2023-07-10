import { createContext, useContext, useEffect, useState } from 'react'

export const FavoriteContext = createContext()

function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('@foodexplorer:favorites')) || []
  )

  const handleFavoriteRecipe = ({ recipe }) => {
    setFavorites((prevState) => [...prevState, recipe])
  }

  const handleRemoveFavoriteRecipe = (id) => {
    setFavorites((prevState) => prevState.filter((item) => item.id !== id))
  }

  useEffect(() => {
    if (favorites) {
      localStorage.setItem('@foodexplorer:favorites', JSON.stringify(favorites))
    }
  }, [favorites])

  return (
    <FavoriteContext.Provider
      value={{ favorites, handleFavoriteRecipe, handleRemoveFavoriteRecipe }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

function useFavorite() {
  const context = useContext(FavoriteContext)
  return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { FavoriteProvider, useFavorite }
