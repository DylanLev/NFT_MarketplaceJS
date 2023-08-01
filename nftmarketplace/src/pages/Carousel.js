// Carousel.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  { image: nft1, name: 'Aquarelle', price: 0.001 },
  { image: nft2, name: 'Balloons', price: 0.001 },
  { image: nft3, name: 'Cigarette', price: 0.001 },
  { image: nft4, name: 'Clouds', price: 0.001 },
  { image: nft5, name: 'Coin', price: 0.001 },
  { image: nft6, name: 'Colors', price: 0.001 },
  { image: nft7, name: 'Cross', price: 0.001 },
  { image: nft8, name: 'Cryptoart', price: 0.001 },
  { image: nft9, name: 'Cubes', price: 0.001 },
  { image: nft10, name: 'Deer', price: 0.001 },
  { image: nft11, name: 'Fish', price: 0.001 },
  { image: nft12, name: 'Lasers', price: 0.001 },
  { image: nft13, name: 'Light', price: 0.001 },
  { image: nft14, name: 'Love', price: 0.001 },
  { image: nft15, name: 'Man', price: 0.001 },
  { image: nft16, name: 'Metaverse', price: 0.001 },
  { image: nft17, name: 'Mix', price: 0.001 },
  { image: nft18, name: 'Monkey', price: 0.001 },
  { image: nft19, name: 'Mountains', price: 0.001 },
  { image: nft20, name: 'Painting', price: 0.001 },
  { image: nft21, name: 'Purple', price: 0.001 },
  { image: nft22, name: 'QR Code', price: 0.001 },
  { image: nft23, name: 'Red', price: 0.001 },
  { image: nft24, name: 'Red Moon', price: 0.001 },
];

const Carousel = ({ searchTerm }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? nftImages.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === nftImages.length - 1 ? 0 : prevSlide + 1));
  };
  const filteredImages = nftImages.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="carousel">
      <button className="carousel-navigation previous" onClick={goToPreviousSlide}>
        &#8249;
      </button>
      <div className="carousel-images">
        {filteredImages.map((item, index) => (
          <Link key={index} to={`/NFTpage/${item.name}/${item.price}`}>
            <div
              className={`carousel-image ${index === currentSlide ? 'active' : ''}`}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <img src={item.image} alt={`NFT ${index + 1}`} />
              <div className="image-details">
                <div className="image-name">{item.name}</div>
                <div className="image-floor">Floor: {item.price} ETH</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button className="carousel-navigation next" onClick={goToNextSlide}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;