import { Container } from './styles'

import emptyPNG from '../../assets/empty-icon.png'

export function Empty() {
  return (
    <Container>
      <h1>Nenhum prato encontrado!</h1>
      <p>Tente buscar por prato ou ingrediente novamente.</p>

      <img src={emptyPNG} alt="Ícone de uma caixa vazia" />
    </Container>
  )
}
