import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: ${props => props.theme.blue};
    font-size: 0.875rem;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  input {
    background: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-label']};
    border: 1px solid ${props => props.theme['base-border']};
  }

  input:focus {
    outline: 0;
    border: 1px solid ${props => props.theme['blue']};
    color: ${props => props.theme['base-subtitle']};
  }

  body {
    background-color: ${props => props.theme['base-background']};
    color: ${props => props.theme['base-text']};
    line-height: 160%;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
  }
`