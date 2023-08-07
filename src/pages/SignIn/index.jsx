import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Container, Logo } from './styles'
import logoSVG from '../../assets/logo.svg'
import { LoadingButton } from '../../components/Commons/LoadingButton'

import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const { signIn, isLoading } = useAuth()
  const navigate = useNavigate()

  const handleSignIn = async (data) => {
    const { email, password } = data

    await signIn({
      email,
      password
    }).then(() => {
      navigate('/')
    })
  }

  const signInFormSchema = z.object({
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
    resolver: zodResolver(signInFormSchema)
  })

  return (
    <Container>
      <Logo>
        <img src={logoSVG} alt="logo do food explorer" />
        <span>food explorer</span>
      </Logo>

      <main>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <h1>Faça login</h1>
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

          <LoadingButton type="submit" title="Entrar" loading={isLoading} />

          <Link to="/register">Criar uma conta</Link>
        </form>
      </main>
    </Container>
  )
}
