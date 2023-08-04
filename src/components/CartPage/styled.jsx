import styled from 'styled-components';
import { colors } from '../../styles/theme';

export const CartPageContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 1rem;
  padding-bottom: 8rem;
  min-height: 70vh;
  display: flex;
  flex-direction: column;

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
            margin-right: 26rem;
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

    .summary-box {
      flex: 1;
      background-color: ${colors.primary};
      padding: 1rem;
      margin-left: 1rem;
      border: 1px solid #ddd;

      h2 {
        /* Styling for Summary title */
        color: ${colors.white};
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
      }
    }
  }
`;




