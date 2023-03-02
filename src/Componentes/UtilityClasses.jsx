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

export const TasksGrid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, minmax(250px,1fr));
  justify-items: center;
  gap: 25px;
`

export const TasksWrapper = styled.div`
  width: 100%;
  min-height: 150px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

export const TasksWrapperTitle = styled.h2`
  color: var(--verde);
  text-align: center;
`