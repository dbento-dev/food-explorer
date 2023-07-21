import styled from 'styled-components'
import { device } from '../../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.6rem;

  > img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;

    > div {
      display: flex;
      align-items: center;
      gap: 1rem;

      > span:first-child {
        font-size: 1.6rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        line-height: 2.8rem;
      }

      #counter-buttons {
        display: flex;
        align-items: center;
        gap: 1rem;

        > span {
          font-size: 1.4rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        > svg {
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          font-size: 1.6rem;

          &:hover {
            cursor: pointer;
          }
        }
      }

      > .price {
        font-size: 1.2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: 'Roboto';
      }

      > span:last-child {
        font-size: 1.2rem;
        font-weight: 600;
        color: ${({ theme }) => theme.COLORS.BLUE_100};
        font-family: 'Roboto';
      }
    }

    .removeButton {
      font-size: 1.2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.RED_400};
      font-family: 'Roboto';
      cursor: pointer;
    }
  }

  @media ${device.tablet} {
    > img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    > div {
      > div {
        display: flex;
        align-items: center;
        gap: 1.6rem;

        > span:first-child {
          font-size: 2rem;
        }

        #counter-buttons {
          gap: 1.6rem;

          > span {
            font-size: 1.6rem;
          }

          > svg {
            font-size: 1.8rem;
          }
        }
        > .price {
          font-size: 1.6rem;
        }

        > span:last-child {
          font-size: 1.6rem;
        }
      }
    }
  }
`
