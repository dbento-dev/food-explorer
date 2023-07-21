import { Container, StList, StTitle, StTotal } from './styles'
import { OrderItem } from '../OrderItem'
import { BsFillCartXFill } from 'react-icons/bs'
import { Button } from '../../../components/Button'

export function List({ data }) {
  const summary = data.reduce((acc, item) => {
    acc += Number(item.price.replace(',', '.')).toFixed(2) * item.count
    return acc
  }, 0)

  const handleNextStep = () => {
    console.log('next step')
  }

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

      <div className="button-container">
        <Button
          type="button"
          title="Avançar"
          buttontype="warning"
          onClick={handleNextStep}
        />
      </div>
    </Container>
  )
}
