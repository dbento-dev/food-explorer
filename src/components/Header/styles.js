import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  height: 9rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  gap: 3.2rem;

  > .search-input {
    display: none;
  }

  > .receipt-button {
    display: none;
  }

  > .logout-button {
    display: none;
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;

    > .menu {
      display: none;
    }

    > .logo {
      display: flex;
      width: 20%;
    }

    > .search-input {
      display: flex;
      width: 50%;
    }

    > .receipt-button {
      display: flex;
      width: 15%;
    }

    > .receipt-icon {
      display: none;
    }

    > .logout-button {
      width: 3.2rem;
      display: flex;
    }
  }
`

export const Menu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: none;

  > svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

export const ReceiptIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: none;

  > img {
    width: 2.2rem;
    height: 2.2rem;
  }
`
