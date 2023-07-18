import React, { useState } from 'react';
import '../Styles.css';
import { Link } from 'react-router-dom';


import logo from '../images/logo/logo.jpg';

import nft1 from '../images/NFTs/aquarelle.jpg';
import nft2 from '../images/NFTs/balloons.jpg';
import nft3 from '../images/NFTs/cigarette.jpg';
import nft4 from '../images/NFTs/clouds.jpg';
import nft5 from '../images/NFTs/coin.jpg';
import nft6 from '../images/NFTs/colors.jpg';
import nft7 from '../images/NFTs/cross.jpg';
import nft8 from '../images/NFTs/cryptoart.jpg';
import nft9 from '../images/NFTs/cubes.jpg';
import nft10 from '../images/NFTs/deer.jpg';
import nft11 from '../images/NFTs/fish.jpg';
import nft12 from '../images/NFTs/lasers.jpg';
import nft13 from '../images/NFTs/light.jpg';
import nft14 from '../images/NFTs/love.jpg';
import nft15 from '../images/NFTs/man.jpg';
import nft16 from '../images/NFTs/metaverse.jpg';
import nft17 from '../images/NFTs/mix.jpg';
import nft18 from '../images/NFTs/monkey.jpg';
import nft19 from '../images/NFTs/mountains.jpg';
import nft20 from '../images/NFTs/painting.jpg';
import nft21 from '../images/NFTs/purple.jpg';
import nft22 from '../images/NFTs/qrcode.jpg';
import nft23 from '../images/NFTs/red.jpg';
import nft24 from '../images/NFTs/redmoon.jpg';

const nftImages = [
  { image: nft1, name: 'Aquarelle' },
  { image: nft2, name: 'Balloons' },
  { image: nft3, name: 'Cigarette' },
  { image: nft4, name: 'Clouds' },
  { image: nft5, name: 'Coin' },
  { image: nft6, name: 'Colors' },
  { image: nft7, name: 'Cross' },
  { image: nft8, name: 'Cryptoart' },
  { image: nft9, name: 'Cubes' },
  { image: nft10, name: 'Deer' },
  { image: nft11, name: 'Fish' },
  { image: nft12, name: 'Lasers' },
  { image: nft13, name: 'Light' },
  { image: nft14, name: 'Love' },
  { image: nft15, name: 'Man' },
  { image: nft16, name: 'Metaverse' },
  { image: nft17, name: 'Mix' },
  { image: nft18, name: 'Monkey' },
  { image: nft19, name: 'Mountains' },
  { image: nft20, name: 'Painting' },
  { image: nft21, name: 'Purple' },
  { image: nft22, name: 'QR Code' },
  { image: nft23, name: 'Red' },
  { image: nft24, name: 'Red Moon' },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? nftImages.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === nftImages.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-navigation previous" onClick={goToPreviousSlide}>
        &#8249;
      </button>
      <div className="carousel-images">
        {nftImages.map((item, index) => (
          <div
            key={index}
            className={`carousel-image ${index === currentSlide ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <img src={item.image} alt={`NFT ${index + 1}`} />
            <div className="image-details">
              <div className="image-name">{item.name}</div>
              <div className="image-floor">Floor: {Math.random() * 4} ETH</div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-navigation next" onClick={goToNextSlide}>
        &#8250;
      </button>
    </div>
  );
};

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
            <li> Connect Wallet</li>

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
