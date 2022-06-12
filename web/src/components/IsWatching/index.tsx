import {
  Container,
  Content,
  Title
} from './styles'
    
import { HandEye } from 'phosphor-react'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'



interface Props{
  data:{
    visualization: Number
  }
}

interface PropsVisualization{
  visualization: Number
}

interface PropsIsWatching{
  ToggleTheme: ()=> void
}

export function IsWatching({
  ToggleTheme
}:PropsIsWatching){
  const [visualization , setVisualization] = useState<PropsVisualization | any>() 

  useEffect(  ()=> {

    async function get(){
      const {data } = await api.get('/')  as Props

      
      
      setVisualization(data )
    }

    get()

  } , [])

  let number = visualization?.visualization 


  return(
    <Container >
        <button onClick={ToggleTheme} style={{
          background: 'red',
        }}>Toggle theme</button>

      <Content>
        <HandEye size={32} weight="bold"/>
        <Title><strong>{number  }</strong> visualizações</Title>
      </Content>
    
    </Container>
  )
}