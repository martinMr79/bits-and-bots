import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles/theme';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr; 
  grid-template-rows: auto auto;
  grid-template-areas: 
    "image buy"
    "description buy";
  gap: 20px;

  @media (min-width: 768px) {
    max-width: 1500px;
    margin: 0 auto;
  }
`;

export const TopWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: 
    "image buy";
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
`;

export const H2 = styled.h2`
  color: ${colors.white};
  padding-bottom: 1rem; 
`;

export const H3 = styled.h3`
  color: ${colors.white};
`;

export const ProductDescription = styled.p`
  color: ${colors.white};
`;

export const useStyles = makeStyles({
  image: {
    width: '100%',
    objectFit: 'contain',
  },
});

export const ProductContainer = styled.div`
  grid-area: description;
`;

export const ImageBuyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch; 
`;

export const ImageContainer = styled.div`
  grid-area: image;
`;

export const ImageAndBuyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  @media (min-width: 768px) {
    align-items: stretch; // This causes the image and BuyProductContainer to have the same height on larger screens
  }
`;


export const ProductTags = styled.div`
  width: 40%;
  padding-top: 0.5rem;
`;

export const Tag = styled.span`
  background-color: #76777B;
  color: ${colors.white};
  padding: 5px; 
  margin: 3px;  
  display: inline-block; 
`;

export const BuyProductContainer = styled.div`
  grid-area: buy;
  align-self: start;
`;


export const CartButton = styled.button`
background-color: ${colors.secondary};
border: none;
border-radius: 5px;
padding: 0.6rem 5rem;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
`;