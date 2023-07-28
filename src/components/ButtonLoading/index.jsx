import { Container } from './styles'

export function ButtonLoading({ title, isLoading, isDisabled, ...rest }) {
  return (
    <Container {...rest}>
      <button type="button" disabled={isDisabled}>
        {isLoading ? <div className="loader"></div> : title}
      </button>
    </Container>
  )
}
