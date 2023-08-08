
// SPDX-License-Identifier: MIT
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


// pragma solidity ^0.8.0;

// contract TransferContract {
//     address public seller;
//     address public buyer;

//     constructor() {
//         seller = msg.sender;
//     }

//     // La fonction d'achat doit être appelée par l'acheteur
//     function buyNFT() external payable {
//         require(buyer == address(0), "NFT already purchased.");
//         require(msg.value > 0, "Value must be greater than 0.");

//         buyer = msg.sender;
//     }

//     function transferValue(address payable _buyerAddress, uint256 _valueToTransfer) external {
//         require(msg.sender == buyer, "Only the buyer can transfer funds.");
//         require(_buyerAddress == buyer, "Invalid buyer address.");
//         require(_valueToTransfer > 0, "Value to transfer must be greater than 0.");

//         (bool success, ) = seller.call{value: _valueToTransfer}("");
//         require(success, "Transfer failed.");
//     }
// }
