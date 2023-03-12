const hre = require("hardhat");

async function main() {
    const MerkleTreeVerifier = await hre.ethers.getContractFactory("MerkleTreeVerifier");
    const merkletreeverifier = await MerkleTreeVerifier.deploy();
    await merkletreeverifier.deployed();
    console.log("Contract Deployed To: ", merkletreeverifier.address)
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();