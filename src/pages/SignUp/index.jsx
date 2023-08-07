import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../../services/api'

import { Container, Logo } from './styles'
import logoSVG from '../../assets/logo.svg'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoadingButton } from '../../components/Commons/LoadingButton'
import errorHandler from '../../helpers/errorHandler'

export function SignUp() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const createUserFormSchema = z.object({
    name: z
      .string()
      .nonempty('Nome é obrigatório')
      .transform((name) => {
        return name
          .trim()
          .split(' ')
          .map((word) => word[0].toLocaleUpperCase().concat(word.substring(1)))
          .join(' ')
      }),
    email: z
      .string()
      .email('Email inválido')
      .nonempty('Email é obrigatório')
      .toLowerCase(),
    password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(createUserFormSchema)
  })

  function createUser(data) {
    const { name, email, password } = data
    setIsLoading(true)
    api()
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
        errorHandler(error)
      })
  }

  return (
    <Container>
      <Logo>
        <img src={logoSVG} alt="logo do food explorer" />
        <span>food explorer</span>
      </Logo>

      <main>
        <form onSubmit={handleSubmit(createUser)}>
          <h1>Crie sua conta</h1>
          <div>
            <label htmlFor="name">Nome</label>
            <input placeholder="John Doe" type="text" {...register('name')} />
            {errors.name && (
              <span className="error">{errors.name.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              placeholder="exemplo@exemplo.com.br"
              type="email"
              {...register('email')}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              placeholder="Insira sua senha"
              type="password"
              {...register('password')}
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
          </div>

          <LoadingButton
            type="submit"
            title="Criar conta"
            loading={isLoading}
          />

          <Link to="/">Já tenho uma conta</Link>
        </form>
      </main>
    </Container>
  )
}
