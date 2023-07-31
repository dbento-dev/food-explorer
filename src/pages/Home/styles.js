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

  overflow: hidden;

  > main {
    width: 100%;
    grid-area: content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 138rem;
  height: 100%;
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
    position: absolute;
    width: 15rem;
    height: 15rem;
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
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

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

  @media ${device.mobileL} {
    height: 14rem;

    > .imgBanner {
      width: 20rem;
      height: 16rem;
    }

    > .textBanner {
      > .infoBanner {
        width: 50%;
      }
    }
  }

  @media ${device.tablet} {
    height: 16rem;

    > .imgBanner {
      width: 30rem;
      height: 19rem;
    }

    > .textBanner {
      > .infoBanner {
        width: 40%;

        h1 {
          font-size: 2rem;
        }
      }
    }
  }
  @media ${device.laptop} {
    height: 20rem;

    > .imgBanner {
      width: 40rem;
      height: 22rem;
    }

    > .textBanner {
      > .infoBanner {
        width: 50%;

        h1 {
          font-size: 4rem;
        }

        p {
          font-size: 1.4rem;
        }
      }
    }
  }

  @media ${device.laptopL} {
    height: 20rem;

    > .imgBanner {
      width: 40rem;
      height: 22rem;
    }

    > .textBanner {
      > .infoBanner {
        width: 40%;

        h1 {
          font-size: 4rem;
        }

        p {
          font-size: 1.4rem;
        }
      }
    }
  }

  @media ${device.desktop} {
    height: 30rem;

    > .imgBanner {
      width: 60rem;
      height: 32rem;
    }

    > .textBanner {
      > .infoBanner {
        width: 30%;

        h1 {
          font-size: 6rem;
        }

        p {
          font-size: 2rem;
        }
      }
    }
  }
`

export const StDetails = styled.div`
  /* width: 100%; */
  /* height: calc(100% - 12rem); */
  /* border: 1px solid red; */

  /* @media ${device.laptop} {
    border: 1px solid red;
    height: calc(100% - 38rem);
  } */
`
