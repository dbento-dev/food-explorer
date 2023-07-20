import styled from 'styled-components'

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
    gap: 1.6rem;

    > .list-container {
      width: 40%;
    }
    .payment-container {
      width: 60%;
    }
  }
`
