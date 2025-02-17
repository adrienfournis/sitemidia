import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { RetailAdvertising } from './pages/RetailAdvertising';
import { Music } from './pages/Music';
import { Technology } from './pages/Technology';
import { Platform } from './pages/Platform';
import { Home } from './pages/Home';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/retail-advertising" element={<RetailAdvertising />} />
          <Route path="/music" element={<Music />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/platform" element={<Platform />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;