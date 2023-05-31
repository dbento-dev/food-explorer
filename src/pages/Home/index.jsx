import { Header } from '../../components/Header'
import { Banner, Container } from './styles'
import bannerSVG from '../../assets/banner.svg'

export function Home() {
  return (
    <Container>
      <Header />

      <main>
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
        <div>Teste</div>
      </main>
    </Container>
  )
}
