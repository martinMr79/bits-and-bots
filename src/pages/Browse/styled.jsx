import styled from 'styled-components';
import { Card, ProductImage, ProductImageContainer } from '../../components/Browse/cardLayout';
;


export const StyledCarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;


export const StyledCategoryCard = styled(Card)`
  background-color: #27282E;
  color: #ffffff;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px; /* Adjust the gap between cards by modifying the margin */
`;

export const StyledProductImageContainer = styled(ProductImageContainer)`
  position: relative;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
`;

export const StyledProductImage = styled(ProductImage)`
  width: 100%;
  display: block;
`;
