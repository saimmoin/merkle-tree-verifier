pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract MerkleTreeVerifier {
    function verify(bytes32[] memory proof, bytes32 root, bytes32 leaf) public view returns (bool) {
        bytes32 computedHash = leaf;
        for (uint256 i = 0; i < proof.length; i++) {
            bytes32 proofElement = proof[i];
            if (computedHash < proofElement) {
                computedHash = keccak256(abi.encodePacked(computedHash, proofElement));
            } else {
                computedHash = keccak256(abi.encodePacked(proofElement, computedHash));
            }
        }
        console.logBytes(abi.encodePacked(root));
        console.logBytes(abi.encodePacked(computedHash));

        
        return computedHash == root;
    }
}
