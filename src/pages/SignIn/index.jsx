import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Form, Logo } from './styles'

import logoSVG from '../../assets/logo.svg'
import { Input } from '../../components/Input'
import { ButtonLoading } from '../../components/ButtonLoading'

import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn, isLoading } = useAuth()

  const handleSignIn = () => {
    signIn({
      email,
      password
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
          <h1>Faça login</h1>
          <label htmlFor="email">Email</label>
          <Input
            name="email"
            placeholder="exemplo@exemplo.com.br"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Senha</label>
          <Input
            name="password"
            placeholder="Insira a senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <ButtonLoading
            className="signin-button"
            title="Entrar"
            buttontype="primary"
            isLoading={isLoading}
            onClick={handleSignIn}
          />

          <Link to="/register">Criar uma conta</Link>
        </div>
      </Form>
    </Container>
  )
}
