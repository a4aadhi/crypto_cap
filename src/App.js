import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Market from './components/Market';
import NavBar from './components/NavBar';
import Show from './components/Show';
import Learn from './components/Learn'; 
import Trade from './components/Trade';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<><Home /><Market /><Trade/><Learn/> </>} />
        <Route path="/show/:coinId" element={<Show />} />
      </Routes>
      
    </div>
  );
}

export default App;
