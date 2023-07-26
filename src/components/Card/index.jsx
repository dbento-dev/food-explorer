import { Link, useNavigate } from 'react-router-dom'

import { FiHeart } from 'react-icons/fi'
import { RxMinus, RxPlus } from 'react-icons/rx'
import { RiPencilLine } from 'react-icons/ri'
import { Container } from './styles'

import {
  generateImageUrl,
  transformPrice,
  truncateString
} from '../../helpers/helpers'
import { useAuth } from '../../hooks/auth'

import { useFavorites } from '../../hooks/favorites'
import { useState } from 'react'
import { useCart } from '../../hooks/cart'
import { LoadingButton } from '../LoadingButton'

export function Card({ data, ...rest }) {
  const [count, setCount] = useState(1)

  const navigate = useNavigate()
  const { isAdmin } = useAuth()
  const { handleFavorite, handleRemoveFavorite } = useFavorites()
  const isFavorite = data?.favorite

  const { handleAddToCart, currentItemLoading } = useCart()

  const handleAdd = () => {
    const cart = {
      count,
      ...data
    }
    handleAddToCart(cart)
  }

  const handleEditRecipe = (id) => {
    navigate(`/edit/${id}`)
  }

  const handleIncrementCount = () => {
    setCount((prevState) => prevState + 1)
  }

  const handleDecrementCount = () => {
    if (count <= 1) {
      return
    }
    setCount((prevState) => prevState - 1)
  }

  return (
    <Container {...rest}>
      <div>
        {!isAdmin ? (
          <FiHeart
            className={isFavorite ? 'is-favorite' : ''}
            onClick={
              isFavorite
                ? () => handleRemoveFavorite({ id: data?.id })
                : () => handleFavorite(data?.id)
            }
          />
        ) : (
          <RiPencilLine onClick={() => handleEditRecipe(data?.id)} />
        )}

        <Link to={`/details/${data?.id}`}>
          <img src={generateImageUrl(data?.image)} alt="Imagem do prato" />
        </Link>

        <div id="tooltip">
          <span id="card-name">{truncateString(data?.name, 18)}</span>
          <span id="tooltip-name">{data?.name}</span>
        </div>

        <p id="card-description">{truncateString(data?.description, 20)}</p>
        <span id="card-price">{transformPrice(data?.price)}</span>

        {!isAdmin && (
          <div className="card-buttons">
            <div id="counter-buttons">
              <RxMinus onClick={handleDecrementCount} />
              <span>{count}</span>
              <RxPlus onClick={handleIncrementCount} />
            </div>

            <LoadingButton
              title="Incluir"
              buttontype="primary"
              onClick={handleAdd}
              currentItemLoading={currentItemLoading}
              data={data}
            />
          </div>
        )}
      </div>
    </Container>
  )
}
