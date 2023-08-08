// // HomePageConnected.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// import logo from '../images/logo/logo.jpg';
// import Carousel from './Carousel';
// import '../Styles.css';

// const HomePageConnected = (props) => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = (event) => {
//       setSearchTerm(event.target.value);
//     };

//     // Function to extract the username from the URL
//   const getUsernameFromURL = () => {
//     const params = new URLSearchParams(window.location.search);
//     return params.get('username') || ''; // If the username parameter is not present, return an empty string
//   };

//   const username = getUsernameFromURL();
//   return (
//     <div className="container">
//       <header>
//         <nav>
//           <img src={logo} alt="Logo" className="logo" />
//           <div className="search-bar">
//         <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
//         <button>Search</button>
//       </div>
//           <ul>
//             <li>Discover</li>
//             <li>Buy</li>
//             <li>Sell</li>
            
//             <li>
//               <Link to="/WalletPage">Connect Wallet</Link>
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <main>
//         <section>
//           <h2>Welcome back {username} !</h2>
//           <h1>Discover and collect</h1>
//           <p>Discover, collect, and sell extraordinary NFTs on the world's first and largest NFT marketplace.</p>
//         </section>

//         <section>
//           <h2>Featured Collections</h2>
//           <Carousel searchTerm={searchTerm} usrname={username}/>
//         </section>
//       </main>
//       <footer>
//         <p>© 2023 NFT Marketplace by Dylan, Ilan & Tal</p>
//       </footer>
//     </div>
//   );
// };

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo/logo.jpg';
import Carousel from './Carousel';
import '../Styles.css';
import ShowEthAddress from './ShowEthAdress';
import Balance from './Balance';

const HomePageConnected = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to extract the username from the URL
  const getUsernameFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('username') || ''; // If the username parameter is not present, return an empty string
  };

  const username = getUsernameFromURL();
  return (
    <div className="container">
      <header>
        <nav>
          <img src={logo} alt="Logo" className="logo" style={{paddingRight: '30px'}} />
          <div className="search-bar" style={{border: '1px solid black', borderRadius: '5px'}}>
            <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
            <button>Search</button>
          </div>
          <div style={{ position: 'relative', width: 'fit-content', margin: '0 auto', background: 'blue', color: 'white', padding: '5px', borderRadius: '8px', paddingLeft: '10px', paddingRight: '10px' }}>
            <Balance />
          </div>
          <ul style={{paddingLeft: '40px', paddingRight: '70px'}}>
            <li>Discover</li>
            <li>Buy</li>
            <li>
              <Link to="/SellPage">Sell</Link>
            </li>
            <li>
              <Link to="/WalletPage">Connect Wallet</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
        <h2 style={{ color: 'blue', textAlign: 'center' }}>Welcome back {username} !</h2>

          <h1 style={{textAlign: 'center', color: 'black'}}>Discover and collect</h1>
          <p style={{textAlign: 'center', color: 'black'}}>Discover, collect, and sell extraordinary NFTs on the world's first and largest NFT marketplace.</p>
        </section>

        <section>
          <h2 style={{textAlign: 'center'}}>Featured Collections</h2>
          <Carousel searchTerm={searchTerm} usrname={username} />
        </section>
      </main>
      <footer>
        <p>© 2023 NFT Marketplace by Dylan, Ilan & Tal</p>
      </footer>

     
      
    </div>
  );
};

export default HomePageConnected;