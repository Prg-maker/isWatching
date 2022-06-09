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

export function IsWatching(){
  const [visualization , setVisualization] = useState<PropsVisualization>() 

  useEffect(  ()=> {

    async function get(){
      const {data } = await api.get('/')  as Props

      setVisualization(data)
    }

    get()

  } , [])

  return(
    <Container>

      <Content>
        <HandEye size={32} weight="bold"/>

        <Title><strong>{visualization?.visualization}</strong> visualizações</Title>
      </Content>
    
    </Container>
  )
}