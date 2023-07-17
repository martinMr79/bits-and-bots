import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: #27282E;
  color: #ffffff;
  padding: 20px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

