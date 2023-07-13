import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Background, Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

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
      <Background />
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
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            title={isLoading ? 'Entrando...' : 'Entrar'}
            onClick={handleSignIn}
            buttontype="warning"
          />

          <Link to="/register">Criar uma conta</Link>
        </div>
      </Form>
    </Container>
  )
}
