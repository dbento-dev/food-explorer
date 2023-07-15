import { useNavigate } from 'react-router-dom'
import logoSVG from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth'

import { Container } from './styles'

export function ExplorerLogo() {
  const { isAdmin } = useAuth()

  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  return (
    <Container onClick={goHome}>
      <img src={logoSVG} alt="Logo do Explorer Food" />
      <div>
        <span>food explorer</span> {isAdmin && <span>admin</span>}
      </div>
    </Container>
  )
}
