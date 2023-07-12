import React from 'react';
import Footer from './Footer/footer';

const MainLayout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
