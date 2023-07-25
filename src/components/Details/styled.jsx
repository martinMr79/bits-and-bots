import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';


export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

export const H1 = styled.h1`
  color: #ffffff;
  padding-bottom: 1rem; 
`;

export const ProductDescription = styled.p`
  color: #ffffff;
`;

export const useStyles = makeStyles({
    image: {
      width: '100%',  
      height: 'auto', 
    },
  });
  
  export const ProductContainer = styled.div`
  width: 40%;
`;
