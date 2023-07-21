import { Container } from './styles'

export function LoadingButton({ title, currentItemLoading, ...rest }) {
  const { data } = rest
  const isRecipeLoading = (recipeLoadingArray, recipeId) =>
    recipeLoadingArray?.includes(recipeId)

  return (
    <Container {...rest}>
      <button type="button">
        {isRecipeLoading(currentItemLoading, data?.id) ? (
          <div className="loader"></div>
        ) : (
          title
        )}
      </button>
    </Container>
  )
}
