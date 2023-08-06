// DisplayEthAdresses.js

const ethAddressesData = [
    { _id: "64b80ba174f588632b1a202e", username: "dylanle", password: "Azerty123.", ethaddress: "0xB9cc9B74F58Bf05CD057C9cd6aa9b6A0E06C714a" },
    { _id: "64b80ba174f588632b1a202f", username: "talmi", password: "Azerty123.", ethaddress: "0x08D4f1Be24246b7b315b1E643C2E191121A12464" },
    { _id: "64b80ba174f588632b1a2030", username: "ilanma", password: "Azerty123.", ethaddress: "0xBf88755480532445ef4A5b8e15edEe5c82B2317c" },
  ];
  

  function getEthAddressByUsername(username) {
    const user = ethAddressesData.find((data) => data.username === username);
    return user ? user.ethaddress : null;
  }

  module.exports = getEthAddressByUsername;