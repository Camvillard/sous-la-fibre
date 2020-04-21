import { createGlobalStyle } from "styled-components"
import { themeColors, themeFonts } from "./theme-variables"

const { mediumGray } = themeColors
const { headersFont, bodyFont } = themeFonts

export const GlobalStyle = createGlobalStyle`

@import url("");
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: 62.5%;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.6rem;
    color: ${mediumGray};
    font-family: ${bodyFont};
    word-break: break-word;
  }
  p {
    font-size: 1.6rem;
    margin: 0.4em 0 0.2em;
  }
  img {
    object-fit: cover;
    width: 100%;
    max-width: 100vw;
    margin: 0;
  }
  a {
    text-decoration: none;
    font-family: ${bodyFont};
  }
  a:active,
  a:hover {
    outline-width: 0;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  svg:not(:root) {
    overflow: hidden;
  }
  h1, h2, h3, h4 {
    font-family: ${headersFont};
    letter-spacing: 1px;
    margin: 0.4em 0 0.2em;
    font-feature-settings: "liga";
  }
  h5, h6 {
    font-family: ${bodyFont};
    letter-spacing: 1px;
    margin: 0.4em 0 0.2em;

  }
`
//
