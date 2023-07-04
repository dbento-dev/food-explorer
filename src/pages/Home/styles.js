import styled from 'styled-components'
import { device } from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-rows: 9rem auto;

  grid-template-areas:
    'header'
    'content';

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
`

export const Banner = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  position: relative;
  background: transparent;
  align-items: center;

  > .imgBanner {
    width: 25rem;
    height: 15.4rem;
    position: absolute;
    bottom: 0;
    left: -1.6rem;
    overflow: hidden;

    > img {
      width: 100%;
      filter: brightness(1.3);
    }
  }

  > .textBanner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    gap: 0.3rem;
    background: ${({ theme }) => theme.COLORS.GRADIENT_200};
    border-radius: 8px;
    padding: 0 2.4rem;

    > .infoBanner {
      width: 100%;

      h1 {
        font-size: 1.8rem;
        font-weight: 600;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        display: flex;
        justify-content: flex-end;
      }

      p {
        font-size: 1.2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        display: flex;
        justify-content: flex-end;
      }
    }
  }

  @media ${device.laptop} {
    height: 38rem;

    > .imgBanner {
      width: 50rem;
      height: 34rem;
      bottom: 6rem;
    }

    > .textBanner {
      width: 100%;
      height: 26rem;

      > .infoBanner {
        h1 {
          font-size: 4rem;
          font-weight: 500;
        }

        p {
          font-size: 1.6rem;
          font-weight: 400;
        }
      }
    }
  }
`
