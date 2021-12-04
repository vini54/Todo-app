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
`;