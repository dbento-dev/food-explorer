import styled from 'styled-components'

import { device } from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;

  @media ${device.laptop} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0;
  }
`

export const Logo = styled.div`
  width: 100%;
  height: 4.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  > img {
    width: 4rem;
    height: 4rem;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Roboto', sans-serif;
    font-size: 3.7rem;
    font-weight: 700;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 1.6rem;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    height: 100%;
    padding: 2.6rem 1.6rem;
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
      margin-top: 2.2rem;
      margin-bottom: 0.8rem;
    }

    > .register-button {
      margin-top: 2.2rem;
    }

    > a {
      margin-top: 2.2rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      align-self: center;
    }
  }

  @media ${device.mobileL} {
    > div {
      width: 100%;
      max-width: 42.5rem;
      padding: 2.6rem 2.6rem;
    }
  }

  @media ${device.laptop} {
    > div {
      width: 100%;
      max-width: 42.5rem;
      padding: 4.6rem 3.6rem;

      > h1 {
        font-size: 2.6rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        align-self: center;
      }
    }
  }
`
