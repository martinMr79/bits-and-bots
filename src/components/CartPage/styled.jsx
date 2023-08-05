import styled from 'styled-components';
import { colors } from '../../styles/theme';

export const CartPageContainer = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  

  h1 {
    color: white;
    margin-top: 2rem;
    margin-bottom: 3rem;
    font-size: 26px;
  }

  .cart-wrapper {
    display: flex;
    justify-content: space-between;

    .cart-content {
      flex: 3; 
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;

      div.row {
        display: flex;
        height: 130px; 
        margin-bottom: 1rem;  
        background-color: #27282E; 
        

        img {
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
            
            font-size: 26px;
          }

          div.price-and-button {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;

  div.price-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;

    p {
      margin: 0;
      color: white;
    }
  }

  button {
    background-color: #27282E;
    color: #2177EB;
    border: none;
    cursor: pointer;
    margin-top: auto;
  }
}


}

        }
      }
    }

    .summary-box {
      flex: 1;
      background-color: ${colors.primary};
      padding: 1rem;
      margin-left: 1rem;
      max-height: 300px; 
      border: none; 
      text-align: center;
      

      h2 {
        /* Styling for Summary title */
        color: ${colors.white};
      }

      hr {
        border-color: #767778;
      }

      .summary-row {
        /* Styling for the summary rows */
        color: ${colors.white};
        
      }

      button {
        /* Styling for the checkout button */
        background-color: ${colors.secondary};
        color: ${colors.black};
        border: none;
        cursor: pointer;
        margin-top: 2rem;
        padding: 0.5rem 3.5rem;
        font-size: 18px; 
        border-radius: 5px
        
      }
    }
`;




