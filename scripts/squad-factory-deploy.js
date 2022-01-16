async function main() {
    const SquadFactory = await ethers.getContractFactory("SquadFactory");

    // Start deployment, returning a promise that resolves to a contract object
    const squad_factory = await SquadFactory.deploy();   
    console.log("SquadFactory Contract deployed to address:", squad_factory.address);
}
 
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });



// contract address : 0x4363064fb6E4c68C9138E225b75294Ca738c3c58
// 0xbff17284045984A461af823B8f1efb72302b0037