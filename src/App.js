import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Browse from './pages/Browse';
import ProductDetails from './pages/Details';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
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
          <Route 
            path="/browse" 
            element={
              <PrivateRoute>
                <MainLayout>
                  <Browse />
                </MainLayout>
              </PrivateRoute>
            } 
          />
          <Route 
            path="/details/:id" 
            element={
              <PrivateRoute>
                <MainLayout>
                  <ProductDetails />
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route 
            path="/cart" 
            element={
              <PrivateRoute>
                <MainLayout>
                  <Cart />
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route 
            path="/checkout" 
            element={
              <PrivateRoute>
                <MainLayout>
                  <Checkout />
                </MainLayout>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;

