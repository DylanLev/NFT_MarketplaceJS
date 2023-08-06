require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    goerli: {
      provider: () => new HDWalletProvider({
        providerOrUrl: process.env.WEB3_PROVIDER_URL || `https://goerli.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
        mnemonic: {
          phrase: process.env.MNEMONIC
        },
        chainId: 5,
      }),
      network_id: 5,
      gasPrice: 1000000000, // Adjust the gas price to your preference
      skipDryRun: true,
      timeoutBlocks: 200,
    },
    // Add other network configurations as needed
  },
  compilers: {
    solc: {
      version: '0.8.21', // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
  mocha: {
    // Timeout value for tests in milliseconds
    timeout: 60000,
  },
  db: {
    // Uncomment this if you want to enable Truffle DB
    // enabled: true,
    // host: '127.0.0.1',
    // adapter: {
    //   name: 'indexeddb',
    //   settings: {
    //     directory: '.db',
    //   },
    // },
  },
};
