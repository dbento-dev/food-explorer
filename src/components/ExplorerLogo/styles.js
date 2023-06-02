import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 1rem;

  justify-content: center;

  > img {
    width: 2.4rem;
    height: 2.4rem;
  }

  > div {
    display: flex;
    flex-direction: column;

    > span:first-child {
      font-size: 2.1rem;
      font-weight: 700;
      line-height: 2.5rem;
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    /* > span:nth-child(2) {
      font-size: 1.2rem;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      text-align: end;
    } */
  }
`
