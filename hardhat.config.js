require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config(); // For environment variable support

module.exports = {
  solidity: {
    version: "0.8.20", // Make sure this matches the version used in your contracts
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    localhost: {
      url: "http://localhost:8545"
    },
    // Example of another network configuration
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
    //   accounts: [`0x${process.env.PRIVATE_KEY}`]
    // }
  },
  // If you want to add additional configurations, you can add them here
};