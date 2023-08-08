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
    overflow-y: auto;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 138rem;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: center;
  margin: 0 auto;

  > button:first-child {
    align-self: flex-start;
    font-weight: 500;
    font-size: 2rem;
  }

  > .dish {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;

    > .dishImage {
      img {
        width: 26.4rem;
        height: 26.4rem;
        border-radius: 50%;
      }
    }

    > .dishDetails {
      width: 100%;
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

      > .card-buttons {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1.6rem;
        margin-top: 1.6rem;

        #counter-buttons {
          max-width: 13rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.4rem;

          > svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-size: 2.4rem;

            &:hover {
              cursor: pointer;
            }
          }
          > span {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-size: 1.6rem;
          }
        }

        > div:last-child {
          width: 100%;
          max-width: 15rem;
        }
      }
    }
  }

  @media ${device.laptop} {
    > button:first-child {
      align-self: flex-start;
      font-weight: 700;
      font-size: 2.4rem;
      margin-bottom: 4rem;
    }

    > .dish {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 3rem;
      margin-top: 1.6rem;

      .dishImage {
        img {
          width: 35rem;
          height: 35rem;
        }
      }

      .dishDetails {
        display: flex;
        gap: 1.6rem;
        flex-direction: column;
        text-align: center;
        align-items: flex-start;

        h2 {
          text-align: center;
          font-size: 4rem;
          font-weight: 500;
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        p {
          font-size: 2.2rem;
          font-weight: 400;
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
          text-align: left;
        }

        > div {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 1.6rem;
          flex-wrap: wrap;
        }

        > .card-buttons {
          justify-content: flex-start;

          #counter-buttons {
            justify-content: flex-start;
          }

          > div:last-child {
            max-width: 18rem;
          }
        }
      }
    }
  }
`
