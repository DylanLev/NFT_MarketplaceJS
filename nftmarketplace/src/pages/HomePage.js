// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo/logo.jpg';
import Carousel from './Carousel';
import '../Styles.css';

const HomePage = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <img src={logo} alt="Logo" className="logo" />
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
          <ul>
            <li>Discover</li>
            <li>Buy</li>
            <li>Sell</li>
            <li>My Collections</li>
            <li>
              <Link to="/WalletPage">Connect Wallet</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>Discover and collect</h1>
          <p>Discover, collect, and sell extraordinary NFTs on the world's first and largest NFT marketplace.</p>
        </section>
        <section>
          <h2>Featured Collections</h2>
          <Carousel />
        </section>
      </main>
      <footer>
        <p>© 2023 NFT Marketplace by Dylan, Ilan & Tal</p>
      </footer>
    </div>
  );
};

export default HomePage;
