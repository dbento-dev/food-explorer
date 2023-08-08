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

export const StList = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;

  .order-item-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }

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
`
export const StTotal = styled.span`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-size: 2rem;
  font-weight: 500;
  padding: 1.2rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

  @media ${device.laptop} {
    border-bottom: none;
    font-size: 2.6rem;
  }
`
