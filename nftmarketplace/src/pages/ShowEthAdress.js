
import Papa from 'papaparse';
import userData from '../back/users.csv';
import { useEffect, useState } from 'react';

// Custom hook to manage ethAddress state
export function useEthAddress() {
  const [ethAddress, setEthAddress] = useState('');

  useEffect(() => {
    const fetchUsersData = async () => {
      const response = await fetch(userData);
      const csvData = await response.text();

      Papa.parse(csvData, {
        header: true,
        complete: (results) => {
          const usersData = results.data;
          const getUsernameFromURL = () => {
            const params = new URLSearchParams(window.location.search);
            return params.get('username') || '';
          };

          const username = getUsernameFromURL();
          const user = usersData.find((u) => u.username === username);

          if (user) {
            setEthAddress(user.ethaddress);
          } else {
            setEthAddress('User not found');
          }
        },
      });
    };

    fetchUsersData();
  }, []);

  return ethAddress;
}

// This component is optional, you can still use the custom hook directly
const ShowEthAddress = () => {
  const ethAddress = useEthAddress();

  return (
    <>{ethAddress}</>
  );
};

export default ShowEthAddress;
