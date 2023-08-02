import styled from 'styled-components'

export const StButton = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: 0;
  border-radius: 8px;
  gap: 1.6rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .loader {
    width: 18px;
    height: 18px;
    border: 4px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    border-top: 4px solid ${({ theme }) => theme.COLORS.LIGHT_100};

    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
