
// //import Web3 from 'web3';
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { displayEthAddressesFromURL } from './DisplayEthAdresses'; // Import the function
// //import TransferContract from '../build/contracts/TransferContract.json';


// const renaming = require('./Renaming');
// const displayethaddress = require('./DisplayEthAdresses');


// const NFTPurchase = () => {
//   const { from, to, NFTname, price } = useParams();
//   const [paymentOption, setPaymentOption] = useState('');

//   const urlParts = window.location.href.split('/');
//   const username = urlParts[urlParts.length - 3]; // Assuming the username is always the second-to-last part after the last '/'
  
//   const handlePaymentOptionChange = (e) => {
//     setPaymentOption(e.target.value);
//   };


//   // Connect to the local Ethereum node provided by Metamask
//   //const web3 = new Web3(window.ethereum);

//   //Get the contract instance
//   //const contractAddress = '0xd39A5d941ACFb970659ab5020436ac1065266F78'; 
//   //const contractInstance = new web3.eth.Contract(TransferContract.abi, contractAddress);

  
// const balance=0.01;


// // Get the last parameter 
// const lastParameter = urlParts[urlParts.length - 1];


//   const handlePurchase = async () => {
//     // Handle the purchase based on the selected payment option
//     if (paymentOption === 'metamask') {
//       // Handle Metamask payment 
//       if(balance>=lastParameter){
//       window.location.href = `http://localhost:3000/successful/${username}`;
//       }
//       else{
//         window.location.href = `http://localhost:3000/failure/${username}`;
//       }

//     } else if (paymentOption === 'creditCard') {
//       // Handle credit card payment (Not implemented in this example)
//       alert('Payment with credit card is not implemented in this example.');
//     } else {
//       alert('Please select a payment option.');
//     }
//   };

  
//   const purchaseIndex = urlParts.indexOf("purchase");
//   //const sellername = urlParts[purchaseIndex + 1];
//   const buyername = urlParts[purchaseIndex + 2];
//   const sellername=renaming(urlParts[purchaseIndex + 1]);
//   const buyeraddress=displayethaddress(buyername);
//   const selleraddress=displayethaddress(sellername);



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


import Web3 from 'web3';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { displayEthAddressesFromURL } from './DisplayEthAdresses'; // Import the function
import TransferContract from '../contracts/TransferContract.json';


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


  const purchaseIndex = urlParts.indexOf("purchase");
  const buyername = urlParts[purchaseIndex + 2];
  const sellername=renaming(urlParts[purchaseIndex + 1]);
  const buyeraddress=displayethaddress(buyername);
  const selleraddress=displayethaddress(sellername);
  



// Get the last parameter 
const lastParameter = urlParts[urlParts.length - 1];


  const handlePurchase = async () => {
    // Handle the purchase based on the selected payment option
    if (paymentOption === 'metamask') {
      if (window.ethereum) {
        console.log("Windows.ethereum CHECK");
        
        // Connect to the local Ethereum node provided by Metamask
         const web3 = new Web3(window.ethereum);
         console.log("web3: "+web3);

      try {        
        console.log("try CHECK");

        // Request account access from the user
        await window.ethereum.enable();

        // Contract address on Goerli network
        const contractAddress = '0xd39A5d941ACFb970659ab5020436ac1065266F78'; 

        // Contract ABI (Application Binary Interface)
        const contractABI = [
          {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "inputs": [],
            "name": "buyer",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [],
            "name": "seller",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "_buyerAddress",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_valueToTransfer",
                "type": "uint256"
              }
            ],
            "name": "transferValue",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        
        ];

        // Create contract instance
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        console.log("contract: "+contract);

        // Buyer and seller addresses
        const buyerAddress = buyeraddress;
        const sellerAddress = selleraddress; 
        console.log("buyerAdress: "+buyerAddress);
        console.log("sellerAdress: "+sellerAddress);
        console.log('contractABI:', contractABI);
        console.log('contractAddress:', contractAddress);

        // Value to transfer in GoerliETH (in Wei)
        console.log(lastParameter);
        const value = web3.utils.toWei(lastParameter, 'ether'); // Replace with the desired value
        console.log("value: "+value);

        // Send transaction to transfer value from buyer to seller
        await contract.methods.transferValue(sellerAddress, value).send({ from: buyerAddress });

        // Transaction successful, redirect to success page
        window.location.href = `http://localhost:3000/successful/${username}`;
        

        console.log("END OF TRY BLOCK");

      } catch (error) {

        console.log("CATCH ERROR BLOCK: "+error);

        console.error('Error handling Metamask payment:', error);
        // Handle any error or redirect to a failure page
        window.location.href = `http://localhost:3000/failure/${username}`;
      }
    } else {
      alert('Please install and connect to Metamask to proceed with the payment.');
    }

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
