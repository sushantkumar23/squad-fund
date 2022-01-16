const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = "0x8e89e73817B4583130aa838345d4Ce1383AEfd83";

const contract = require("../artifacts/contracts/squad-factory.sol/SquadFactory.json");

// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="rinkeby", API_KEY);
// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);
// Contract
const SqaudFactoryContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const data = await SqaudFactoryContract.getERC721Data("0x7d61c2a694e1a04574c0f85de3a62a164fcc5e83", "0x5C2cc3d2b67272191944E112700c880B8958CE9c");
    console.log("The data is: " + data);
}

main();