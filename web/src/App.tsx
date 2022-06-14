import { IsWatching } from "./components/IsWatching"
import GlobalStyles from "./styles/GlobalStyles"
import dark from './theme/dark'
import ligth from './theme/ligth'
import {ThemeProvider} from 'styled-components'
import { useState } from "react"


function App() {

  const [theme , setTheme] = useState(true)


  function toggleTheme(){
    setTheme(!theme)

  }
  console.log(ligth)


  return (
    <>
      <ThemeProvider theme={theme ? ligth: dark}>
        <IsWatching  ToggleTheme={toggleTheme}/>
      </ThemeProvider>

      <GlobalStyles/>
    </>    
  )
}

export default App
