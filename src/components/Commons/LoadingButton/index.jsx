import { StButton } from './styles'

export function LoadingButton({ title, loading, ...rest }) {
  return (
    <StButton {...rest}>
      {loading ? <div className="loader"></div> : title}
    </StButton>
  )
}
