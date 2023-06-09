import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
  background: none;
  border: none;
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  display: flex;
  align-items: center;
  justify-content: flex-start;

  > svg {
    font-size: 32px;
  }
`
