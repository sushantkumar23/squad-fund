// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./Squad.sol";
import "./ISquadActions.sol";

contract SquadFactory is Ownable {
    Squad private squad;
    address squadActionAddress;
    address[] public squads;
    mapping (address => address[]) initiators;

    event SquadActionAddressUpdated(address squadActionAddress);
    event SquadCreated(address indexed initiator, address squadAddress);

    constructor() {

    }

    function setSquadActionAddress(address _squadActionAddress) public onlyOwner {
        squadActionAddress = _squadActionAddress;
        emit SquadActionAddressUpdated(squadActionAddress);
    }

    function getSquadCount() public view returns (uint) {
        return squads.length;
    }

    function getSquadsByCreators(address _initiator) public view returns (address[] memory) {
        return initiators[_initiator];
    }

    function getERC721Data(address _contractAddress, address _owner) public view returns (bool) {
        IERC721 token = IERC721(_contractAddress);
        require(token.balanceOf(_owner) > 0, "must own nft");
        return true;
    }


    function createSquad(address _nftCollectionAddress, uint _maxFundSize, string memory _purpose, string memory _fundCode, uint _minInvestment, uint _maxInvestment, uint _totalSupply) public {
        getERC721Data(_nftCollectionAddress, msg.sender);
        squad = new Squad(_nftCollectionAddress, _maxFundSize, _purpose, _fundCode, msg.sender, _minInvestment, _maxInvestment, _totalSupply, squadActionAddress);
        squads.push(address(squad));
        ISquadActions(squadActionAddress).addSquad(address(squad));
        emit SquadCreated(msg.sender, address(squad));
    }
}