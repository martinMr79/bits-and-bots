import styled from 'styled-components';
import { Card, ProductImage, ProductImageContainer } from '../cardLayout';
import { mediaQueries } from '../../../styles/mediaQueries';
import { colors } from '../../../styles/theme';

export const StyledCarouselContainer = styled.div`
  display: grid;
  gap: 1rem;
  justify-items: center;
  align-items: center;
  height: 100%;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (${mediaQueries.medium}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (${mediaQueries.large}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (${mediaQueries.xLarge}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const StyledCategoryCard = styled(Card)`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
  padding-bottom: 2rem;
`;

export const H2 = styled.h2`
  color: ${colors.white};
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
