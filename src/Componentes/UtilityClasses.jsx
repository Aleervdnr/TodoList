import styled,{createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root{
    --verde:#244C3A;
    --verde-opaco:#1a2b23;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body{
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }

  .App{
    max-width: 2560px;
    margin: 0 auto;
  }

  .margenes{
    padding: 25px 22px;

    @media (min-width:1024px) {
      padding: 50px 72px;
    }
  }

  .guias{
    padding: 0 22px;

    @media (min-width:1024px) {
      padding: 0 72px;
    }
  }
`