import { Header } from '../../components/Header'
import { Banner, Container, Content } from './styles'
import bannerSVG from '../../assets/banner.svg'
import { Section } from '../../components/Section'
import { Slider } from '../../components/Slider'
import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'

export function Home() {
  const isAdmin = false

  const dishList = [
    {
      id: 1,
      title: 'Bolo de cenoura',
      description: 'Delicioso bolo de cenoura com cobertura de chocolate',
      price: '15,00'
    },
    {
      id: 2,
      title: 'Bolo de cenoura',
      description: 'Delicioso bolo de cenoura com cobertura de chocolate',
      price: '19,99'
    },
    {
      id: 3,
      title: 'Bolo de cenoura',
      description: 'Delicioso bolo de cenoura com cobertura de chocolate',
      price: '19,99'
    },
    {
      id: 4,
      title: 'Bolo de cenoura',
      description: 'Delicioso bolo de cenoura com cobertura de chocolate',
      price: '19,99'
    },
    {
      id: 5,
      title: 'Bolo de cenoura',
      description: 'Delicioso bolo de cenoura com cobertura de chocolate',
      price: '19,99'
    }
  ]

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
                    <Card
                      key={String(dish.id)}
                      data={dish}
                      isAdmin={isAdmin}
                      className="item"
                    />
                  )
                })}
            </Slider>
          </Section>
          <Section title="Sobremesas">
            <Slider>
              {dishList &&
                dishList.map((dish) => {
                  return (
                    <Card
                      key={String(dish.id)}
                      data={dish}
                      isAdmin={isAdmin}
                      className="item"
                    />
                  )
                })}
            </Slider>
          </Section>
          <Section title="Bebidas">
            <Slider>
              {dishList &&
                dishList.map((dish) => {
                  return (
                    <Card
                      key={String(dish.id)}
                      data={dish}
                      isAdmin={isAdmin}
                      className="item"
                    />
                  )
                })}
            </Slider>
          </Section>
        </Content>
        <Footer />
      </main>
    </Container>
  )
}
