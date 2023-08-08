import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 5.6rem 0;
  height: 20rem;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 3.8rem;
    font-weight: 500;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  img {
    width: 64px;
    height: 64px;
  }
`
