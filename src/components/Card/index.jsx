import { Link } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import { FiHeart } from 'react-icons/fi'
import { RxMinus, RxPlus } from 'react-icons/rx'
import { RiPencilLine } from 'react-icons/ri'
import { Container } from './styles'

import { Button } from '../Button'

import { generateImageUrl, transformPrice } from '../../helpers/helpers'

export function Card({ data, isAdmin, ...rest }) {
  const truncateDescription = (description) => {
    if (description.length > 15) {
      return `${description.substring(0, 15)}...`
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
          <RiPencilLine onClick={() => console.log('Editar')} />
        )}

        <Link to={`/details/${data?.id}`}>
          <img src={generateImageUrl(data?.image)} alt="Imagem do prato" />
        </Link>
        <h2>{data?.name}</h2>
        <p
          id="description-tooltip"
          data-tooltip-id="description-tooltip"
          data-tooltip-content={data?.description}
        >
          {truncateDescription(data?.description)}
        </p>
        <Tooltip id="description-tooltip" />
        <span>{transformPrice(data?.price)}</span>

        {!isAdmin && (
          <div className="card-buttons">
            <div id="counter-buttons">
              <RxMinus />
              <span>01</span>
              <RxPlus />
            </div>

            <Button title="Incluir" />
          </div>
        )}
      </div>
    </Container>
  )
}
