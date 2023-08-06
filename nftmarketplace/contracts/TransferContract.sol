// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TransferContract {
    address public seller;
    address public buyer;

    constructor() {
        seller = msg.sender;
    }

    function transferValue(address _buyerAddress, uint256 _valueToTransfer) external {
        require(msg.sender == buyer, "Only the buyer can transfer funds.");
        require(_buyerAddress == buyer, "Invalid buyer address.");
        require(_valueToTransfer > 0, "Value to transfer must be greater than 0.");

        (bool success, ) = seller.call{value: _valueToTransfer}("");
        require(success, "Transfer failed.");
    }
}
