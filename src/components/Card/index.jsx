import { Link, useNavigate } from 'react-router-dom'

import { FiHeart } from 'react-icons/fi'
import { RxMinus, RxPlus } from 'react-icons/rx'
import { RiPencilLine } from 'react-icons/ri'
import { Container } from './styles'

import { Button } from '../Button'

import { generateImageUrl, transformPrice } from '../../helpers/helpers'
import { useAuth } from '../../hooks/auth'

export function Card({ data, ...rest }) {
  const { isAdmin } = useAuth()

  const navigate = useNavigate()

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

  return (
    <Container {...rest}>
      <div>
        {!isAdmin ? (
          <FiHeart />
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
              <RxMinus />
              <span>01</span>
              <RxPlus />
            </div>

            <Button title="Incluir" buttontype="warning" />
          </div>
        )}
      </div>
    </Container>
  )
}
