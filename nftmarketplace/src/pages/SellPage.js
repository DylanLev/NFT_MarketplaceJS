import React, { useState } from 'react';
import logo from '../images/logo/logo.jpg';
import Carousel from './Carousel';
import '../Styles.css';
import ShowEthAddress from './ShowEthAdress';
import Balance from './Balance';
import { Link } from 'react-router-dom';

const SellPage = () => {
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [nftName, setNFTName] = useState('');
  const [nftPrice, setNFTPrice] = useState('');

  const handleNFTSelection = (event) => {
    const file = event.target.files[0];
    setSelectedNFT(file);
  };

  const handleSellNFT = () => {
    if (selectedNFT && nftName && nftPrice) {
      // Implement logic to sell the NFT
      // You can use web3.js or ethers.js to interact with Ethereum
      console.log('NFT is being sold:', nftName, nftPrice);
    } else {
      console.log('Please fill in all the required information.');
    }
  };

  return (
    <div className="container">
      <header>
        <h1 style={{textAlign: 'center'}}>Sell Your NFT</h1>
      </header>
      <main>
      <section className="section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <p className="description" style={{color: 'black'}}>
            To list an NFT for sale, choose a file from your device and provide the necessary details.
        </p>
        <br></br>
        <input type="file" accept=".jpg, .png, .gif" onChange={handleNFTSelection}/>
        <br></br>
        <div className="input-group">
            <label>NFT Name: </label>
            <input type="text" value={nftName} onChange={(e) => setNFTName(e.target.value)} />
        </div>
        <br></br>
        <div className="input-group">
            <label>NFT Price: </label>
            <input 
                type="text" 
                value={nftPrice} 
                onChange={(e) => {
                    const inputValue = e.target.value;
                    if(/^\d*\.?\d{0,4}$/.test(inputValue)){
                        setNFTPrice(inputValue);
                    }
                }}
                inputMode='decimal'
            /> ETH
        </div>
        <br></br>
        <button className="button" onClick={handleSellNFT}>Sell the NFT</button>
      </section>

      </main>
      <footer>
        <p>© 2023 NFT Marketplace by Dylan, Ilan & Tal</p>
      </footer>
    </div>
  );
};

export default SellPage;