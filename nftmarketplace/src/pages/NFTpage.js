import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NFTpage = () => {
  const { name, price } = useParams();
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

  return (
    <div className="nft-page">
      <h1>{name}</h1>
      <div className="image-container">
        {imageSrc && <img src={imageSrc} alt={name} />}
      </div>
      <h2>{price} ETH</h2>
      <p>Owned by {randomName}</p>
      <button>Buy this NFT</button>
    </div>
  );
};

export default NFTpage;
