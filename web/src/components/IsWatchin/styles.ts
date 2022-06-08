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
  margin: 0 2rem 2rem 0;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0.5rem;

  &:hover{
    p{
      display: block;
      animation-name:Title;
      animation-duration:1s;
    }
    svg{
      opacity: 1;
    }
  }

  svg{
    opacity: 0.7;
    color: #000;
    z-index: 10;
    
  }
  
  @keyframes Title {
    0%{
      transform: translateX(-20%)
    };
    100%{
      transform: translateX(0%)
    };

  }

  @keyframes svg {
    to{
      transform: translateX(100%);
    }
    from{
      transform: translateX(100%);
    };

  }
`

export const Title = styled.p`
  color: #000;
  gap: 5rem;
  padding-bottom: 5px;
  display: none;
  
`