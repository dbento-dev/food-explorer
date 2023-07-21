import { Container } from './styles'

export function LoadingButton({ title, currentItemLoading, ...rest }) {
  const { data } = rest
  const isStoreLoading = (recipeLoadingArray, recipeId) =>
    recipeLoadingArray?.includes(recipeId)

  return (
    <Container {...rest}>
      <button type="button">
        {isStoreLoading(currentItemLoading, data?.id) ? (
          <div className="loader"></div>
        ) : (
          title
        )}
      </button>
    </Container>
  )
}
