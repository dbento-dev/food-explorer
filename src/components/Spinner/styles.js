import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4.4rem 1.6rem 1.6rem;
`

export const StSpinner = styled.div`
  width: 4rem;
  height: 4rem;
  border: 4px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  border-color: ${({ theme }) => theme.COLORS.LIGHT_100} transparent
    ${({ theme }) => theme.COLORS.LIGHT_100} transparent;

  border-radius: 50%;
  animation: spin 1.3s ease infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
