import styled from 'styled-components'
import { device } from '../../styles/theme'

export const Container = styled.div`
  width: 21rem;
  height: 29rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  overflow: hidden;

  > div {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding: 2.4rem;
    gap: 1.2rem;

    align-items: center;
    justify-content: center;

    border-radius: 8px;

    position: relative;

    > svg {
      font-size: 2.2rem;
      position: absolute;
      top: 2.4rem;
      right: 2.4rem;

      &:hover {
        cursor: pointer;
      }

      &[class*='is-favorite'] {
        fill: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    img {
      width: 8.8rem;
      height: 8.8rem;

      border-radius: 50%;

      &:hover {
        cursor: pointer;
      }
    }

    > #tooltip {
      position: relative;

      > #card-name {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 1.4rem;
        font-weight: 500;
        text-align: center;
      }

      > #tooltip-name {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        background-color: ${({ theme }) => theme.COLORS.DARK_1000};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        padding: 1rem 1.5rem;
        border-radius: 8px;

        visibility: hidden;
        opacity: 0;
        transition: opacity 0.5s ease;
        display: flex;
        align-items: center;
        width: 100%;
      }

      > #tooltip-name::before {
        content: '';
        position: absolute;
        right: 50%;
        top: -3rem;
        transform: translateX(-50%);
        border: 1.5rem solid;
        border-color: ${({ theme }) => theme.COLORS.DARK_1000} transparent
          transparent transparent;
        rotate: calc(180deg);
      }

      &:hover {
        > #tooltip-name {
          visibility: visible;
          opacity: 1;
          top: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    #card-title {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 1.4rem;
      font-weight: 500;
      text-align: center;
    }

    #card-description {
      display: none;
    }

    #card-price {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      font-size: 1.6rem;
      font-weight: 400;
      text-align: center;
    }

    > .card-buttons {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.6rem;

      #counter-buttons {
        width: 100%;
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

      > button {
        width: 100%;
        height: 3.2rem;
      }
    }
  }

  @media ${device.laptop} {
    width: 30rem;
    height: 46rem;

    > div {
      > svg {
        font-size: 2.4rem;
      }

      img {
        width: 17.6rem;
        height: 17.6rem;
      }

      > #tooltip {
        position: relative;

        > #card-name {
          font-size: 2.2rem;
          font-weight: 700;
        }

        > #tooltip-name {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          background-color: ${({ theme }) => theme.COLORS.DARK_1000};
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          padding: 1rem 1.5rem;
          border-radius: 8px;

          visibility: hidden;
          opacity: 0;
          transition: opacity 0.5s ease;
          display: flex;
          align-items: center;
          width: 100%;
        }

        > #tooltip-name::before {
          content: '';
          position: absolute;
          right: 50%;
          top: -3rem;
          transform: translateX(-50%);
          border: 1.5rem solid;
          border-color: ${({ theme }) => theme.COLORS.DARK_1000} transparent
            transparent transparent;
          rotate: calc(180deg);
        }

        &:hover {
          > #tooltip-name {
            visibility: visible;
            opacity: 1;
            top: 45px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }

      #card-description {
        display: block;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 1.4rem;
        font-weight: 400;
        text-align: center;
      }

      #card-price {
        color: ${({ theme }) => theme.COLORS.BLUE_100};
        font-size: 3.2rem;
        font-weight: 400;
        text-align: center;
      }

      > .card-buttons {
        flex-direction: row;

        #counter-buttons {
          > svg {
            font-size: 3.2rem;
          }
          > span {
            font-size: 2rem;
            font-weight: 700;
          }
        }

        > button {
          width: 100%;
          height: 4.8rem;
        }
      }
    }
  }
`
