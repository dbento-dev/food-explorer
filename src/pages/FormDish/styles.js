import styled from 'styled-components'
import { device } from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 9rem auto 7.5rem;
  grid-template-areas:
    'header'
    'content'
    'footer';

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  > footer {
    grid-area: footer;
    display: flex;
  }
`
export const Content = styled.div`
  padding: 1.6rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 138rem;

  > button:first-child {
    align-self: flex-start;
    font-weight: 500;
    font-size: 2rem;
  }

  > h2 {
    font-size: 3.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-top: 2.4rem;
  }

  @media ${device.laptop} {
    > button:first-child {
      font-weight: 700;
      font-size: 2.4rem;
    }
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 3.8rem auto;
  gap: 1.6rem;

  > .row {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    > .dish-photo {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      > span {
        display: none;
      }

      > label {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 4.8rem;
        width: 100%;

        border-radius: 5px;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        cursor: pointer;

        svg {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }

  > .form-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    > label {
      margin-bottom: 0.5rem;
    }

    > input {
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      width: 100%;
      max-width: 40rem;
    }
  }

  .ingredients-list {
    display: flex;
    flex-direction: column;
  }

  .ingredients {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    gap: 0.8rem;
    border-radius: 5px;

    padding: 0.7rem 1.2rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    > div {
      width: 100%;
    }
  }

  > button {
    width: 100%;
  }

  @media ${device.laptop} {
    > .row {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;

      > .dish-photo {
        position: relative;
        width: 15%;

        > span {
          display: block;
        }
      }

      > .name {
        width: 65%;
      }

      > .category {
        width: 20%;
      }

      > .ingredients-list {
        width: 80%;
      }

      > .price {
        width: 20%;
      }

      > .description {
        width: 100%;
      }
    }

    > .form-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;

      > label {
        margin-bottom: 0.5rem;
      }

      > input {
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        width: 100%;
        max-width: 40rem;
      }
    }

    .ingredients-list {
      display: flex;
      flex-direction: column;
    }

    .ingredients {
      > div {
        width: auto;
      }
    }

    > button {
      width: 17.5rem;
      align-self: flex-end;
    }
  }
`

export const Avatar = styled.div`
  position: relative;

  width: 14rem;
  height: 14rem;
  border-radius: 50%;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: -7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`
