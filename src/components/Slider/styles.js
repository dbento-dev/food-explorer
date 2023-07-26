import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  > .carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    gap: 2.7rem;

    &::-webkit-scrollbar {
      display: none;
    }

    .item {
      flex: none;
    }
  }

  > .btn-left-control,
  .btn-right-control {
    position: absolute;
    z-index: 5;

    /* top: 0; */
    left: 0;
    right: auto;
    /* bottom: 0; */

    background-color: transparent;
    border: none;
    cursor: pointer;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: linear-gradient(to left, transparent 0%, black 200%);
    opacity: 0.1;
    transition: all 500ms ease-in-out;

    display: flex;
    align-items: center;

    border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_200};
    border-radius: 50%;

    &:hover {
      opacity: 1;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
    }
  }

  > .btn-right-control {
    left: auto;
    right: 0;

    background: linear-gradient(to right, transparent 0%, black 200%);
  }
`
