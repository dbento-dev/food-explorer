import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RxCaretLeft, RxMinus, RxPlus } from 'react-icons/rx'

import { Container, Content } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { generateImageUrl } from '../../helpers/helpers'

export function Details() {
  const { isAdmin } = useAuth()

  const params = useParams()

  const [data, setData] = useState({})

  const navigate = useNavigate()

  const handleEditRecipe = (id) => {
    navigate(`/edit/${id}`)
  }

  useEffect(() => {
    async function getDishDetail() {
      const response = await api.get(`/recipes/${params.id}`)

      setData(response.data)
    }

    getDishDetail()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Header isAdmin={isAdmin} />
      <main>
        <Content>
          <ButtonText to="/" title="voltar" icon={RxCaretLeft} />
          <div className="dish">
            <div className="dishImage">
              <img
                src={generateImageUrl(data?.image)}
                alt="Imagem do prato selecionado"
              />
            </div>

            <div className="dishDetails">
              <h2>{data?.name}</h2>
              <p>{data?.description}</p>
              <div>
                {data?.ingredients?.map((ingredient) => {
                  const { id, name } = ingredient
                  return <Tag key={id} title={name} />
                })}
              </div>

              {!isAdmin ? (
                <div>
                  <RxMinus />
                  <span>01</span>
                  <RxPlus />

                  <Button
                    title={`incluir ∙ R$ ${data?.price}`}
                    buttontype="warning"
                  />
                </div>
              ) : (
                <div>
                  <Button
                    title="Editar prato"
                    onClick={() => handleEditRecipe(data?.id)}
                    buttontype="warning"
                  />
                </div>
              )}
            </div>
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  )
}
