import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-rows: 9rem auto;

  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;

    padding: 4.4rem 0px 0px;
    border: 1px solid red;
  }
`

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  padding: 0 1.6rem;
`

export const Banner = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  justify-content: space-between;

  position: relative;
  background: ${({ theme }) => theme.COLORS.GRADIENT_200};
  border-radius: 8px;

  > img {
    position: absolute;
    left: -2rem;
    top: -3rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 21.5rem;
    justify-content: end;
    position: absolute;
    right: 0;

    h1 {
      font-size: 1.8rem;
      font-weight: 600;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p {
      font-size: 1.2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: 'Roboto', sans-serif;
    }
  }
`
