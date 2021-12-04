import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   :root{
      --Bright-Blue: hsl(220, 98%, 61%);
      --Check-Background: linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));

      --Very-Light-Gray: hsl(0, 0%, 98%);
      --Very-Light-Grayish-Blue: hsl(236, 33%, 92%);
      --Light-Grayish-Blue: hsl(233, 11%, 84%);
      --Dark-Grayish-Blue: hsl(236, 9%, 61%);
      --Ver-Dark-Grayish-Blue: hsl(235, 19%, 35%);

      --Very-Dark-Blue: hsl(235, 21%, 11%);
      --Very-Dark-Desaturated-Blue: hsl(235, 24%, 19%);
      --Light-Grayish-Blue: hsl(234, 39%, 85%);
      --Grayish-Blue-hover: hsl(236, 33%, 92%);
      --Dark-Grayish-Blue1: hsl(234, 11%, 52%);
      --Very-Dark-Grayish-Blue: hsl(233, 14%, 35%);
      --Ver-Dark-Grayish-Blue2: hsl(237, 14%, 26%);
   }
   *{
      margin: 0;
      padding: 0;
      outline: none;
      box-sizing: border-box;
      font-family: 'Josefin Sans', sans-serif;
      font-size: 18px;
   }
   body{
      background: ${props => props.theme.bgBack} url(${props => props.theme.imgBack}) no-repeat top center;
      background-size: contain;
      transition: .2s linear;
   }
   @media screen and (max-width: 768px){
      body{
         background-size: auto 35%;
         background-position: 30% 0%;
      }
   }
`

export default GlobalStyles