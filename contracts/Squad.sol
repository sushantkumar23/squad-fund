// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "./SquadERC20.sol";

contract Squad {
    address public nftCollectionAddress;
    uint public maxFundSize;
    string public purpose;
    string public fundCode;
    uint public currentInvestment;
    uint public minInvestment;
    uint public maxInvestment;
    uint public totalSupply;
    SquadERC20 public squadToken;
    address public initiator;
    uint8 public status; // 1:PENDING, 2:LIVE, 3:EXPIRED, 4:CLOSED, 5:ACQUIRED
    address squadActionAddress;

    event StatusUpdated(uint8 status);
    event SquadActionControllerUpdated(address squadActionController);
    event CurrentInvestmentUpdated(uint investment);

    constructor(address _nftCollectionAddress, uint _maxFundSize, string memory _purpose, string memory _fundCode, address _initiator, uint _minInvestment, uint _maxInvestment, uint _totalSupply, address _squadActionAddress) {
        nftCollectionAddress = _nftCollectionAddress;
        maxFundSize = _maxFundSize;
        purpose = _purpose;
        fundCode = _fundCode;
        minInvestment = _minInvestment;
        maxInvestment = _maxInvestment;
        totalSupply = _totalSupply;
        initiator = _initiator;
        squadActionAddress = _squadActionAddress;

        bytes memory name = abi.encodePacked(_fundCode);
        name = abi.encodePacked(name, " Squad");

        squadToken = new SquadERC20(string(name), _fundCode, _totalSupply);
        squadToken.transfer(_squadActionAddress, _totalSupply);

        status = 1;
    }

    function isController() internal view {
        require(msg.sender == squadActionAddress, "not allowed");
    }

    function updateStatus(uint8 _status) public {
        isController();
        status = _status;
        emit StatusUpdated(_status);
    }

    function updateCurrentInvestment(uint _currentInvestment) public {
        isController();
        currentInvestment = _currentInvestment;
        emit CurrentInvestmentUpdated(currentInvestment);
    }

    function updateSquadActionController(address _actionController) public {
        isController();
        squadActionAddress = _actionController;
        emit SquadActionControllerUpdated(squadActionAddress);
    }
}