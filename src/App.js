import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Browse from './pages/Browse';
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
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;


