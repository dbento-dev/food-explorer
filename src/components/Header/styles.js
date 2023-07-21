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

  > #small-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    > #menu-logo {
      width: 100%;
    }

    > #menu-logo[class*='search-open'] {
      display: none;
    }
  }

  > #large-header {
    display: none;
  }

  > .overlay {
    width: 100%;
    height: 0;
    z-index: 9;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    transition: all 0.5s;

    > .overlay-content {
      position: relative;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      background-color: ${({ theme }) => theme.COLORS.DARK_400};

      > .menu-header {
        width: 100%;
        height: 9rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 3.2rem;
        gap: 3.2rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_700};

        > .menu {
          display: flex;
          align-items: center;
          gap: 1.6rem;

          span {
            font-size: 2.1rem;
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            cursor: default;
          }
        }
        > .logout-button {
          width: 3.2rem;
          display: flex;
        }
      }

      > .menu-content {
        display: flex;
        flex-direction: column;
        margin: 0 3.2rem 0;

        > .menu-buttons {
          margin-top: 3.6rem;

          #add-dish-button {
            font-weight: 300;
            padding: 1rem;
          }

          .divider {
            width: 100%;
            border-top: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
          }
        }
      }
    }
  }

  > .overlay.active {
    width: 100%;
    height: 100vh;
    z-index: 9;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    transition: all 0.5s;
  }

  @media (min-width: 1024px) {
    > #small-header {
      display: none;
    }

    > .menu-button {
      display: none;
    }
    > .receipt-icon {
      display: none;
    }

    > .favorite-icon {
      display: none;
    }

    > #large-header {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 3.2rem;

      > #menu-logo {
        display: flex;
        width: 30rem;

        > div {
          display: flex;
          justify-content: flex-start;
        }
      }

      > .search-input {
        display: flex;
        width: 100%;
      }

      > #input-box {
        display: none;
      }

      > .receipt-button {
        display: flex;
        width: 30rem;
      }

      > .favorite-button {
        display: flex;
      }

      > .logout-button {
        width: 3.2rem;
        display: flex;
      }
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
  position: relative;

  > img {
    width: 2.2rem;
    height: 2.2rem;
  }

  > span {
    width: 2rem;
    height: 2rem;
    background-color: ${({ theme }) => theme.COLORS.RED_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 500;
    position: absolute;
    top: -9px;
    right: -9px;
  }
`
export const FavoriteIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: none;
  cursor: pointer;

  > svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
