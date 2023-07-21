import React from 'react';
import { AppBar, Toolbar as MuiToolbar, Typography, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background-color: #27282E !important;
  height: 100px;
`;

const Title = styled(Typography)`
  font-family: 'MuseSans', sans-serif !important;
  font-weight: 700; 
  color: #CCFF00;
  flex-grow: 1;
  font-size: 32px !important;
`;

const Toolbar = styled(MuiToolbar)`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1500px;
  width: 100%;
  position: relative;
`;

const CartLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const CartItemCount = styled.span`
  background-color: #CCFF00;
  color: black;
  border-radius: 50%;
  padding: 6px;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  top: -1px;
  right: 5px;
  width: 12px;
  height: 12px;
`;


function Header() {
  // Function to get the number of items in the cart from localStorage
  const getCartItemCount = () => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    return cartData.length;
  };

  const cartItemCount = getCartItemCount();

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <ContentContainer>
          <Title variant="h5">
            Bits & Bots
          </Title>
          <CartLink to="/cart">
            <IconButton color="inherit">
              <ShoppingCartIcon style={{ fontSize: 40 }} />
              {cartItemCount > 0 && <CartItemCount>{cartItemCount}</CartItemCount>}
            </IconButton>
          </CartLink>
          <Avatar style={{ color: 'black', backgroundColor: 'white', marginLeft: '16px' }}>A</Avatar>
        </ContentContainer>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;





