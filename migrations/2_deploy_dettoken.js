const DETToken = artifacts.require("DETToken");

module.exports = async function (deployer) {
  await deployer.deploy(DETToken);
};
