import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 540px;
  height: 100vh;
  margin: auto;
  padding-top: 10%;
  color: ${props => props.theme.colors.VeryLightGray};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  .attribution { 
    font-size: 11px;
    text-align: center;
    color: ${props => props.theme.body};
    transition: .2s linear;
    a {
      font-size: 13px;
      color: hsl(228, 45%, 44%);
      cursor: pointer;
    }
  }
  @media screen and (max-width: 425px){
    .attribution{
      margin-top: 75px;
    }
  }
`;