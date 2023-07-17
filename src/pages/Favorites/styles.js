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
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding: 3.2rem 1.6rem 1.6rem;

    > h1 {
      font-size: 3.2rem;
      font-weight: 500;
    }
  }
`

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  overflow: auto;

  @media ${device.laptop} {
    > .card-list {
      padding: 0;
      margin: 0;
      display: flex;
      gap: 3.2rem;
      list-style: none;
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
    width: 9rem;
    height: 9rem;
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
      font-size: 2rem;
      font-weight: 500;
    }

    span:last-child {
      color: ${({ theme }) => theme.COLORS.RED_400};
      font-family: 'Roboto', sans-serif;
      font-size: 1.2rem;
      font-weight: 400;
      cursor: pointer;
    }
  }

  @media ${device.laptop} {
    width: 32rem;
  }
`