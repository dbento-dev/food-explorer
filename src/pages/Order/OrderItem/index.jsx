import { Container } from './styles'
import { generateImageUrl } from '../../../helpers/helpers'
import { RxMinus, RxPlus } from 'react-icons/rx'
import { useEffect, useState } from 'react'
import { useCart } from '../../../hooks/cart'

export function OrderItem({ data }) {
  const { handleRemoveFromCart, handleIncrementCount, handleDecrementCount } =
    useCart()
  const { image, name, price, count } = data

  const [totalAmount, setTotalAmount] = useState(0)

  const handleRemove = () => {
    const confirm = window.confirm('Deseja realmente remover o item?')

    if (!confirm) return

    handleRemoveFromCart(data.id)
  }

  useEffect(() => {
    let transformedAmount = Number(price.replace(',', '.')).toFixed(2)

    const transformedTotalAmount = count * transformedAmount
    setTotalAmount(transformedTotalAmount)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const handleIncrementItem = () => {
    handleIncrementCount(data.id)
  }

  const handleDecrementItem = () => {
    if (count <= 1) return
    handleDecrementCount(data.id)
  }

  return (
    <Container className="card">
      <img src={generateImageUrl(image)} alt="Image do prato" />
      <div className="item-container">
        <div className="item-info">
          <span>{name}</span>
          <div className="counter-buttons">
            <RxMinus onClick={handleDecrementItem} />
            <span>{count}</span>
            <RxPlus onClick={handleIncrementItem} />
          </div>
          <div className="price-container">
            <span>Preço: {price}</span>
            &bull;
            <span>
              Total:{' '}
              {totalAmount?.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </span>
          </div>
        </div>
        <div className="removeButton">
          <span onClick={handleRemove}>Excluir</span>
        </div>
      </div>
    </Container>
  )
}
