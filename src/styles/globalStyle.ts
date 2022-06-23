import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	font-family: 'Source Sans Pro', sans-serif;
    box-sizing: border-box;
    :root {
        --primary-white: #F1F2E9;
        --primary-pink: #FF5C8D;
        --primary-purple: #AE00FB;
        --primary-dark-pink: #1CC5DC;
        --home-titles-orange: #F2A007;
    }
    background: var(--primary-white);
  }

  h1{
    font-family: 'Indie Flower', cursive;
  }

  .App{
      width: 100vw;
      height: 100vh;
  }

    button{
        cursor: pointer;
    }
`;

export default GlobalStyle;
