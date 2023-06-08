import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.LIGHT_600};

  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none'};

  border-radius: 8px;
  padding-right: 1.6rem;

  input {
    width: 100%;
    height: 3.2rem;

    padding: 0.8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 1.4rem;
    }
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`
