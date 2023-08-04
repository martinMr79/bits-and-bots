import styled from 'styled-components';

export const CartPageContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 1rem;
  padding-bottom: 8rem;

  > div { 
    background-color: #27282E;
    margin-bottom: 1rem; 
    
    display: flex;
    flex-direction: column;

    div.row {
      display: flex;
      align-items: center;

      img {
        max-height: 140px;
        flex-shrink: 0;
        margin-right: 1rem;
      }

      div.info {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 1rem;

        h2, p {
          margin: 0;
          color: white; 
        }
      }
    }

    button {
      background-color: #27282E;
      color: #2177EB;
      border: none;
      margin-top: 1rem;
    }
  }
`;


