import styled from 'styled-components'
import { device } from '../../styles/theme'

export const Container = styled.div`
  width: 21rem;
  height: 29rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  > div {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    padding: 2.4rem;
    gap: 1.6rem;

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
    }

    img {
      width: 8.8rem;
      height: 8.8rem;

      border-radius: 50%;

      &:hover {
        cursor: pointer;
      }
    }

    h2 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 1.4rem;
      font-weight: 500;
      text-align: center;
    }

    p {
      display: none;
    }

    @media ${device.laptop} {
      p {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        display: block;
      }
    }

    span {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      font-size: 1.6rem;
      font-weight: 400;
      text-align: center;
    }

    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.6rem;

      /* gap: 18px; */
      > .counterControl {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.4rem;

        > svg {
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          font-size: 1.8rem;

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
`
