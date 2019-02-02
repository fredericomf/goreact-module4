import { createGlobalStyle } from "styled-components";

import "rc-slider/assets/index.css";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html, body, #root{
    height: 100%
  }

  body{
    background: #181818;
    color: #FFF;
    font-family: 'Montserrat', sans-serif;
    text-rendering: optimizeLegibility;
    -wekit-font-smoothing: antialiased !important;
  }
`;
