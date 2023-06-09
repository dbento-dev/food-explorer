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

export function FormDish() {
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const [description, setDescription] = useState('')

  const imageURL = avatarPlaceholderPng
  const isAdmin = true

  const [avatar, setAvatar] = useState(imageURL)
  // eslint-disable-next-line no-unused-vars
  const [avatarFile, setAvatarFile] = useState(null)

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
    console.log(deletedIngredient)
  }

  async function handleNewDish() {
    console.log('handleNewDish')
  }

  function handleChangeAvatar() {
    console.log('handleChangeAvatar')
  }

  useEffect(() => {
    setAvatar(imageURL)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image])

  return (
    <Container>
      <Header isAdmin={isAdmin} />

      <main>
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
                  placeholder="Ex.: Salada Ceasar"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group category">
                <label htmlFor="category">Categoria</label>
                <Select
                  name="category"
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
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
                        isNew={false}
                        value={ingredient}
                        onClick={() => {
                          handleRemoveIngredient(ingredient)
                        }}
                      />
                    ))}

                    <IngredientsItem
                      isNew
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
      </main>
      <Footer />
    </Container>
  )
}
