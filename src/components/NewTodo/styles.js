import styled from 'styled-components';
import check from '../../imgs/icon-check.svg'

export const Container = styled.div`

width: 100%;
padding: 20px;
background-color: ${props => props.theme.background1};
transition: .2s linear;
border-radius: 5px;
display: flex;
align-items: center;
gap: 10px;
box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
button{
   content: '';
   width: 24px;
   height: 24px;
   background: ${props => props.complete ? "url(" + check + ") no-repeat center ,var(--Check-Background)" : "none"};
   border: 1px solid ${props => props.theme.border};
   border-radius: 50%;
   cursor: pointer;
   transition: .2s linear;
   :hover{
      border: 1px solid ${props => props.theme.smallHover};
   }
}
input{
   width: 90%;
   background: none;
   border: none;
   outline: none;
   color: ${props => props.theme.body};
   caret-color: ${props => props.theme.colors.BrightBlue};
   transition: .2s linear;
}
`;
