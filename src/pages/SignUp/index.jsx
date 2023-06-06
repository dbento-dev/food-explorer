import { useState } from 'react'

import { Background, Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    console.log('handleSignUp')
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

          <Button title="Criar conta" onClick={handleSignUp} />

          <a to="/">Já tenho uma conta</a>
        </div>
      </Form>
    </Container>
  )
}
