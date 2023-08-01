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
    margin-bottom: 1.6rem;

    > .content {
      width: 100%;
      max-width: 138rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 4.4rem 1.6rem 1.6rem;
      gap: 1.6rem;

      > .list-container {
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      @media ${device.laptop} {
        width: 100%;
        flex-direction: row;
        max-width: 138rem;

        > .list-container {
          width: 55%;
        }

        .payment-container {
          width: 45%;
          display: flex;
        }
      }
    }
  }
`
