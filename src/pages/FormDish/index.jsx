import { useEffect, useState } from 'react'

import { RxCaretLeft } from 'react-icons/rx'

import { Container, Content, Form, Avatar } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextArea } from '../../components/TextArea'
import { IngredientsItem } from '../../components/IngredientsItem'
import { Select } from '../../components/Select'

import { FiCamera } from 'react-icons/fi'
import { CurrencyInput } from '../../components/CurrencyInput'

import avatarPlaceholderPng from '../../assets/upload-placeholder.png'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { Spinner } from '../../components/Spinner'
import { postRecipe } from '../../services/recipes/postRecipe'
import { toast } from 'react-toastify'

export function FormDish() {
  const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const [description, setDescription] = useState('')

  const imageURL = image
    ? `${api().defaults.baseURL}/files/${image}`
    : avatarPlaceholderPng

  const [avatar, setAvatar] = useState(imageURL)
  // eslint-disable-next-line no-unused-vars
  const [avatarFile, setAvatarFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState('')

  const disabledSubmitButton =
    !avatarFile || !name || !category || !price || !description

  function handleAddIngredient() {
    if (!newIngredient) return

    if (ingredients.includes(newIngredient)) {
      alert('Ingrediente já adicionado!')
      return
    }

    setIngredients((prevState) => [...prevState, newIngredient])
    setNewIngredient('')
  }

  function handleRemoveIngredient(deletedIngredient) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deletedIngredient)
    )
  }

  async function handleNewDish() {
    if (!avatarFile || !name || !category || !price || !description) {
      alert('Preencha todos os campos!')
      return
    }

    if (newIngredient) {
      alert(
        'Existe um ingrediente que não foi adicionado corretamente, verifique e tente novamente!'
      )
      return
    }

    setIsLoading(true)

    try {
      if (avatarFile) {
        const formData = new FormData()
        formData.append('image', avatarFile)
        formData.append('name', name)
        formData.append('category', category)
        formData.append('price', price)
        formData.append('description', description)

        ingredients.map((ingredient) => {
          formData.append('ingredients', ingredient)
        })

        const response = await postRecipe({ data: formData })

        if (response) {
          toast.success(response.message)
          navigate('/')
          setIsLoading(false)
          return
        } else {
          toast.success('Prato adicionado!')
        }
      }
    } catch (error) {
      setIsLoading(false)
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error(
          'Não foi possível adicionar o prato, tente novamente mais tarde.'
        )
      }
    }
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0]

    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)

    setAvatar(imagePreview)
  }

  useEffect(() => {
    setAvatar(imageURL)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image])

  return (
    <Container>
      <Header search={search} setSearch={setSearch} />

      <main>
        {!isLoading && (
          <Content>
            <ButtonText to="/" title="voltar" icon={RxCaretLeft} />
            <h2>Adicionar prato</h2>

            <Form id="form-dish" name="form-dish">
              <div className="row">
                <div className="form-group dish-photo">
                  <span>Imagem do prato</span>
                  <Avatar>
                    <img src={avatar} alt="Foto do prato" />

                    <label htmlFor="dish-photo">
                      <FiCamera />
                      <input
                        id="dish-photo"
                        name="dish-photo"
                        type="file"
                        accept="image/*"
                        onChange={handleChangeAvatar}
                      />
                    </label>
                  </Avatar>
                </div>
                <div className="form-group name">
                  <label htmlFor="name">Nome</label>
                  <Input
                    name="name"
                    placeholder="Salada Ceasar"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    maxLength="25"
                  />
                </div>
                <div className="form-group category">
                  <label htmlFor="category">Categoria</label>
                  <Select
                    name="category"
                    id="category"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  >
                    <option value="">Selecione</option>
                    <option value="drink">Bebida</option>
                    <option value="dish">Refeição</option>
                    <option value="dessert">Sobremesa</option>
                  </Select>
                </div>
              </div>

              <div className="row">
                <div className="form-group ingredients-list">
                  <div className="ingredients-list">
                    <span>Ingredientes</span>
                    <div className="ingredients">
                      {ingredients.map((ingredient, index) => (
                        <IngredientsItem
                          key={String(index)}
                          value={ingredient}
                          onClick={() => {
                            handleRemoveIngredient(ingredient)
                          }}
                        />
                      ))}

                      <IngredientsItem
                        isnew="isNew"
                        placeholder="Novo ingrediente"
                        value={newIngredient}
                        onChange={(e) => setNewIngredient(e.target.value)}
                        onClick={handleAddIngredient}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group price">
                  <label htmlFor="price">Preço</label>
                  <CurrencyInput setValue={setPrice} value={price} />
                </div>
              </div>

              <div className="row">
                <div className="form-group description">
                  <TextArea
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    label="Descrição"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    maxLength="300"
                  />
                </div>
              </div>

              <Button
                title="Adicionar prato"
                onClick={handleNewDish}
                disabled={disabledSubmitButton}
              />
            </Form>
          </Content>
        )}

        {isLoading && <Spinner />}
      </main>
      <Footer />
    </Container>
  )
}
