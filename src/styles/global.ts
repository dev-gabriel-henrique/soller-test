import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: grayscale;

    overflow-x: hidden;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['purple']};
  }
  
  body, input, textarea, button {
    font: 400 1rem 'Roboto, sans-serif'
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
    
  ul {
    list-style: none;
  }

`