import styled from 'styled-components';
import { colors } from '../../styles/theme';

export const CartPageWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  min-height: 80vh;
  flex-grow: 1;
  margin-bottom: 3rem;
`;

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
    margin-top: 4rem;
    margin-bottom: 4rem;
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
        height: 160px;
        margin-bottom: 1rem;
        background-color: #27282e;

        img {
          flex-shrink: 0;
          margin-right: 2rem;
          max-width: 100%;
          height: auto;
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
              padding-top: 19px;

              p {
                margin: 0;
                color: white;
              }
            }

            button {
              background-color: #27282e;
              color: #2177eb;
              border: none;
              cursor: pointer;
              margin-top: auto;
              margin-bottom: 3px;
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
    margin-right: 2rem;
    max-height: 350px;
    border: none;
    text-align: center;

    h2 {
      color: ${colors.white};
      margin-bottom: 3rem;
    }

    hr {
      border-color: #767778;
    }

    .summary-row {
      color: ${colors.white};

      p {
        display: flex;
        justify-content: space-between;
      }

      p span.label {
        margin-right: 8px;
      }

      p.total span.label {
        font-weight: bold;
      }

      p.total {
        font-weight: bold;
      }
    }

    button {
      /*checkout button */
      background-color: ${colors.secondary};
      color: ${colors.black};
      border: none;
      cursor: pointer;
      margin-top: 3rem;
      padding: 0.4rem 4.5rem;
      font-size: 18px;
      border-radius: 4px;
    }
  }

  @media (max-width: 1100px) {
    h1 {
      text-align: center;
    }

    .cart-wrapper .cart-content div.row {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: auto;

      img {
        margin-bottom: 1rem;
        width: 100%; 
        height: 100%;   
        object-fit: cover; 
        margin-right: 0;
      }

      div.info {
        flex-direction: column;
        align-items: center;
        width: 100%;

        h2 {
          margin-bottom: 1rem;
        }

        div.price-and-button {
          margin-top: 1rem;
          align-items: center;
        }
      }
    }

    .cart-wrapper {
      flex-direction: column;

      .cart-content {
        order: 1;
      }

      .summary-box {
        order: 2;  
        margin-left: 0; 
        margin-right: 0;
        background-color: ${colors.grey};
      }
    }
  }
`;

