import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;

    /* Toastify custom colors */
    --toastify-color-light: ${({ theme }) => theme.COLORS.LIGHT_100};
    --toastify-color-dark: ${({ theme }) => theme.COLORS.DARK_900};
    --toastify-color-info: ${({ theme }) => theme.COLORS.BLUE_200};
    --toastify-color-success: ${({ theme }) => theme.COLORS.GREEN_100};
    --toastify-color-warning: ${({ theme }) => theme.COLORS.ORANGE};
    --toastify-color-error: ${({ theme }) => theme.COLORS.RED_300};
    --toastify-color-transparent: rgba(255, 255, 255, 0.7);
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    -webkit-font-smoothing: antialiased;

  }
  
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;

  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);    
  }


/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 0.6rem;
}

*::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.COLORS.DARK_400};
}

*::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
}
`
