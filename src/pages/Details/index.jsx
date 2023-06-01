import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { RxCaretLeft, RxMinus, RxPlus } from 'react-icons/rx'

import { Container, Content } from './styles'

import dishPNG from '../../assets/mask-group-3.png'

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="voltar" icon={RxCaretLeft} />
          <div>
            <div>
              <img src={dishPNG} alt="Imagem do prato selecionado" />
            </div>

            <div>
              <h2>Salada Ravanello</h2>
              <p>
                Rabanetes, folhas verdes e molho agridoce salpicados com
                gergelim.
              </p>
              <div>
                <Tag title="cebola" />
                <Tag title="alface" />
                <Tag title="açucar" />
                <Tag title="sal" />
                <Tag title="leite" />
                <Tag title="arroz" />
                <Tag title="feijão" />
                <Tag title="ovos" />
                <Tag title="maçã" />
              </div>

              <div>
                <RxMinus />
                <span>01</span>
                <RxPlus />

                <Button title={`incluir ∙ R$ 49,30`} />
              </div>
            </div>
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  )
}
