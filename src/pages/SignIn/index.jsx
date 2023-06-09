import { useState } from 'react'
import { Background, Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

export function SignIn() {
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    console.log('handleSignIn')
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

          <Button title="Entrar" onClick={handleSignIn} />

          <Link to="/register">Criar uma conta</Link>
        </div>
      </Form>
    </Container>
  )
}
