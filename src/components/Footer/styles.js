import styled from 'styled-components'

import { device } from '../../styles/theme'

export const Container = styled.footer`
  grid-area: footer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 7.5rem;
  padding: 0 2rem;

  background: ${({ theme }) => theme.COLORS.DARK_600};

  > .content {
    width: 100%;
    max-width: 138rem;
    justify-content: space-between;

    display: flex;
    align-items: center;

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
        font-style: normal;
      }
    }

    p {
      font-size: 1.2rem;
      font-weight: 400;
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }
  }

  @media ${device.laptop} {
    > .content {
      > div {
        > img {
          width: 2.8rem;
          height: 2.8rem;
        }
        > span {
          font-size: 2rem;
        }
        > p {
          font-size: 1.4rem;
        }
      }
    }
  }
`
