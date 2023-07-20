import { Container, StList, StTitle, StTotal } from './styles'
import { OrderItem } from '../OrderItem'
import { BsFillCartXFill } from 'react-icons/bs'

export function List({ data }) {
  const summary = data.reduce((acc, item) => {
    acc += Number(item.price.replace(',', '.')).toFixed(2) * item.count
    return acc
  }, 0)

  return (
    <Container>
      <StTitle>Meu pedido</StTitle>
      <StList>
        {data?.length === 0 && (
          <div className="empty">
            <BsFillCartXFill />
            <p>Seu carrinho está vazio</p>
          </div>
        )}
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
