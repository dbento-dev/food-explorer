import { Link } from 'react-router-dom'

import { FiHeart } from 'react-icons/fi'
import { RxMinus, RxPlus } from 'react-icons/rx'
import { RiPencilLine } from 'react-icons/ri'
import { Container } from './styles'

import { Button } from '../Button'

import { generateImageUrl } from '../../helpers/helpers'

export function Card({ data, isAdmin, ...rest }) {
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
        <p>{data?.description}</p>
        <span>R$ {data?.price}</span>

        {!isAdmin && (
          <div>
            <div className="counterControl">
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
