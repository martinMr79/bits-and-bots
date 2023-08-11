import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { mediaQueries } from '../../styles/mediaQueries';
import { colors } from '../../styles/theme';

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

export const Card = styled.div`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
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

export const BrowseCartButton = styled.button`
  background-color: ${colors.secondary};
  border: none;
  border-radius: 5px;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  @media (max-width: 750px) {
    width: 100%;
    padding: 0.8rem 0.8rem;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SaleBox = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: ${colors.secondary};
  color: black;
  padding: 6px 12px;
  font-size: 26px;
  font-weight: bold;
  font-family: 'MuseSans', sans-serif !important;
  font-weight: 500;
`;

export const ViewDetails = styled.button`

  background-color: ${colors.primary};
  color: #7BA5DC;
  padding: 6px 5px;
  font-size: 16px;
  font-weight: bold;
  font-family: 'MuseSans', sans-serif !important;
  font-weight: 500;
  display: flex; 
  width: fit-content;
  align-self: flex-end;
  border: none; 
  cursor: pointer;
  
  @media (max-width: 750px) {
    align-self: center;
    padding: 0.8rem 0.8rem;
    margin-top: 0.5rem;
  }

`;

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: flex-end;
  
  @media (max-width: 750px) {
    justify-content: center;
    width: 100%;
  }
`;
