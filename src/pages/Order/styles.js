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
    gap: 5rem;

    > .list-container {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    .payment-container {
      /* border: 1px solid red; */
    }

    @media ${device.laptop} {
      flex-direction: row;

      > .list-container {
        width: 70%;
      }

      .payment-container {
        width: 30%;
        display: flex;
      }
    }
  }
`
