import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Game from './pages/Game';
import Description from './pages/Description';
import Menu from './Menu'; 
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/description" element={<Description />} />
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
