import styled from 'styled-components'
import { device } from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 9rem auto 7.5rem;
  grid-template-areas:
    'header'
    'content'
    'footer';

  > main {
    width: 100%;
    grid-area: content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    margin-bottom: 1.6rem;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 138rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 4.4rem 1.6rem 1.6rem;
  gap: 1.6rem;

  > h1 {
    font-size: 3.2rem;
    font-weight: 500;
  }

  > .card-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  @media ${device.mobileL} {
    > .card-list {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`

export const FavoriteCard = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.6rem 0;
  word-wrap: break-word;

  > img {
    width: 6.5rem;
    height: 6.5rem;
    border-radius: 50%;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }

  > div {
    display: flex;
    flex-direction: column;

    span:first-child {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 1.4rem;
      font-weight: 500;
    }

    > div {
      span:last-child {
        color: ${({ theme }) => theme.COLORS.RED_400};
        font-family: 'Roboto', sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
        cursor: pointer;
      }
    }
  }

  @media ${device.mobileL} {
    width: 32rem;

    > img {
      width: 8rem;
      height: 8rem;
    }

    > div {
      span:first-child {
        font-size: 1.6rem;
      }

      > div {
        span:last-child {
          font-size: 1.4rem;
        }
      }
    }
  }
`
