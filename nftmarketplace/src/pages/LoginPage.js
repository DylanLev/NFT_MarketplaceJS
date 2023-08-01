// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import userData from '../back/users.csv';

// const parseCSV = (csvString) => {
//   const lines = csvString.trim().split('\n');
//   const headers = lines.shift().split(',');
//   return lines.map((line) => {
//     const values = line.split(',');
//     const obj = {};
//     headers.forEach((header, index) => {
//       obj[header] = values[index];
//     });
//     return obj;
//   });
// };

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginError, setLoginError] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Parse the CSV data
//     const usersData = parseCSV(userData);

//     console.log('usersData:', usersData);
//     console.log('username:', username);
//     console.log('password:', password);

//     // Check if the combination of username and password exists
//     let isValidUser = false;
//     for (const user of usersData) {
//       console.log('user:', user);
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

//   return (
//     <div className="login-page">
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             required
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {loginError && <div className="error-message">Invalid username/password combination</div>}
//       <div className="signup-link">
//         Don't have an account yet? <Link to="/SignupPage">Create one</Link>
//       </div>
//       <button id="mainbtn">
//         <Link to="/">Back to Main page</Link>
//       </button>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userData from '../back/users.csv';

const parseCSV = (csvString) => {
  const lines = csvString.trim().split('\n');
  const headers = lines.shift().split(',');
  return lines.map((line) => {
    const values = line.split(',');
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = values[index];
    });
    return obj;
  });
};

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Parse the CSV data
    const usersData = parseCSV(userData);

    // Check if the combination of username and password exists
    let isValidUser = false;
    for (const user of usersData) {
      if (user.username === username && user.password === password) {
        isValidUser = true;
        break;
      }
    }

    if (isValidUser) {
      // Redirect to localhost:3000/index if the user exists
      window.location.href = 'http://localhost:3000/index';
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

