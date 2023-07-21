import styled from 'styled-components';
import { Card, ProductImage, ProductImageContainer } from '../cardLayout';

export const StyledCarouselContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Adjust the minimum width and desired fraction as per your requirements */
  gap: 1rem; /* Add the desired gap between the cards */
  justify-items: center;
  align-items: center;
  height: 100%;

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
  padding-bottom: 8rem;
`;

export const H2 = styled.h2`
  color: #ffffff;
`;

export const ArrowButtonContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  padding: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  ${({ right }) => (right ? 'right: 15px;' : 'left: 15px;')}
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;
