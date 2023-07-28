import { Container } from './styles'

export function ButtonLoading({ title, isLoading, ...rest }) {
  return (
    <Container {...rest}>
      <button type="button">
        {isLoading ? <div className="loader"></div> : title}
      </button>
    </Container>
  )
}
