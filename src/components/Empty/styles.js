import styled from 'styled-components'
import { device } from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.6rem 0;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 2.6rem;
    font-weight: 500;
    margin-bottom: 16px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;
  }

  img {
    width: 64px;
    height: 64px;
  }

  @media ${device.laptop} {
    h1 {
      font-size: 3.6rem;
    }

    img {
      width: 74px;
      height: 74px;
    }
  }
`
