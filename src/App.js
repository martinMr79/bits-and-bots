import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Browse from './pages/Browse';
import ProductDetails from './pages/Details';
import Cart from './pages/Cart';
import { GlobalStyle, AppContainer } from './GlobalStyles';
import MainLayout from './components/MainLayout';
import './GlobalStyles'; 

 
function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/browse" element={<MainLayout><Browse /></MainLayout>} />
          <Route path="/details/:id" element={<MainLayout><ProductDetails /></MainLayout>} />
          <Route path="/cart" element={<MainLayout><Cart /></MainLayout>} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;


