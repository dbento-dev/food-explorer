import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
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
