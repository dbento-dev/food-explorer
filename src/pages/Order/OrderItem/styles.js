import styled from 'styled-components'
import { device } from '../../../styles/theme'

export const Container = styled.div`
  width: 100%;
  max-width: 50rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  > img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
  }

  > .item-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;

    > .item-info {
      display: flex;
      flex-direction: column;
      align-items: center;

      > span {
        font-size: 1.4rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        line-height: 2.8rem;
      }

      .counter-buttons {
        display: flex;
        align-items: center;
        gap: 1rem;

        > span {
          font-size: 1.6rem;
          font-weight: 600;
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        > svg {
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          font-size: 2rem;

          &:hover {
            cursor: pointer;
          }
        }
      }

      > .price-container {
        display: flex;
        align-items: center;
        gap: 1rem;

        > span {
          font-size: 1.2rem;
          font-weight: 600;
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
    }

    > .removeButton {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      > span {
        font-size: 1.4rem;
        font-weight: 600;
        color: ${({ theme }) => theme.COLORS.RED_400};
        font-family: 'Roboto';

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  @media ${device.mobileL} {
    > img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    > .item-container {
      > .item-info {
        > span {
          font-size: 1.6rem;
        }

        .counter-buttons {
          > span {
            font-size: 1.8rem;
          }

          > svg {
            font-size: 2.2rem;
          }
        }
      }

      > .removeButton {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        > span {
          font-size: 1.4rem;
          font-weight: 600;
          color: ${({ theme }) => theme.COLORS.RED_400};
          font-family: 'Roboto';

          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`
