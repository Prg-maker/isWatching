import {
  Container,
  Content,
  Title
} from './styles'
    
import { HandEye } from 'phosphor-react'
    
export function IsWatching(){
  return(
    <Container>

      <Content>
        <HandEye size={32} weight="bold"/>

        <Title><strong>12</strong> visualizações</Title>
      </Content>
    
    </Container>
  )
}