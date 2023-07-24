import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const StTitle = styled.span`
  font-size: 3.2rem;
  font-weight: 500;
`

export const PaymentContainer = styled.div`
  width: 100%;
  padding: 0 1.6rem 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StHeader = styled.div`
  width: 100%;
  max-width: 40rem;
  display: flex;
  height: 5.7rem;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  background-color: ${({ theme }) => theme.COLORS.DARK_800};

  > .payment-method {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.6rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    gap: 0.8rem;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    user-select: none;
    cursor: pointer;

    &.active {
      background-color: ${({ theme }) => theme.COLORS.DARK_500};
      border-bottom: 1px solid transparent;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2rem;
    }
  }

  > span:first-child {
    border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-top-left-radius: 8px;
  }

  > span:last-child {
    border-top-right-radius: 8px;
  }
`
export const StPaymentMethod = styled.div`
  width: 100%;
  max-width: 40rem;
  height: 36rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  border-top: none;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.DARK_500};

  > .qr-code {
    width: 22rem;
    height: 22rem;
    display: flex;
    align-items: center;
    justify-content: center;

    > img {
      width: 100%;
      height: 100%;
    }
  }

  > .credit-card-payment {
    width: 100%;
    padding: 1.6rem;

    > form {
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      > .credit-card-number {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;

        > label {
          color: ${({ theme }) => theme.COLORS.LIGHT_400};
          font-family: 'Roboto', sans-serif;
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 400;
        }

        > input {
          width: 100%;
          color: ${({ theme }) => theme.COLORS.LIGHT_500};
          font-family: 'Roboto', sans-serif;
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 400;
          background-color: ${({ theme }) => theme.COLORS.DARK_500};
          padding: 1.2rem 1.4rem;
          border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
          border-radius: 8px;
        }
      }

      > .expiration-date-cvv {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1.6rem;

        > .expiration-date {
          display: flex;
          flex-direction: column;
          width: 70%;

          > label {
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 400;
          }

          > .expiration-date-select {
            width: 100%;
            display: flex;
            gap: 0.8rem;

            > select {
              width: 100%;
              color: ${({ theme }) => theme.COLORS.LIGHT_500};
              font-family: 'Roboto', sans-serif;
              font-size: 1.6rem;
              font-style: normal;
              font-weight: 400;
              background-color: ${({ theme }) => theme.COLORS.DARK_500};
              padding: 1.1rem 0.8rem;
              border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
              border-radius: 8px;
            }
          }
        }

        > .cvv {
          display: flex;
          flex-direction: column;
          width: 30%;

          > label {
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            font-family: 'Roboto', sans-serif;
            font-size: 1.6rem;
            font-style: normal;
            font-weight: 400;
          }

          > .expiration-date-select-input {
            width: 100%;

            > input {
              width: 100%;
              color: ${({ theme }) => theme.COLORS.LIGHT_500};
              font-family: 'Roboto', sans-serif;
              font-size: 1.6rem;
              font-style: normal;
              font-weight: 400;
              background-color: ${({ theme }) => theme.COLORS.DARK_500};
              padding: 1.2rem 1.4rem;
              border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
              border-radius: 8px;
            }
          }
        }
      }

      > button {
        width: 100%;
        margin-top: 1.6rem;
      }
    }
  }
`
