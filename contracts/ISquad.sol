// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "./SquadERC20.sol";

interface ISquad {
    function updateStatus(uint8) external;
    function updateCurrentInvestment(uint) external;
    function updateSquadActionController(address) external;

    function nftCollectionAddress() external view returns (address);
    function maxFundSize() external view returns (uint);
    function purpose() external view returns (string memory);
    function currentInvestment() external view returns (uint);
    function minInvestment() external view returns (uint);
    function maxInvestment() external view returns (uint);
    function squadToken() external view returns (address);
    function status() external view returns (uint8);
    function initiator() external view returns (address);
}