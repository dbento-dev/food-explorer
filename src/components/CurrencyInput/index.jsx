import { Container } from './styles'

export function CurrencyInput({ value, setValue }) {
  const prefix = 'R$ '
  function handleChange(e) {
    let value = e.target.value

    value = value.replace(/\D/g, '')

    value = value.replace(/(\d)(\d{2})$/, '$1,$2')
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.')

    setValue(value)
    return value
  }

  return (
    <Container>
      {value && <span>{prefix}</span>}
      <input
        value={value}
        placeholder="R$ 0,00"
        onChange={(e) => handleChange(e)}
      />
    </Container>
  )
}
