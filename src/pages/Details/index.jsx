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

import { generateImageUrl } from '../../helpers/helpers'
import { Spinner } from '../../components/Spinner'
import { getRecipeById } from '../../services/recipes/getRecipeById'
import errorHandler from '../../helpers/errorHandler'

export function Details() {
  const { isAdmin } = useAuth()

  const params = useParams()

  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const handleEditRecipe = (id) => {
    navigate(`/edit/${id}`)
  }

  useEffect(() => {
    async function getDishDetail() {
      setIsLoading(true)

      try {
        const response = await getRecipeById({ id: params.id })

        setData(response)
        setIsLoading(false)
      } catch (error) {
        errorHandler(error)
        setData({})
        setIsLoading(false)
      }
    }

    getDishDetail()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Header search={search} setSearch={setSearch} />
      <main>
        {!isLoading && (
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
                    {/* TODO: Implementar o botão de adicionar */}
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
        )}

        {isLoading && <Spinner />}
      </main>
      <Footer />
    </Container>
  )
}
