import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { generateImageUrl } from '../../helpers/helpers'
import { Container, Content, FavoriteCard } from './styles'
import { Spinner } from '../../components/Spinner'
import { useFavorites } from '../../hooks/favorites'
import { getFavoritesRecipes } from '../../services/favorites/getFavorites'
import errorHandler from '../../helpers/errorHandler'
import { Empty } from '../../components/Empty'

export function Favorites() {
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')

  const { isLoadingFavorite, handleRemoveFavorite } = useFavorites()

  const [favoriteList, setFavoriteList] = useState([])

  useEffect(() => {
    if (isLoadingFavorite) {
      return
    }
    async function getFavorites() {
      setIsLoading(true)

      try {
        const response = await getFavoritesRecipes()
        if (response) {
          setFavoriteList(response)
          setIsLoading(false)
        } else {
          setFavoriteList([])
          setIsLoading(false)
        }
      } catch (error) {
        errorHandler(error)
        setIsLoading(false)
      }
    }

    getFavorites()
  }, [isLoadingFavorite])

  return (
    <Container>
      <Header search={search} setSearch={setSearch} />
      <main>
        {isLoading && <Spinner />}
        {!isLoading && (
          <Content>
            <h1>Meus favoritos</h1>

            {favoriteList.length === 0 && (
              <Empty message="Nenhum prato favorito encontrado!" />
            )}

            {favoriteList.length > 0 && (
              <ul className="card-list">
                {favoriteList.map((recipe) => (
                  <li key={String(recipe.id)}>
                    <FavoriteCard>
                      <img
                        src={generateImageUrl(recipe?.image)}
                        alt="Image do prato"
                      />
                      <div>
                        <span>{recipe.name}</span>

                        <div>
                          <span
                            onClick={() =>
                              handleRemoveFavorite({ id: recipe?.recipe_id })
                            }
                          >
                            Remover dos favoritos
                          </span>
                        </div>
                      </div>
                    </FavoriteCard>
                  </li>
                ))}
              </ul>
            )}
          </Content>
        )}
      </main>

      <Footer />
    </Container>
  )
}
