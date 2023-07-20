import styled from 'styled-components';
import { Card, ProductImage, ProductImageContainer } from '../cardLayout';

export const StyledCarouselContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Adjust the minimum width and desired fraction as per your requirements */
  gap: 1rem; /* Add the desired gap between the cards */
  justify-items: center;
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

export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 1rem;
`;

