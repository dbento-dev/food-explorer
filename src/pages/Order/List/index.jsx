import { Container, StList, StTitle, StTotal } from './styles'
import { OrderItem } from '../OrderItem'

export function List({ data }) {
  const summary = data.reduce((acc, item) => {
    acc += Number(item.price.replace(',', '.')).toFixed(2) * item.count
    return acc
  }, 0)

  return (
    <Container>
      <StTitle>Meu pedido</StTitle>
      <StList>
        {data?.map((item) => (
          <OrderItem key={item?.id} data={item} />
        ))}
      </StList>
      <StTotal>
        Total:{' '}
        {summary.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}
      </StTotal>
    </Container>
  )
}
