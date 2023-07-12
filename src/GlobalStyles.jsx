import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const AppContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100vh;
`;

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
`;



