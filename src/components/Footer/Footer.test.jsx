// import { render } from '@testing-library/react'
import { render } from '../../tests/utils/wrapperProviders'
import { Footer } from '.'

describe('Footer', () => {
  it('should render', () => {
    const { getByText, getByAltText } = render(<Footer />)

    expect(getByAltText('logo do food explorer')).toBeInTheDocument()
    expect(getByText('food explorer')).toBeInTheDocument()
    expect(
      getByText('© 2023 - Todos os direitos reservados.')
    ).toBeInTheDocument()
  })
})
