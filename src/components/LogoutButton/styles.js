import { styled } from 'styled-components'

export const Logout = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: none;

  > svg {
    font-size: 22px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`
