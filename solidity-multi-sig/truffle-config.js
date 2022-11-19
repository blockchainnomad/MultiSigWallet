
const HDWalletProvider = require('@truffle/hdwallet-provider');
require("dotenv").config();
const { mnemonic, etherscan, rpc } = process.env

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 9545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    goerli: {
      provider: new HDWalletProvider(mnemonic, rpc),
      network_id: 5,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
  compilers: {
    solc: {
      version: "0.5.16",      // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
  // 컨트랙트 검증 플러그인
  plugins: [
    'truffle-plugin-verify'
  ],
  // 이더스캔 API key
  api_keys: {
    etherscan: etherscan
  }
};
