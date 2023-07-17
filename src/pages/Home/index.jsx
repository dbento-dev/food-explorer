import { useEffect, useState } from 'react'
import { Banner, Container, Content, StDetails } from './styles'
import bannerSVG from '../../assets/banner.svg'

import { Slider } from '../../components/Slider'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Empty } from '../../components/Empty'

import { Spinner } from '../../components/Spinner'
import { useFavorites } from '../../hooks/favorites'
import { getRecipes } from '../../services/recipes/getRecipes'
import { getFavoritesRecipes } from '../../services/favorites/getFavorites'

export function Home() {
  const { isLoadingFavorite } = useFavorites()

  const [search, setSearch] = useState('')
  const [recipesList, setRecipesList] = useState([])

  const [dishList, setDishList] = useState([])
  const [drinkList, setDrinkList] = useState([])
  const [dessertList, setDessertList] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoadingFavorite) {
      return
    }

    async function loadData() {
      setIsLoading(true)

      const [recipesList, favoriteRecipes] = await Promise.all([
        getRecipes({ search }),
        getFavoritesRecipes()
      ])

      const recipesWithFavoriteFlag = recipesList.map((recipe) => {
        const favorite = favoriteRecipes.some(
          (favoriteRecipe) => favoriteRecipe.recipe_id === recipe.id
        )
        return {
          ...recipe,
          favorite
        }
      })

      setRecipesList(recipesWithFavoriteFlag)
      setIsLoading(false)
    }

    loadData()
  }, [search, isLoadingFavorite])

  useEffect(() => {
    const _dishList = recipesList.filter((recipe) => recipe.category === 'dish')
    const _drinkList = recipesList.filter(
      (recipe) => recipe.category === 'drink'
    )
    const _dessertList = recipesList.filter(
      (recipe) => recipe.category === 'dessert'
    )

    setDishList(_dishList)
    setDrinkList(_drinkList)
    setDessertList(_dessertList)
  }, [recipesList])

  return (
    <Container>
      <Header search={search} setSearch={setSearch} />

      <main>
        <Content>
          <Banner>
            <div className="imgBanner">
              <img src={bannerSVG} alt="Imagem de frutas e sobremesas" />
            </div>
            <div className="textBanner">
              <div className="infoBanner">
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
              </div>
            </div>
          </Banner>
          <StDetails>
            {isLoading && <Spinner />}
            {dishList?.length > 0 && !isLoading && (
              <Section title="Refeições">
                <Slider>
                  {dishList &&
                    dishList.map((dish) => {
                      return (
                        <Card
                          key={String(dish.id)}
                          data={dish}
                          className="item"
                        />
                      )
                    })}
                </Slider>
              </Section>
            )}
            {dessertList?.length > 0 && !isLoading && (
              <Section title="Sobremesas">
                <Slider>
                  {dessertList &&
                    dessertList.map((dessert) => {
                      return (
                        <Card
                          key={String(dessert.id)}
                          data={dessert}
                          className="item"
                        />
                      )
                    })}
                </Slider>
              </Section>
            )}

            {drinkList?.length > 0 && !isLoading && (
              <Section title="Bebidas">
                <Slider>
                  {drinkList &&
                    drinkList.map((drink) => {
                      return (
                        <Card
                          key={String(drink.id)}
                          data={drink}
                          className="item"
                        />
                      )
                    })}
                </Slider>
              </Section>
            )}
            {recipesList?.length === 0 && !isLoading && (
              <Section>
                <Empty />
              </Section>
            )}
          </StDetails>
        </Content>
      </main>
      <Footer />
    </Container>
  )
}
