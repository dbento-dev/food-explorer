import styled from 'styled-components'
import { device } from '../../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const StTitle = styled.span`
  font-size: 3.2rem;
  font-weight: 500;
`

export const StList = styled.ul`
  width: 100%;
  overflow-x: auto;

  > .empty {
    width: 100%;
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 1px dashed ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 6px;

    > svg {
      font-size: 6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  > li {
    list-style: none;
  }
`
export const StTotal = styled.span`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 2rem;
  font-weight: 500;
  padding: 1.2rem 0;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-right: none;
  border-left: none;

  @media ${device.laptop} {
    border-bottom: none;
  }
`
