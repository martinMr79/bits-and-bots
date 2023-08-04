import styled from 'styled-components';


export const CartPageContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 1rem;
  padding-bottom: 8rem;
  min-height: 70vh;

  h1 {
    color: white; 
    margin-top: 2rem; 
    margin-bottom: 3rem;
    font-size: 26px;
  }

  > div { 
    background-color: #27282E;
    margin-bottom: 1rem; 
    display: flex;
    flex-direction: column;

    div.row {
      display: flex;

      img {
        max-height: 130px;
        flex-shrink: 0;
        margin-right: 2rem;
      }

      div.info {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 1rem;

        h2 {
          margin: 0;
          color: white; 
          margin-right: 8rem; 
          font-size: 26px;
        }

        div.price-and-button {
          display: flex;
          flex-direction: column;
          align-items: flex-end;

          p {
            margin: 0;
            color: white;
            margin-bottom: 1rem;
          }

          button {
            background-color: #27282E;
            color: #2177EB;
            border: none;
          }
        }
      }
    }
  }
`;



