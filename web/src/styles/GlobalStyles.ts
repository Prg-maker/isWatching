import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *,button , input{
    font-family: 'Inter', sans-serif;
  }
  html , body ,#root{
    height:100vh;
  }

`