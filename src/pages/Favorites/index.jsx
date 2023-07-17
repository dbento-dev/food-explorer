import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { generateImageUrl } from '../../helpers/helpers'
import { Container, Content, FavoriteCard } from './styles'
import { Spinner } from '../../components/Spinner'
import { useFavorites } from '../../hooks/favorites'
import { getFavoritesRecipes } from '../../services/favorites/getFavorites'
import { toast } from 'react-toastify'

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
        toast.error(error.response.data.message)
        setIsLoading(false)
      }
    }

    getFavorites()
  }, [isLoadingFavorite])

  return (
    <Container>
      <Header search={search} setSearch={setSearch} />
      <main>
        <h1>Meus favoritos</h1>

        {isLoading && <Spinner />}

        {!isLoading && (
          <Content>
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
                      <span
                        onClick={() =>
                          handleRemoveFavorite({ id: recipe?.recipe_id })
                        }
                      >
                        Remover dos favoritos
                      </span>
                    </div>
                  </FavoriteCard>
                </li>
              ))}
            </ul>
          </Content>
        )}
      </main>

      <Footer />
    </Container>
  )
}
