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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '80vh', textAlign: 'center' }}>
      <h1>WalletPage</h1>
      <br></br>
      <p style={{maxWidth: '100vh', color: 'black'}}>To connect your wallet to MetaMask, simply click the "Connect to MetaMask" button. This action will prompt a connection request, and upon approval, your wallet will be linked to the MetaMask extension. Enjoy seamless access to decentralized applications and blockchain functionalities.</p>
      <br></br>
      <button onClick={connectWallet}>Connect to MetaMask</button>
    </div>
  );
};

export default WalletPage;