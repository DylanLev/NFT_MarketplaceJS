// // export default LoginPage;
// import React, { useState, useEffect } from 'react';
// import Papa from 'papaparse';
// import { Link } from 'react-router-dom';
// import userData from '../back/users.csv';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginError, setLoginError] = useState(false);
//   const [usersData, setUsersData] = useState([]);

//   useEffect(() => {
//     const fetchUsersData = async () => {
//       const response = await fetch(userData); // Assuming `userData` is the correct path to your CSV file.
//       const csvData = await response.text();

//       Papa.parse(csvData, {
//         header: true,
//         complete: (results) => {
//           setUsersData(results.data);
//         },
//       });
//     };

//     fetchUsersData();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(usersData); // Check if usersData is populated with the parsed CSV data.

//     // Check if the combination of username and password exists
//     let isValidUser = false;
//     for (const user of usersData) {
//       if (user.username === username && user.password === password) {
//         isValidUser = true;
//         break;
//       }
//     }

//     console.log('isValidUser:', isValidUser);

//     if (isValidUser) {
//       // Redirect to localhost:3000/index if the user exists
//       window.location.href = 'http://localhost:3000/index';
//     } else {
//       // Show login error message
//       setLoginError(true);
//     }
//   };

  // return (
    
  //   <div className="login-page">
  //     <h1>Login</h1>
  //     <form onSubmit={handleSubmit}>
  //       <div className="form-group">
  //         <label htmlFor="username">Username</label>
  //         <input
  //           type="text"
  //           id="username"
  //           required
  //           value={username}
  //           onChange={(e) => setUsername(e.target.value)}
  //         />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="password">Password</label>
  //         <input
  //           type="password"
  //           id="password"
  //           required
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //       </div>
  //       <button type="submit">Login</button>
  //     </form>
  //     {loginError && <div className="error-message">Invalid username/password combination</div>}
  //     <div className="signup-link">
  //       Don't have an account yet? <Link to="/SignupPage">Create one</Link>
  //     </div>
  //     <button id="mainbtn">
  //       <Link to="/">Back to Main page</Link>
  //     </button>
  //   </div>
    
//   );
// };

// export default LoginPage;

import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Link } from 'react-router-dom';
import userData from '../back/users.csv';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      const response = await fetch(userData); // Assuming `userData` is the correct path to your CSV file.
      const csvData = await response.text();

      Papa.parse(csvData, {
        header: true,
        complete: (results) => {
          setUsersData(results.data);
        },
      });
    };

    fetchUsersData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(usersData); // Check if usersData is populated with the parsed CSV data.

    // Check if the combination of username and password exists
    let isValidUser = false;
    for (const user of usersData) {
      if (user.username === username && user.password === password) {
        isValidUser = true;
        break;
      }
    }

    console.log('isValidUser:', isValidUser);

    if (isValidUser) {
      // Redirect to localhost:3000/index with the username as a parameter
      window.location.href = `http://localhost:3000/index?username=${username}`;
    } else {
      // Show login error message
      setLoginError(true);
    }
  };

  return (
    
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {loginError && <div className="error-message">Invalid username/password combination</div>}
      <div className="signup-link">
        Don't have an account yet? <Link to="/SignupPage">Create one</Link>
      </div>
      <button id="mainbtn">
        <Link to="/">Back to Main page</Link>
      </button>
    </div>
  );
};

export default LoginPage;
