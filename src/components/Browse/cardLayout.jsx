import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 1rem;
  padding-bottom: 8rem;
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;

  @media (min-width: 750px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1050px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

`;

export const Card = styled.div`
  background-color: #27282E;
  color: #ffffff;
  padding: 1rem;
  position: relative;
`;

export const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;  
`;

export const ProductImage = styled.img`
  width: 100%;
  display: block;
`;



 export const CartButton = styled.button`
   background-color: #CCFF00;
   border: none;
   border-radius: 3px;
   padding: 0.5rem 1rem;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   font-weight: bold;
 `;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SaleBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #CCFF00;
  color: black;
  padding: 6px 15px;
  font-size: 26px;
  font-weight: bold;
  font-family: 'MuseSans', sans-serif !important;
  font-weight: 500; 
`;

