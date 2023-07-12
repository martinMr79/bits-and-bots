import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Browse from './pages/Browse';
import Footer from './components/Footer/footer';
import { GlobalStyle, AppContainer } from './GlobalStyles';

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;

