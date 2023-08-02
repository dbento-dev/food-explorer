import styled from 'styled-components'

import { device } from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
  padding: 2.6rem 1.6rem;

  > main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2.6rem 1.6rem;

    > form {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2.2rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      padding: 2.6rem 1.6rem;
      border-radius: 1.6rem;

      > h1 {
        font-size: 2.2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        align-self: center;
      }

      > div {
        width: 100%;
        display: flex;
        flex-direction: column;

        > label {
          font-family: 'Roboto', sans-serif;
          font-size: 1.6rem;
          font-weight: 400;
          color: ${({ theme }) => theme.COLORS.LIGHT_400};
          margin-bottom: 0.8rem;
        }

        > input {
          height: 48px;
          width: 100%;
          padding: 12px;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          background-color: ${({ theme }) => theme.COLORS.DARK_900};
          border-radius: 8px;
          border: 0;

          &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
          }
        }

        > .error {
          color: ${({ theme }) => theme.COLORS.RED_400};
          font-size: 1.2rem;
        }
      }

      > .button-container {
        width: 100%;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        border-radius: 8px;

        button {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;

          background-color: ${({ theme }) => theme.COLORS.RED_100};

          color: ${({ theme }) => theme.COLORS.LIGHT_100};

          border: 0;
          border-radius: 8px;
          gap: 1.6rem;

          &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        }
      }

      > a {
        margin-top: 1.6rem;
        font-size: 1.4rem;
        align-self: center;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      @media ${device.laptop} {
        width: 100%;
        max-width: 47.2rem;
        padding: 4.6rem 3.6rem;

        > h1 {
          font-size: 2.6rem;
          font-weight: 500;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          align-self: center;
        }
      }
    }
  }

  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0;

    > main {
      width: 100%;
    }
  }

  @media ${device.laptop} {
    padding: 9rem 10.8rem;

    > main {
      max-width: 47.2rem;

      > form {
        > div {
          > .error {
            color: ${({ theme }) => theme.COLORS.RED_400};
            font-size: 1.4rem;
          }
        }
      }
    }
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
