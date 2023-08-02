import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../../services/api'

import { Container, Form, Logo } from './styles'
import logoSVG from '../../assets/logo.svg'

import { Input } from '../../components/Input'

import { ButtonLoading } from '../../components/ButtonLoading'

export function SignUp() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const disabledSubmitButton = !name || !email || password?.length < 6

  const handleSignUp = () => {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos')
    }

    setIsLoading(true)
    api
      .post('/users', {
        name,
        email,
        password
      })
      .then(() => {
        toast.success('Usuário criado com sucesso')
        navigate('/')
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        if (error.response) {
          toast.error(error.response.data.message)
        } else {
          toast.error('Ocorreu um erro inesperado')
        }
      })
  }

  return (
    <Container>
      <Logo>
        <img src={logoSVG} alt="logo do food explorer" />
        <span>food explorer</span>
      </Logo>
      <Form>
        <div>
          <h1>Crie sua conta</h1>

          <label htmlFor="name">Seu nome</label>
          <Input
            name="name"
            placeholder="John Doe"
            type="email"
            onChange={(e) => setName(e.target.value)}
            required
            value={name}
          />

          <label htmlFor="email">Email</label>
          <Input
            name="email"
            placeholder="exemplo@exemplo.com.br"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Senha</label>
          <Input
            name="password"
            placeholder="No mínimo 6 caracteres"
            type="password"
            value={password}
            minLength={6}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <ButtonLoading
            className="register-button"
            title="Criar conta"
            buttontype="primary"
            onClick={handleSignUp}
            isLoading={isLoading}
            isDisabled={disabledSubmitButton}
          />

          <Link to="/">Já tenho uma conta</Link>
        </div>
      </Form>
    </Container>
  )
}
