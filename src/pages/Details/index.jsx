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
import { Empty } from '../../components/Empty'
import { useCart } from '../../hooks/cart'
import { LoadingButton } from '../../components/LoadingButton'

export function Details() {
  const { isAdmin } = useAuth()
  const { handleAddToCart, currentItemLoading } = useCart()

  const [count, setCount] = useState(1)

  const params = useParams()

  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  const handleEditRecipe = (id) => {
    navigate(`/edit/${id}`)
  }

  const handleAdd = () => {
    const cart = {
      count,
      ...data
    }
    handleAddToCart(cart)
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

            {data?.name && (
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
                  <div className="ingredients-tags">
                    {data?.ingredients?.map((ingredient) => {
                      const { id, name } = ingredient
                      return <Tag key={String(id)} title={name} />
                    })}
                  </div>

                  {!isAdmin ? (
                    <div className="card-buttons">
                      <div id="counter-buttons">
                        <RxMinus onClick={handleDecrementCount} />
                        <span>{count}</span>
                        <RxPlus onClick={handleIncrementCount} />
                      </div>

                      <LoadingButton
                        title={`incluir ∙ R$ ${data?.price}`}
                        buttontype="primary"
                        onClick={handleAdd}
                        currentItemLoading={currentItemLoading}
                        data={data}
                      />
                    </div>
                  ) : (
                    <div className="dish-button">
                      <Button
                        title="Editar prato"
                        onClick={() => handleEditRecipe(data?.id)}
                        buttontype="warning"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {!data?.name && (
              <Empty message="Não foi possível carregar o prato, tente novamente!" />
            )}
          </Content>
        )}

        {isLoading && <Spinner />}
      </main>
      <Footer />
    </Container>
  )
}
