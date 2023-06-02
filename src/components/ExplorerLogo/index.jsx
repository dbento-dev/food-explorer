import logoSVG from '../../assets/logo.svg'

import { Container } from './styles'

export function ExplorerLogo() {
  return (
    <Container>
      <img src={logoSVG} alt="Logo do Explorer Food" />
      <div>
        <span>food explorer</span>
      </div>
    </Container>
  )
}
