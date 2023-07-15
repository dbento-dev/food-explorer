import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { generateImageUrl } from '../../helpers/helpers'
import { Container, Content, FavoriteCard } from './styles'
import { api } from '../../services/api'
import { Spinner } from '../../components/Spinner'
import { useFavorites } from '../../hooks/favorites'

export function Favorites() {
  const [isLoading, setIsLoading] = useState(true)

  const { isLoadingFavorite, handleRemoveFavorite } = useFavorites()

  const [favoriteList, setFavoriteList] = useState([])

  useEffect(() => {
    if (isLoadingFavorite) {
      return
    }
    async function getFavorites() {
      setIsLoading(true)
      await api
        .get('/favorites')
        .then((response) => {
          const { data } = response
          setFavoriteList(data)
          setIsLoading(false)
        })
        .catch((error) => {
          alert(error.response.data.message)
          setIsLoading(false)
        })
    }

    getFavorites()
  }, [isLoadingFavorite])

  return (
    <Container>
      <Header />
      <main>
        <h1>Meus favoritos</h1>

        {isLoading && <Spinner />}

        {!isLoading && (
          <Content>
            {favoriteList.map((recipe) => (
              <FavoriteCard key={String(recipe.id)}>
                <img
                  src={generateImageUrl(recipe?.image)}
                  alt="Image do prato"
                />
                <div>
                  <span>{recipe.name}</span>
                  <span
                    onClick={() =>
                      handleRemoveFavorite({ id: recipe?.recipe_id })
                    }
                  >
                    Remover dos favoritos
                  </span>
                </div>
              </FavoriteCard>
            ))}
          </Content>
        )}
      </main>

      <Footer />
    </Container>
  )
}
