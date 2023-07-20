import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.6rem 0;

  > img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;
      gap: 1.6rem;

      span:first-child {
        font-size: 2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        line-height: 2.8rem;
      }

      span:nth-child(3) {
        font-size: 1.2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-family: 'Roboto';
      }

      span:last-child {
        font-size: 1.2rem;
        font-weight: 600;

        color: ${({ theme }) => theme.COLORS.BLUE_100};
        font-family: 'Roboto';
      }

      #counter-buttons {
        display: flex;
        align-items: center;
        gap: 1.6rem;
      }
    }

    .removeButton {
      font-size: 1.2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.RED_400};
      font-family: 'Roboto';
      cursor: pointer;
    }
  }
`
