import styled from 'styled-components';
import check from '../../imgs/icon-check.svg'

export const Container = styled.div`
  
width: 100%;
padding: 20px;
background-color: ${props => props.theme.background1};
transition: .2s linear;
display: flex;
align-items: center;
gap: 10px;
border-bottom: 1px solid ${props => props.theme.border};
button{
   content: '';
   min-width: 24px;
   min-height: 24px;
   background: ${props => props.complete ? "url(" + check + ") no-repeat center , " + props.theme.colors.CheckBackground : "none"};
   border: 1px solid ${props => props.theme.border};
   border-radius: 50%;
   cursor: pointer;
   transition: .2s linear;
   :hover{
      border: 1px solid ${props => props.theme.smallHover};
   }
}
p{
   max-width: 80%;
  text-decoration: ${props => props.complete ? "line-through" : "none"};
  color: ${props => props.complete ? props.theme.colors.DarkGrayishBlue : props.theme.body};
  cursor: pointer;
  transition: .2s linear;
}
@keyframes scale{
   from{
      transform: scale(0.5);
   }
   to{
      transform: scale(1);
   }
}
img{
   width: 20px;
   margin-left: auto;
   animation: scale .5s;
   transition: .5s linear;
   cursor: pointer;
}
`;