import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { RxCaretLeft } from 'react-icons/rx'

import { Avatar, Container, Content, Form } from './styles'

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
import { api } from '../../services/api'

import avatarPlaceholderPng from '../../assets/upload-placeholder.png'
import { Spinner } from '../../components/Spinner'
import { getRecipeById } from '../../services/recipes/getRecipeById'
import { deleteRecipeById } from '../../services/recipes/deleteRecipeById'
import { putRecipeById } from '../../services/recipes/putRecipeById'
import { patchRecipeImage } from '../../services/recipes/patchRecipeImage'
import { toast } from 'react-toastify'
import errorHandler from '../../helpers/errorHandler'

export function EditFormDish() {
  const navigate = useNavigate()

  const { id } = useParams()

  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const imageURL = image
    ? `${api().defaults.baseURL}/files/${image}`
    : avatarPlaceholderPng

  const [avatar, setAvatar] = useState(imageURL)
  const [avatarFile, setAvatarFile] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')

  async function updateRecipe({ recipe, avatarFile }) {
    setIsLoading(true)
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('image', avatarFile)

        await patchRecipeImage({ id, data: fileUploadForm })
      }

      const response = await putRecipeById({ id, data: recipe })

      if (response) {
        toast.success(response.message)
      } else {
        toast.error('Prato atualizado com sucesso!')
      }

      navigate('/')
      setIsLoading(false)
    } catch (error) {
      errorHandler(error)
      setIsLoading(false)
    }
  }

  const disabledSubmitButton =
    !image || !name || !category || !price || !description

  async function handleUpdate() {
    if (!image || !name || !category || !price || !description) {
      alert('Preencha todos os campos!')
      return
    }

    if (newIngredient) {
      alert(
        'Existe um ingrediente que não foi adicionado corretamente, verifique e tente novamente!'
      )
      return
    }
    const recipe = new FormData()

    recipe.append('name', name)
    recipe.append('category', category)
    ingredients.map((ingredient) => {
      recipe.append('ingredients', ingredient)
    })
    recipe.append('price', price)
    recipe.append('description', description)

    await updateRecipe({ recipe, avatarFile })
  }

  function handleChangeAvatar(e) {
    const file = e.target.files[0]

    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)

    setAvatar(imagePreview)
  }

  useEffect(() => {
    async function getRecipe() {
      setIsLoading(true)
      try {
        const response = await getRecipeById({ id })

        const { image, name, category, ingredients, price, description } =
          response

        setImage(image)
        setName(name)
        setCategory(category)
        setIngredients(ingredients.map((ingredient) => ingredient.name))
        setPrice(price)
        setDescription(description)
        setIsLoading(false)
      } catch (error) {
        toast.error(error.response.data.message)
        setIsLoading(false)
      }
    }

    getRecipe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  const handleDeleteRecipe = async (id) => {
    const confirm = window.confirm('Deseja realmente remover a receita?')

    if (!confirm) return

    setIsLoading(true)

    try {
      const response = await deleteRecipeById({ id })

      if (response) {
        toast.success(response)
        navigate('/')
        setIsLoading(false)
      } else {
        toast.success('Receita removida com sucesso!')
        navigate('/')
        setIsLoading(false)
      }
    } catch (error) {
      toast.error(error.response.data.message)
      setIsLoading(false)
    }
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
            <h2>Editar prato</h2>

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

              <div className="form-edit-buttons">
                <Button
                  title="Excluir prato"
                  onClick={() => handleDeleteRecipe(id)}
                  buttontype="warning"
                />

                <Button
                  title="Salvar alterações"
                  onClick={handleUpdate}
                  disabled={disabledSubmitButton}
                />
              </div>
            </Form>
          </Content>
        )}

        {isLoading && <Spinner />}
      </main>
      <Footer />
    </Container>
  )
}
