

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NFTpage = () => {
  const { username, name, price } = useParams();
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    import(`../images/NFTs/${name.toLowerCase()}.jpg`)
      .then((imageModule) => {
        setImageSrc(imageModule.default);
      })
      .catch((error) => {
        console.error('Error loading image:', error);
      });
  }, [name]);

  function getRandomName() {
    const names = ["Dylan", "Ilan", "Tal"];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }

  const randomName = getRandomName();

  const handleBuyClick = () => {
    if (username === 'undefined') {
      // Redirect to LoginPage if username is undefined in the URL
      window.location.href = 'http://localhost:3000/LoginPage';
    } else {
      // Redirect to NFTpurchase if username is defined in the URL
      window.location.href = `http://localhost:3000/purchase/${randomName}/${username}/${name}/${price}`;    }
  };

  return (
    <div className="nft-page">
      <h1>{name}</h1>
      <div className="image-container">
        {imageSrc && <img src={imageSrc} alt={name} />}
      </div>
      <h2>{price} ETH</h2>
      <p>Owned by {randomName}</p>
      <button onClick={handleBuyClick}>Buy this NFT</button>
      <p>{username}</p>
    </div>
  );
};

export default NFTpage;
