import styled from 'styled-components'

import foodExplorerLogoSVG from '../../assets/food-explorer-logo.svg'
import { device } from '../../styles/theme'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;

  @media ${device.laptop} {
    flex-direction: row;
    flex-direction: row;
    align-items: stretch;
    gap: 0;
  }
`

export const Background = styled.div`
  background: url(${foodExplorerLogoSVG}) no-repeat center center;
  height: 10rem;

  @media ${device.laptop} {
    flex: 1;
    height: 100vh;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4.7rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    height: 100%;
    padding: 6.4rem;
    border-radius: 1.6rem;

    > h1 {
      font-size: 2.2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      align-self: center;
    }

    > label {
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      margin-top: 3.2rem;
      margin-bottom: 0.8rem;
    }

    > button {
      margin-top: 3.2rem;
    }

    > a {
      margin-top: 3.2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      align-self: center;
    }
  }

  @media ${device.laptop} {
    > div {
      height: 65rem;

      > h1 {
        font-size: 3.2rem;
      }
    }
  }
`
