import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header/header';
import Footer from './Footer/footer';

const MainLayout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Header />}
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;

