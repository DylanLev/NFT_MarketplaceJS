// HomePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo/logo.jpg';
import Carousel from './Carousel';
import '../Styles.css';

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  return (
    <div className="container">
      <header>
        <nav>
          <img src={logo} alt="Logo" className="logo" style={{paddingRight: '30px'}}/>
          <div className="search-bar" style={{border: '1px solid black', borderRadius: '5px'}}>
        <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
        <button>Search</button>
      </div>
          <ul style={{paddingLeft: '40px', paddingRight: '70px'}}>
            <li>Discover</li>
            
            <li>
              <Link to="/LoginPage">Login</Link>
            </li>
            
            
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1 style={{textAlign: 'center'}}>Discover and collect</h1>
          <p style={{textAlign: 'center', color: 'black'}}>Discover, collect, and sell extraordinary NFTs on the world's first and largest NFT marketplace.</p>
        </section>
        <section>
          <h2 style={{textAlign: 'center'}}>Featured Collections</h2>
          
      <Carousel searchTerm={searchTerm} />
        </section>
      </main>
      <footer>
        <p>© 2023 NFT Marketplace by Dylan, Ilan & Tal</p>
      </footer>
    </div>
  );
};

export default HomePage;