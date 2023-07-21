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
    padding: 3.2rem 1.6rem 1.6rem;
    gap: 7.5rem;

    > .list-container {
      width: 100%;
    }
    .payment-container {
      display: none;
    }

    @media ${device.laptop} {
      > .list-container {
        width: 65%;
      }

      .payment-container {
        display: flex;
        width: 35%;
      }
    }
  }
`
