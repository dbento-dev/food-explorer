import { Container } from './styles'
import { generateImageUrl } from '../../../helpers/helpers'
import { RxMinus, RxPlus } from 'react-icons/rx'
import { useEffect, useState } from 'react'
import { useCart } from '../../../hooks/cart'

export function OrderItem({ data }) {
  const { handleRemoveFromCart } = useCart()
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
  }, [])

  return (
    <Container>
      <img src={generateImageUrl(image)} alt="Image do prato" />
      <div>
        <div>
          <span>{name}</span>
          <div id="counter-buttons">
            <RxMinus />
            <span>{count}</span>
            <RxPlus />
          </div>
          <span>Preço: {price}</span>
          &bull;
          <span>
            Total:{' '}
            {totalAmount.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </span>
        </div>
        <span className="removeButton" onClick={handleRemove}>
          Excluir
        </span>
      </div>
    </Container>
  )
}