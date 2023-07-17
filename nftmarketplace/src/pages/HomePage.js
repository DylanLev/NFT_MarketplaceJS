import React from 'react';
import '../Styles.css';

import logo from '../images/logo/logo.jpg';

// Importez les autres images de NFT ici

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
            <li>Connect Wallet</li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>Discover and collect</h1>
          <p>Discover, collect, and sell extraordinary NFTs on the world's first and largest NFT marketplace.</p>
          <button>Explore</button>
        </section>
        <section>
          <h2>Featured Collections</h2>
          <div className="nft-gallery">
            {/* <img src={nft1} alt="NFT 1" />
            <img src={nft2} alt="NFT 2" />
            <img src={nft3} alt="NFT 3" />
            Ajoutez les autres images de NFT ici */}
          </div>
        </section>
      </main>
      <footer>
        <p>© 2023 NFT Marketplace by Dylan, Ilan & Tal</p>
      </footer>
    </div>
  );
};

export default HomePage;
