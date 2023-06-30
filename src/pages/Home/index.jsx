import { useEffect, useState } from 'react'
import { Banner, Container, Content } from './styles'
import bannerSVG from '../../assets/banner.svg'

import { Slider } from '../../components/Slider'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Empty } from '../../components/Empty'

import { api } from '../../services/api'
// import { useAuth } from '../../hooks/auth'

export function Home() {
  // eslint-disable-next-line no-unused-vars
  // const { isAdmin } = useAuth()

  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState('')
  const [recipesList, setRecipesList] = useState([])

  const [dishList, setDishList] = useState([])
  const [drinkList, setDrinkList] = useState([])
  const [dessertList, setDessertList] = useState([])

  useEffect(() => {
    async function getDishRecipes() {
      const response = await api.get(`/recipes?filter=${search}`)

      setRecipesList(response.data)
    }

    getDishRecipes()
  }, [search])

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
      <Header />

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
          <Section title="Refeições">
            <Slider>
              {dishList &&
                dishList.map((dish) => {
                  return (
                    <Card key={String(dish.id)} data={dish} className="item" />
                  )
                })}
            </Slider>
          </Section>
          {dessertList?.length > 0 && (
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

          {drinkList?.length > 0 && (
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
          {recipesList?.length === 0 && (
            <Section>
              <Empty />
            </Section>
          )}
        </Content>
        <Footer />
      </main>
    </Container>
  )
}
