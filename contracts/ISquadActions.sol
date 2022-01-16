// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "./SquadERC20.sol";

interface ISquadActions {
    function addSquad(address _squadAddress) external;
}