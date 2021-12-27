var TodooList = artifacts.require("./TodooList.sol");

module.exports = function(deployer) {
  deployer.deploy(TodooList);
};