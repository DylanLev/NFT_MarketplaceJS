// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// const NFTPurchase = () => {
//   const { from, to, NFTname, price } = useParams();
//   const [paymentOption, setPaymentOption] = useState('');

//   const handlePaymentOptionChange = (e) => {
//     setPaymentOption(e.target.value);
//   };

//   const handlePurchase = () => {
//     // Handle the purchase based on the selected payment option
//     if (paymentOption === 'metamask') {
//       // Handle Metamask payment (Not implemented in this example)
//       alert('Payment with Metamask is not implemented in this example.');
//     } else if (paymentOption === 'creditCard') {
//       // Handle credit card payment (Not implemented in this example)
//       alert('Payment with credit card is not implemented in this example.');
//     } else {
//       alert('Please select a payment option.');
//     }
//   };

//   return (
//     <div className="nft-purchase">
//       <h1>Buy NFT</h1>
//       <h3>{from}, You are about to purchase {NFTname} (owned by {to}) for {price} ETH</h3>
//       <div className="payment-options">
//         <div className="split-screen">
//           <div className={`option ${paymentOption === 'metamask' ? 'selected' : ''}`}>
//             <label>
//               <input
//                 type="radio"
//                 value="metamask"
//                 checked={paymentOption === 'metamask'}
//                 onChange={handlePaymentOptionChange}
//               />
//               Pay with Metamask
//             </label>
//           </div>
//           <div className={`option ${paymentOption === 'creditCard' ? 'selected' : ''}`}>
//             <label>
//               <input
//                 type="radio"
//                 value="creditCard"
//                 checked={paymentOption === 'creditCard'}
//                 onChange={handlePaymentOptionChange}
//               />
//               Pay with Credit Card
//             </label>
//           </div>
//         </div>
//       </div>
//       <div className="purchase-button">
//         <button onClick={handlePurchase}>Purchase</button>
//       </div>
//     </div>
//   );
// };

// export default NFTPurchase;
// NFTPurchase.js

//2

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { displayEthAddressesFromURL } from './DisplayEthAdresses'; // Import the function
const renaming = require('./Renaming');
const displayethaddress = require('./DisplayEthAdresses');


const NFTPurchase = () => {
  const { from, to, NFTname, price } = useParams();
  const [paymentOption, setPaymentOption] = useState('');

  const urlParts = window.location.href.split('/');
  const username = urlParts[urlParts.length - 3]; // Assuming the username is always the second-to-last part after the last '/'
  
  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);
  };


const balance=0.01;


// Get the last parameter 
const lastParameter = urlParts[urlParts.length - 1];
console.log(lastParameter); 

  const handlePurchase = () => {
    // Handle the purchase based on the selected payment option
    if (paymentOption === 'metamask') {
      // Handle Metamask payment 
      if(balance>=lastParameter){
      window.location.href = `http://localhost:3000/successful/${username}`;
      }
      else{
        window.location.href = `http://localhost:3000/failure/${username}`;
      }

    } else if (paymentOption === 'creditCard') {
      // Handle credit card payment (Not implemented in this example)
      alert('Payment with credit card is not implemented in this example.');
    } else {
      alert('Please select a payment option.');
    }
  };

  
  const purchaseIndex = urlParts.indexOf("purchase");
  //const sellername = urlParts[purchaseIndex + 1];
  const buyername = urlParts[purchaseIndex + 2];
  const sellername=renaming(urlParts[purchaseIndex + 1]);
  const buyeraddress=displayethaddress(buyername);
  const selleraddress=displayethaddress(sellername);



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
