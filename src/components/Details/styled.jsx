import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles/theme';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 10px;
  padding: 15px;

  @media (min-width: 768px) {
    max-width: 1500px;
    margin: 0 auto;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
  }
`;

export const LeftGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr; 
`;

export const RightGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
`;


export const H1 = styled.h1`
  color: ${colors.white};
  padding-top: 1rem; 
  padding-bottom: 1rem; 
  

  @media (max-width: 1100px) {
    text-align: center; 
  }
`;

export const H2 = styled.h2`
  color: ${colors.white};

  @media (max-width: 1100px) {
    text-align: center; 
  }
`;

export const H3 = styled.h3`
  color: ${colors.white};
  margin-top: 3rem;
  font-size: 26px;
  font-weight: 300;

  @media (max-width: 1100px) {
    text-align: center; 
  }

`;

export const H4 = styled.h4`
  color: ${colors.white};
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  font-size: 34px;

  @media (max-width: 1100px) {
    display: none;  
  }
`;

export const H5 = styled.h5`
  color: ${colors.white};
  margin-bottom: 1rem;
  margin-top: 4rem;
  font-size: 26px;
`;

export const H6 = styled.h6`
  color: ${colors.white};
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  font-size: 16px;
  font-weight: 300;
`;

export const ProductDescription = styled.p`
  color: ${colors.white};
  font-weight: 100;
`;

export const ProductPrice = styled.p`
  color: ${colors.white};
  margin-top: 0;
  font-size: 26px;
  font-weight: 500;

  @media (max-width: 1100px) {
    font-size: 18px;

  }
`;

export const useStyles = makeStyles({
  icon: {
    color: colors.secondary,
    fontSize: "24px",
    marginTop: "5px"
  },
  image: {
    width: '100%',
    objectFit: 'contain',
  },
});

export const AverageRating = styled.p`
  font-size: 36px;
  color: ${colors.white};
  margin: 0; 
`;

export const ProductContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 3;

  @media (max-width: 1100px) {
    grid-row: 4;
    grid-column: 1;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 1 / 3;
  grid-row: 1;

  @media (max-width: 1100px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

export const ImageAndBuyContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start; 
  @media (min-width: 768px) {
    align-items: stretch;
  }
`;


export const ProductTags = styled.div`
  grid-column: 1 / 3;
  grid-row: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 1100px) {
    grid-row: 2;
    grid-column: 1;
    justify-content: center;
  }
`;

export const Tag = styled.span`
  background-color: #76777B;
  color: ${colors.white};
  padding: 5px; 
  margin: 3px;  
  display: inline-block; 
`;

export const BuyProductContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  background-color: ${colors.primary};
  margin-left: 2rem; 
  margin-top: 7rem;
  grid-column: 3;
  grid-row: 1;

  @media (max-width: 1100px) {
    grid-column: 1;
    grid-row: 3;
    background-color: transparent; 
    margin-left: 0rem; 
    margin-top: 1rem;
  }
`;

export const ProductSpecificationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
    
  }
`;

export const SpecificationSection = styled.div`
  flex: 1;
  margin: 0 10px; // or whatever spacing you want between the two sections
`;