import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header/header';
import Footer from './Footer/footer';
import styled from 'styled-components';

const StyledMainLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const MainLayout = ({ children }) => {
  const location = useLocation();

  return (
    <StyledMainLayout>
      {location.pathname !== '/' && <Header />}
      {children}
      <Footer />
    </StyledMainLayout>
  );
};

export default MainLayout;


