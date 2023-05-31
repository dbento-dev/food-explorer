import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;

  gap: 16px;

  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: 0;
  border-radius: 5px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
