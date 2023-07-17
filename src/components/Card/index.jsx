import { Link, useNavigate } from 'react-router-dom'

import { FiHeart } from 'react-icons/fi'
import { RxMinus, RxPlus } from 'react-icons/rx'
import { RiPencilLine } from 'react-icons/ri'
import { Container } from './styles'

import { Button } from '../Button'

import { generateImageUrl, transformPrice } from '../../helpers/helpers'
import { useAuth } from '../../hooks/auth'

import { useFavorites } from '../../hooks/favorites'
import { useState } from 'react'
import { toast } from 'react-toastify'

export function Card({ data, ...rest }) {
  const [count, setCount] = useState(1)

  const navigate = useNavigate()
  const { isAdmin } = useAuth()
  const { handleFavorite, handleRemoveFavorite } = useFavorites()
  const isFavorite = data?.favorite

  const handleEditRecipe = (id) => {
    navigate(`/edit/${id}`)
  }

  const truncateDescription = (description) => {
    if (description.length > 50) {
      return `${description.substring(0, 50)}...`
    } else {
      return description
    }
  }

  const handleIncrementCount = () => {
    setCount((prevState) => prevState + 1)
  }

  const handleDecrementCount = () => {
    if (count <= 1) {
      toast.info('A quantidade mínima é de 1')
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
        <h2>{data?.name}</h2>
        <p id="description-tooltip">{truncateDescription(data?.description)}</p>
        <span>{transformPrice(data?.price)}</span>

        {!isAdmin && (
          <div className="card-buttons">
            <div id="counter-buttons">
              <RxMinus onClick={handleDecrementCount} />
              <span>{count}</span>
              <RxPlus onClick={handleIncrementCount} />
            </div>

            <Button title="Incluir" buttontype="warning" />
          </div>
        )}
      </div>
    </Container>
  )
}
