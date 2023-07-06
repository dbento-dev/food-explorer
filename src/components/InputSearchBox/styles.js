import styled from 'styled-components'

export const InputBox = styled.div`
  position: relative;
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  max-width: 60px;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 6px;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  > input {
    width: 100%;
    height: 100%;
    padding: 0 1.6rem;
    outline: none;
    border: 0;
    border-radius: 6px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  > #input-box-search {
    width: 60px;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;

    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    > svg {
      font-size: 2rem;
      transform: rotate(90deg);
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    > svg:hover {
      cursor: pointer;
    }
  }

  > #search-button-close {
    width: 60px;
    position: absolute;
    top: 50%;
    right: -45px;
    transform: translateY(-50%);
    font-size: 3.2rem;
    padding: 5px;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    opacity: 0;
    pointer-events: none;
  }

  &[class*='open'] {
    max-width: 400px;

    > input {
      padding: 0 1.6rem 0 6.5rem;
    }

    > #input-box-search {
      border-radius: 6px 0 0 6px;

      > svg {
        transform: rotate(0deg);
        transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
    }

    > #search-button-close {
      transform: translateY(-50%) rotate(180deg);
      opacity: 1;
      pointer-events: auto;
    }

    > #search-button-close:hover {
      cursor: pointer;
    }
  }
`
