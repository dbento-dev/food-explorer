import { Spinner } from '../Spinner'
import { Container } from './styles'

export function Button({
  icon: Icon,
  title,
  loading = false,

  ...rest
}) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {Icon && <img src={Icon} alt={title} />}

      {loading && <Spinner />}
      {!loading && title}
    </Container>
  )
}
