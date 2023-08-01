import { useState } from 'react'

import { Container } from './styles'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { List } from './List'
import { useCart } from '../../hooks/cart'
import { Payment } from './Payment'

export function Order() {
  const { cart } = useCart()
  const [search, setSearch] = useState('')

  return (
    <Container>
      <Header search={search} setSearch={setSearch} />
      <main>
        <div className="content">
          <div className="list-container">
            <List data={cart} />
          </div>
          {cart?.length > 0 && (
            <div className="payment-container">
              <Payment />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </Container>
  )
}
