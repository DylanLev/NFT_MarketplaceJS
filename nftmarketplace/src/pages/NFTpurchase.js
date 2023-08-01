import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const NFTPurchase = () => {
  const { from, to, NFTname, price } = useParams();
  const [paymentOption, setPaymentOption] = useState('');

  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);
  };

  const handlePurchase = () => {
    // Handle the purchase based on the selected payment option
    if (paymentOption === 'metamask') {
      // Handle Metamask payment (Not implemented in this example)
      alert('Payment with Metamask is not implemented in this example.');
    } else if (paymentOption === 'creditCard') {
      // Handle credit card payment (Not implemented in this example)
      alert('Payment with credit card is not implemented in this example.');
    } else {
      alert('Please select a payment option.');
    }
  };

  return (
    <div className="nft-purchase">
      <h1>Buy NFT</h1>
      <h3>{from}, You are about to purchase {NFTname} (owned by {to}) for {price} ETH</h3>
      <div className="payment-options">
        <div className="split-screen">
          <div className={`option ${paymentOption === 'metamask' ? 'selected' : ''}`}>
            <label>
              <input
                type="radio"
                value="metamask"
                checked={paymentOption === 'metamask'}
                onChange={handlePaymentOptionChange}
              />
              Pay with Metamask
            </label>
          </div>
          <div className={`option ${paymentOption === 'creditCard' ? 'selected' : ''}`}>
            <label>
              <input
                type="radio"
                value="creditCard"
                checked={paymentOption === 'creditCard'}
                onChange={handlePaymentOptionChange}
              />
              Pay with Credit Card
            </label>
          </div>
        </div>
      </div>
      <div className="purchase-button">
        <button onClick={handlePurchase}>Purchase</button>
      </div>
    </div>
  );
};

export default NFTPurchase;
