import React, { useEffect, useState } from 'react';
import { useEthAddress } from './ShowEthAdress';

const Balance = () => {
  const [balance, setBalance] = useState(null);
  const ethAddress = useEthAddress();
  const etherscanApiKey = '4S26PU2HJGYJWEFUMUK4S4P4NMMN8PBJ81';
  console.log("Eth Address:", ethAddress);


  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch(
          `https://api-goerli.etherscan.io/api?module=account&action=balance&address=${ethAddress}&tag=latest&apikey=${etherscanApiKey}`
        );
        const data = await response.json();
        if (data.status === '1') {
          // Etherscan API returns the balance in wei, so we need to convert it to Ether
          const balanceInEther = parseFloat(data.result) / 10 ** 18;
          setBalance(balanceInEther);
        } else {
          setBalance(null);
        }
      } catch (error) {
        console.error('Error fetching balance:', error);
        setBalance(null);
      }
    };

    fetchBalance();
  }, [ethAddress, etherscanApiKey]);

  return (
    <div>
      <h2>Balance: </h2>
      {balance !== null ? (
        <p style={{ color: 'white' }}>{balance.toFixed(4)} ETH</p>
      ) : (
        <p style={{ color: 'white' }}>Failed to fetch balance.</p>
      )}
    </div>
  );
};

export default Balance;
