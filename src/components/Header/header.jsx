import React from 'react';
import { AppBar, Toolbar as MuiToolbar, Typography, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar } from '@mui/material';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background-color: #27282E !important;
  height: 100px;
`;

const Title = styled(Typography)`
  font-family: 'MuseSans', sans-serif !important;
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
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  width: 100%;
`;

function Header() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <ContentContainer>
          <Title variant="h5">
            Bits & Bots
          </Title>
          <IconButton color="inherit" style= {{ marginRight: 30 }}>
            <ShoppingCartIcon style={{ fontSize: 40, }} />
          </IconButton>
          <Avatar style={{ color: 'black', backgroundColor: 'white' }}>A</Avatar>
        </ContentContainer>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;

