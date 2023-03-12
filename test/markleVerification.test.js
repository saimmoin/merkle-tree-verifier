const { expect } = require("chai");
const hre = require("hardhat");
const {MerkleTree}  = require('merkletreejs')
const keccak256 = require('keccak256')

describe("Merkle Tree implementation", () => {
    describe("Fetch merkle root from array of string", () => {
        let  MerkleTreeVerifier;

        const alphas = ['a','b','c','d','e','f','g','h']
        
        const leaves = alphas.map(node => '0x'+keccak256(node).toString('hex'))
        const leaf = leaves[0];
        const tree = new MerkleTree(leaves, keccak256)
        const root = tree.getHexRoot();

        const proof = tree.getHexProof(leaf);

        console.log(leaf, root, proof);
        
        before(async () => {
            const MerkleTreeVerifierContract = await hre.ethers.getContractFactory("MerkleTreeVerifier");
            MerkleTreeVerifier = await MerkleTreeVerifierContract.deploy();
            await MerkleTreeVerifier.deployed();
            console.log("Contract Deployed To: ", MerkleTreeVerifier.address)

         })
        
         it('verify markle verification contract', async () => {
            expect(MerkleTreeVerifier.address).not.to.be.null
         })

        it('Verifying merkle tree', async() => {
            expect(await MerkleTreeVerifier.verify(proof, root, leaf)).to.be.true
        })

    })
})
