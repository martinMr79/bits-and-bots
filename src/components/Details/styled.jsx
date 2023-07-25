import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';


export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: row;
`;

export const H1 = styled.h1`
  color: #ffffff;
  padding-top: 1rem; 
  padding-bottom: 1rem; 
`;

export const H2 = styled.h2`
  color: #ffffff;
  padding-bottom: 1rem; 
`;

export const H3 = styled.h3`
  color: #ffffff;
  
`;



export const ProductDescription = styled.p`
  color: #ffffff;
`;

export const useStyles = makeStyles({
    image: {
      width: '100%',
      height: 'auto'
    },
  });
  
  export const ProductContainer = styled.div`
  width: 50%;
`;

export const ProductTags = styled.div`
  width: 40%;
  padding-top: 0.5rem;
`;

export const Tag = styled.span`
  background-color: #76777B;
  color: #FFFFFF;
  padding: 5px; 
  margin: 3px;  
  display: inline-block; 
`;

export const BuyProductContainer = styled.div`
  width: 30%;
  background-color: #27282E;
  color: #ffffff;
  padding: 1rem;
  margin-left: 5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;