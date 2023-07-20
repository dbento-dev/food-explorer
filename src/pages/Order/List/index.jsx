import { useState } from 'react'

import { Container, StList, StTitle, StTotal } from './styles'
import { OrderItem } from '../OrderItem'

export function List({ data }) {
  // eslint-disable-next-line no-unused-vars
  // TODO: criar função com reducer para total do pedido
  const [total, setTotal] = useState(0)

  return (
    <Container>
      <StTitle>Meu pedido</StTitle>
      <StList>
        {data?.map((item) => (
          <OrderItem key={item?.id} data={item} />
        ))}
      </StList>
      <StTotal>Total: {total}</StTotal>
    </Container>
  )
}
