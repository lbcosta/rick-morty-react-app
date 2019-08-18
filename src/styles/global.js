import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    background-color: #fafafa;
    -webkit-font-smoothing: antialiased !important;
  }
  button {
    cursor: pointer;
    outline: none !important;
  }
  body, input, button {
    font: 14px "Quicksand", sans-serif;
  }
  ul {
    list-style: none;
  }
`;
