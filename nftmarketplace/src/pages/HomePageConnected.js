// HomePageConnected.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo/logo.jpg';
import Carousel from './Carousel';
import '../Styles.css';

const HomePageConnected = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };

    // Function to extract the username from the URL
  const getUsernameFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('username') || ''; // If the username parameter is not present, return an empty string
  };

  const username = getUsernameFromURL();
  return (
    <div className="container">
      <header>
        <nav>
          <img src={logo} alt="Logo" className="logo" />
          <div className="search-bar">
        <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
        <button>Search</button>
      </div>
          <ul>
            <li>Discover</li>
            <li>Buy</li>
            <li>Sell</li>
            
            <li>
              <Link to="/WalletPage">Connect Wallet</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Welcome back {username} !</h2>
          <h1>Discover and collect</h1>
          <p>Discover, collect, and sell extraordinary NFTs on the world's first and largest NFT marketplace.</p>
        </section>

        <section>
          <h2>Featured Collections</h2>
          <Carousel searchTerm={searchTerm} usrname={username}/>
        </section>
      </main>
      <footer>
        <p>© 2023 NFT Marketplace by Dylan, Ilan & Tal</p>
      </footer>
    </div>
  );
};

export default HomePageConnected;

