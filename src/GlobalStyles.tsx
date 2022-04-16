import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Roboto-Medium";
    src: url("assets/fonts/Roboto/Roboto-Medium.ttf");
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body{
    color: white;
  }
  :root{
    --pink:#f82249;
    --gray:#868a99;
    --dark-blue:#050b22;
    --dark-blue-transparent:#050b22ca;
    --white:#fff;
  }
`
export default GlobalStyles;