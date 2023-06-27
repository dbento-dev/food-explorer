import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 56px 0;
  height: 200px;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
    font-weight: 500;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-bottom: 32px;
  }

  img {
    width: 64px;
    height: 64px;
  }
`
