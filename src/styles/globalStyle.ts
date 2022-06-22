import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	font-family: 'Work Sans', sans-serif;
    box-sizing: border-box;
    :root {
        --primary-white: #F1F2E9;
        --primary-pink: #D96A7E;
        --primary-purple: #BF60AF;
        --primary-dark-pink: #D96299;
        --home-titles-cream: #F2A007;
    }
  }

  .App{
      background-color: whitesmoke;
      width: 100vw;
      height: 100vh;
  }

    button{
        cursor: pointer;
    }
`;

export default GlobalStyle;
