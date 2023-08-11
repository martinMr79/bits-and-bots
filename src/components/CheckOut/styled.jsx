import styled from 'styled-components';

export const CheckOutPageContainer = styled.div`
  max-width: 95%; 
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto; 
  color: white;
  min-height: 85vh;
  background-color: #27282E;       
  border-radius: 15px;            
 
  @media (min-width: 1100px) {
    max-width: 50%; 
  }
  

  p {
    color: white;
    margin-bottom: 0;
  }

  button {
    background-color: #2177eb;
    color: white;
    border: none;
    border-radius: 8px;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
    width: 267px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const ItemsAndPriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ItemText = styled.p``;

export const PriceText = styled(ItemText)`
  && {
    font-weight: bold;
  }
`;
