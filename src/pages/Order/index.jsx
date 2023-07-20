import { useState } from 'react'

import { Container } from './styles'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { List } from './List'
import { useCart } from '../../hooks/cart'

export function Order() {
  const { cart } = useCart()
  const [search, setSearch] = useState('')

  return (
    <Container>
      <Header search={search} setSearch={setSearch} />
      <main>
        <div className="list-container">
          <List data={cart} />
        </div>
        <div className="payment-container">
          <h1>Pagamento</h1>
        </div>
      </main>
      <Footer />
    </Container>
  )
}
