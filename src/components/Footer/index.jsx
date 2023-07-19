import { Container } from './styles'

import logoSVG from '../../assets/gray-logo.svg'

export function Footer({ ...rest }) {
  return (
    <Container {...rest}>
      <div>
        <img src={logoSVG} alt="logo do food explorer" />
        <span>food explorer</span>
      </div>
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}
