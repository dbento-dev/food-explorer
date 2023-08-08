import { Container } from './styles'

import emptyPNG from '../../assets/empty-icon.png'

export function Empty({ message = 'Nenhum prato encontrado!', ...rest }) {
  return (
    <Container {...rest}>
      <h1>{message}</h1>
      <img src={emptyPNG} alt="Ícone de uma caixa vazia" />
    </Container>
  )
}
