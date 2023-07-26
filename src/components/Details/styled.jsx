import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles/theme';

export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding-bottom: 2rem;
  display: flex; 
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
  flex: 1.5; 
  display: flex;
  flex-direction: column;
  width: 50%;
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
  flex: 1;  

  max-height: 479.25px;
  background-color: ${colors.primary};
  color: ${colors.white};
  margin-top: 7rem; 
  margin-left: 5rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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