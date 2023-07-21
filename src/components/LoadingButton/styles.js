import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  > button {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;

    background-color: ${({ theme, buttontype }) =>
      buttontype === 'primary' ? theme.COLORS.RED_100 : theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: 0;
    border-radius: 5px;
    gap: 1.6rem;
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
