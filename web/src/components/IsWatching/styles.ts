import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-color: ${props=> props.theme.colors.backgroundColor}; /*variable*/ 

  display: flex;
  justify-content: center;
  align-items: center;
 
`;


export const Content = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 0.5rem 1rem 0;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0.5rem;

  svg{

    color: ${props=> props.theme.colors.title}; /*variable*/ 
    z-index: 10;
    position: relative;
    right: -100px;

  }

  &:hover{
    p{
      animation-name:Title;
      animation-duration:1s;
      opacity: 1;

    }
    svg{
      opacity: 1;
      right: 0px;
      transition: 1s;
    }
  }

  
  
  @keyframes Title {
    0%{
      transform: translateX(-20%)
    };
    100%{
      transform: translateX(0%)
    };

  }



  
`

export const Title = styled.p`
  color: ${props=> props.theme.colors.title}; /*variable*/ 
  gap: 0.5rem;
  padding-bottom: 5px;
  position: relative;
  display: flex;
  left: -10px;
  opacity: 0;

`

export const ToggleBackground = styled.button`
  width: 150px;
  height: 42px;
  outline: none;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.backgroundColorButton};
  color: ${props => props.theme.colors.titleButton};
  
  border: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 12px;
  cursor: pointer;
  box-shadow: 0px 4px 4px ${props=> props.theme.colors.boxShadow};



  &:hover{
    filter: brightness(0.8);
  }
`