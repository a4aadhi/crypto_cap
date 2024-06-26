import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Show from "./components/Show";
import { BrowserRouter,Route,Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element ={<App/>} />
      <Route path="/:id" element={<Show/>} />
  
    </Routes>
  </BrowserRouter>
  
);

