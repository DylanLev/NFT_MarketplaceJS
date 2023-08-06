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
import HomePageConnected from './pages/HomePageConnected';
import NFTpurchase from './pages/NFTpurchase';
import DisplayEthAdresses from './pages/DisplayEthAdresses';
import SuccessfulPurchase from './pages/SuccesfulPurchasePage';
import FailurePurchase from './pages/FailurePurchasePage';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/NFTpage/:name/:price/:username" element={<NFTpage />} />
      <Route path="/WalletPage" element={<WalletPage />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/SignupPage" element={<SignupPage/>} />
      <Route path="/purchase/:to/:from/:NFTname/:price" element={<NFTpurchase />} />
      <Route path="/index" element={<HomePageConnected />} />
      <Route path="/successful/:username" element={<SuccessfulPurchase />} />
      <Route path="/failure/:username" element={<FailurePurchase />} />

      {/* <Route path="/display" element={<DisplayEthAdresses />} /> */}

     
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
