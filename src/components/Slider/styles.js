import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

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

  > .btn-left,
  .btn-right {
    position: absolute;
    z-index: 5;

    top: 0;
    left: 0;
    right: auto;
    bottom: 0;

    background-color: transparent;
    border: none;
    cursor: pointer;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: linear-gradient(to left, transparent 0%, black 200%);
    opacity: 0.1;
    transition: all 500ms ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  > .btn-right {
    left: auto;
    right: 0;

    background: linear-gradient(to right, transparent 0%, black 200%);
  }
`
