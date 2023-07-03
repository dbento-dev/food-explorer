import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

import { Background, Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSignUp = () => {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos')
    }

    api
      .post('/users', {
        name,
        email,
        password
      })
      .then(() => {
        alert('Usuário criado com sucesso')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Ocorreu um erro inesperado')
        }
      })
  }

  return (
    <Container>
      <Background />
      <Form>
        <div>
          <h1>Crie sua conta</h1>

          <label htmlFor="name">Seu nome</label>
          <Input
            name="name"
            placeholder="Exemplo: Maria da Siva"
            type="email"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <Input
            name="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Senha</label>
          <Input
            name="password"
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            title="Criar conta"
            onClick={handleSignUp}
            buttontype="warning"
          />

          <Link to="/">Já tenho uma conta</Link>
        </div>
      </Form>
    </Container>
  )
}
