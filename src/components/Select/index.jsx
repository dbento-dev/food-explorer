import { Container } from './styles'

export function Select({ ...rest }) {
  return (
    <Container>
      <select type="text" {...rest} />
    </Container>
  )
}
