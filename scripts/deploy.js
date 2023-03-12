const hre = require("hardhat");

async function main() {
    const MerkleTree = await hre.ethers.getContractFactory("MerkleTreeVerifier");
    const merkletree = await MerkleTree.deploy();
    await merkletree.deployed();
    console.log("Contract Deployed To: ", merkletree.address)
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