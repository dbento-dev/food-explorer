import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 4.8rem;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  border-radius: 5px;

  padding: 0 1.2rem;

  > select {
    height: 5.6rem;
    width: 100%;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    background-color: transparent;
    border: 0;
    outline: 0;

    option {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
