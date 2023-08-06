import React from 'react';

const FailurePurchase = ({ paymentOption }) => {
  const handleGoToMainPage = () => {
    // Redirect to localhost:3000/index
    window.location.href = `http://localhost:3000/index?username=${username}`;
  };

  // Extract the username from the URL
  const urlParts = window.location.href.split('/');
  const username = urlParts[urlParts.length - 1]; // The last part of the URL after the last '/'

 


  return (
    <div style={styles.container}>
      <h2>Failed to purchase this NFT, your ETH balance is too low!</h2>
      <button onClick={handleGoToMainPage} style={styles.button}>
        Go to Main Page
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default FailurePurchase;
