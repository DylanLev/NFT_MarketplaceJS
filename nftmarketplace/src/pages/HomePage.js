import React, { useState, useRef } from 'react';
import '../Styles.css';

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
  nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft8, nft9, nft10, nft11, nft12, nft13, nft14, nft15,
  nft16, nft17, nft18, nft19, nft20, nft21, nft22, nft23, nft24
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? nftImages.length - 1 : prevSlide - 1));
    scrollCarousel(currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === nftImages.length - 1 ? 0 : prevSlide + 1));
    scrollCarousel(currentSlide + 1);
  };

  const scrollCarousel = (slideIndex) => {
    const slideWidth = carouselRef.current.clientWidth;
    carouselRef.current.scrollTo({
      left: slideWidth * slideIndex,
      behavior: 'smooth',
    });
  };

  return (
    <div className="carousel">
      <button className="carousel-navigation previous" onClick={goToPreviousSlide}>&#8249;</button>
      <div className="carousel-images" ref={carouselRef}>
        {nftImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`NFT ${index + 1}`}
            className={`carousel-image ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>
      <button className="carousel-navigation next" onClick={goToNextSlide}>&#8250;</button>
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
            <li>Connect Wallet</li>
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
