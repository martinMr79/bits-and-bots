import styled from 'styled-components';
import Modal from 'react-modal';
import { colors } from '../../styles/theme';

export const CheckOutPageContainer = styled.div`
  max-width: 95%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  color: white;
  min-height: 85vh;
  background-color: ${colors.primary};
  border-radius: 15px;

  @media (min-width: 1100px) {
    max-width: 50%;
  }

  p {
    color: white;
    margin-bottom: 0;
  }

  button {
    background-color: #2177eb;
    color: white;
    border: none;
    border-radius: 8px;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
    width: 267px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const ItemsAndPriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ItemText = styled.p``;

export const PriceText = styled(ItemText)`
  && {
    font-weight: bold;
  }
`;

export const StyledModal = styled(Modal)`
  width: 80%;
  max-width: 500px;
  padding: 20px;
  border-radius: 8px;
  background: white;
  position: relative;
  outline: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 0;
  }
`;

export const ConfirmButton = styled.button`
  margin: 10px 8px 0px 0px;
  padding: 6px 14px;
  background-color: #2177eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const CancelButton = styled.button`
  padding: 6px 12px;
  background-color: #76777b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
