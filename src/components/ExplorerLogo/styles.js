import { styled } from 'styled-components'
import { device } from '../../styles/theme'

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
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;

    > span:first-child {
      font-size: 2.1rem;
      font-weight: 700;
      line-height: 2.5rem;
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > span:nth-child(2) {
      font-size: 1.2rem;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.BLUE_100};
    }
  }

  @media ${device.laptop} {
    > div {
      flex-direction: column;
      align-items: end;
    }

    > span:nth-child(2) {
      text-align: end;
    }
  }
`
