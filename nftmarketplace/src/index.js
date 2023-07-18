import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import NFTpage from './pages/NFTpage';
import WalletPage from './pages/WalletPage';
import { createRoot } from 'react-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/NFTpage/:name/:price" element={<NFTpage />} />
      <Route path="/WalletPage" element={<WalletPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/SignupPage" element={<SignupPage/>} />


      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
