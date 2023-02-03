const MultiSigWallet = artifacts.require("MultiSigWallet");

module.exports = function (deployer) {
  deployer.deploy(MultiSigWallet, ["0xC587A2A2b010478F261a630bD21e10512439A226", "0xA1DeFD82D7482B261458923C4Fc0D4573e6aF244", "0x7a9AdC4f22aca6a9e505C7207738A0AA46d5b4b1"], 2);
};
