import styled from 'styled-components';

export const Container = styled.div`
  max-height: 50%;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  .itens{
    overflow-y: auto;
    border-radius: 5px 5px 0 0;
    ::-webkit-scrollbar{
     background: none;
     border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${props => props.theme.background1};
    }
    ::-webkit-scrollbar-thumb{
      background-color: ${props => props.theme.border};
      border-radius: 10px;
    }
  }
  .nav{
    width: 100%;
    padding: 20px 0;
    background-color: ${props => props.theme.background1};
    transition: .2s linear;
    color: ${props => props.theme.smallBody};
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 0 0 5px 5px;
    position: relative;
    div, div p{
      font-size: 16px;
    }
    .filters{
      display: flex;
      gap: 10px;
      p{
        cursor: pointer;
        transition: .2s linear;
        :hover:not(.active){
          color: ${props => props.theme.smallHover};
        }
      }
      .active{
        font-weight: 700;
        color: ${props => props.theme.colors.BrightBlue};
      }
    }
    .clear{
      cursor: pointer;
      transition: .2s linear;
      :hover{
        color: ${props => props.theme.smallHover};
      }
    }
  }
  @media screen and (max-width: 425px){
    .filters{
      position: absolute;
      width: 100%;
      top: 100%;
      margin-top: 20px;
      padding: 20px;
      border-radius: 5px;
      justify-content: center;
      gap: 20px !important;
      background-color: ${props => props.theme.background1};
      transition: .2s linear;
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    }
  }
`;
