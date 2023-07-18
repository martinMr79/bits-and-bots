import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar } from '@mui/material';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background-color: #27282E !important;
  height: 100px;
`;

const Title = styled(Typography)`
  color: #CCFF00;
  flex-grow: 1;
`;

function Header() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Title variant="h5">
          Bits & Bots
        </Title>
        <IconButton color="inherit">
          <ShoppingCartIcon />
        </IconButton>
        <Avatar>A</Avatar>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
