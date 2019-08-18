import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Orbitron&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

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
    background: #8BC84B;
    -webkit-font-smoothing: antialiased !important;
  }
  button {
    cursor: pointer;
    outline: none !important;
  }
  body, input, button {
    font: 12px 'Roboto', sans-serif;
  }
  ul {
    list-style: none;
  }
`;
