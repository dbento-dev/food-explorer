import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 7.5rem;
  padding: 0 2rem;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  > div {
    display: flex;
    gap: 1rem;
    align-items: center;

    > img {
      width: 2.2rem;
      height: 2.2rem;
    }

    > span {
      font-size: 1.6rem;
      font-weight: 700;
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }
`
