import styled from 'styled-components'

export const Container = styled.section`
  margin: 3.6rem 0 2.8rem;

  > h2 {
    font-size: 1.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin-bottom: 2.4rem;
  }
`
