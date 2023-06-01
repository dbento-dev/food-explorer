import styled from 'styled-components'

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
    overflow-y: auto;
  }
`

export const Content = styled.div`
  padding: 4.4rem 1.6rem 1.6rem;

  > button:first-child {
    align-self: flex-start;
    font-weight: 500;
    font-size: 2rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 4.7rem;
    align-items: center;

    img {
      width: 26.4rem;
      height: 26.4rem;
    }

    div {
      display: flex;
      gap: 1.6rem;

      flex-direction: column;
      text-align: center;

      h2 {
        text-align: center;
        font-size: 2.7rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      p {
        font-size: 1.6rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1.6rem;
        flex-wrap: wrap;
      }

      > div:last-child {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1.6rem;
        justify-content: center;

        margin-top: 2rem;

        > svg {
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
          font-size: 2.4rem;

          &:hover {
            cursor: pointer;
          }
        }

        > span {
          font-family: 'Roboto', sans-serif;
          font-size: 2rem;
          font-weight: 700;
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        > button {
          width: 18.8rem;
          height: 3.8rem;
        }
      }
    }
  }
`
