import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Browse from './pages/Browse';
import GlobalStyle from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
