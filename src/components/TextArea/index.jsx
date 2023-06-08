import { Container, StTextArea } from './styles'

export function TextArea({ value, label, ...rest }) {
  return (
    <Container>
      {label && <label htmlFor="textArea">{label}</label>}

      <StTextArea name="textArea" {...rest} value={value} />
    </Container>
  )
}
