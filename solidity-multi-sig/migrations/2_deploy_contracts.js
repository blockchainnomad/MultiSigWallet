const MultiSigWallet = artifacts.require("MultiSigWallet");

module.exports = function (deployer) {
  deployer.deploy(MultiSigWallet, ["0x930299393b940aD1824c87c9F8fBc71405E8bad2", "0x225F8A91EC24Bd0c31D815046eD7B9883FA03075", "0x827444865c281A73a603D81473313e16027dC985"], 2);
};
