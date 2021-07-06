const DETDevice = artifacts.require("DETDevice");

module.exports = async function (deployer) {
    await deployer.deploy(DETDevice);
};
