// import { render } from '@testing-library/react'
import { render } from '../../tests/utils/wrapperProviders'
import { Footer } from '.'

describe('Footer', () => {
  it('should render', () => {
    const { getByText } = render(<Footer />)

    expect(getByText('food explorer')).toBeInTheDocument()
  })
})
