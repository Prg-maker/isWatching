import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background-color: #fff;
  position: relative;

 
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

    color: #000;
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
  color: #000;
  gap: 0.5rem;
  padding-bottom: 5px;
  position: relative;
  display: flex;
  left: -10px;
  opacity: 0;

`