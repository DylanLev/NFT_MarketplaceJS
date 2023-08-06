/* eslint-disable no-undef */
const Contract = require('@truffle/contract');
const TransferContract = artifacts.require('TransferContract');

module.exports = function (deployer) {
  deployer.deploy(TransferContract).then(function() {
    return TransferContract.deployed();
  }).then(function(instance) {
    // You can access the deployed contract instance using 'instance'
    console.log('Contract address:', instance.address);
    // You can interact with the contract or do any post-deployment tasks here
  });
};
/* eslint-enable no-undef */
