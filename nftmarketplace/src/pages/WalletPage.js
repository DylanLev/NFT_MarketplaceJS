import React from 'react';
import { ethers } from 'ethers';

const WalletPage = () => {
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected to MetaMask');
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('MetaMask not found');
    }
  };

  return (
    <div>
      <h1>WalletPage</h1>
      <button onClick={connectWallet}>Connect to MetaMask</button>
    </div>
  );
};

export default WalletPage;
