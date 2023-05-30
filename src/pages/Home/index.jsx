import { Header } from '../../components/Header'
import { Banner, Container, Content } from './styles'
import bannerSVG from '../../assets/banner.svg'

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <Banner>
            <img src={bannerSVG} alt="Imagem de frutas e sobremesas" />

            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </Banner>
        </Content>
      </main>
    </Container>
  )
}
