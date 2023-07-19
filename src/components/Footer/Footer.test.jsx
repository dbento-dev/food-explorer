// import { render } from '@testing-library/react'
import { render } from '../../tests/utils/wrapperProviders'
import { Footer } from '.'

const Wrapper = () => {
  return <Footer data-testid="footer" />
}

const setup = () => {
  const wrapper = render(<Wrapper />)
  const footer = wrapper.getByTestId('footer')
  return { footer, ...wrapper }
}

describe('<Footer />', () => {
  it('should render', () => {
    const { getByTestId } = setup()

    expect(getByTestId('footer')).toBeInTheDocument()
  })

  it('should have logo, title and copyright', () => {
    const { getByText, getByAltText } = setup()

    expect(getByAltText('logo do food explorer')).toBeInTheDocument()
    expect(getByText('food explorer')).toBeInTheDocument()
    expect(
      getByText('© 2023 - Todos os direitos reservados.')
    ).toBeInTheDocument()
  })
})
