import { Container } from './styles'

export function Select({ icon: Icon, ...rest }) {
  return (
    <Container>
      <select type="text" {...rest} />
    </Container>
  )
}
