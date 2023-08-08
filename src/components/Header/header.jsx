import React from 'react';
import { AppBar, Toolbar as MuiToolbar, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from '../../hooks/useCart';
import { colors } from '../../styles/theme';
import { flexCenter } from '../../styles/mix-ins';

const StyledAppBar = styled(AppBar)`
  background-color: ${colors.primary} !important;
  height: 100px;
`;

const Logo = styled(Link)`
  font-family: 'MuseSans', sans-serif !important;
  font-weight: 700;
  color: ${colors.secondary};
  flex-grow: 1;
  font-size: 32px !important;
  text-decoration: none;
`;

const Toolbar = styled(MuiToolbar)`
  ${flexCenter}
  height: 100%;
`;

const ContentContainer = styled.div`
  ${flexCenter}
  max-width: 1500px;
  width: 100%;
  position: relative;
`;

const CartLink = styled(Link)`
  ${flexCenter}
  text-decoration: none;
  color: inherit;
`;

const CartItemCount = styled.span`
  background-color: ${colors.secondary};
  color: ${colors.black};
  border-radius: 50%;
  padding: 5px;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  top: 1px;
  right: 5px;
  width: 12px;
  height: 12px;
`;

function Header() {
  const { getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.clear(); 
    navigate('/');
  };

    return (
      <StyledAppBar position="static">
        <Toolbar>
          <ContentContainer>
            <Logo variant="h5" to="/browse">
              Bits & Bots
            </Logo>
            <CartLink to="/cart">
              <IconButton color="inherit">
                <ShoppingCartIcon style={{ fontSize: 40 }} />
                {cartItemCount > 0 && (
                  <CartItemCount>{cartItemCount}</CartItemCount>
                )}
              </IconButton>
            </CartLink>
            <Avatar
              sx={{
                color: colors.black,
                backgroundColor: colors.white,
                marginLeft: { xs: 2, sm: 4, md: 8 },
              }}
              onClick={handleLogout} // Added onClick to trigger handleLogout function
            >
              A
            </Avatar>
          </ContentContainer>
        </Toolbar>
      </StyledAppBar>
    );
  }
  
  export default Header;
