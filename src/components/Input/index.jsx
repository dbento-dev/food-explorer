import { Container } from './styles'

export function Input({ icon: Icon, value, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input type="text" value={value} {...rest} />
    </Container>
  )
}
