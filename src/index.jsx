import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Portfolio from "./pages/Projects/Portfolio/Portfolio"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gdept from './pages/Projects/Gdept/Gdept';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/projets/portfolio' element={<Portfolio/>}/>
          <Route path='/projets/gdept' element={<Gdept/>}/>

      </Routes>
  </BrowserRouter>
);
