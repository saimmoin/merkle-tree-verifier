const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')

const leaves = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6'].map(x => keccak256(x).toString('hex'))
console.log(leaves)

const newLeaves = [
    '0x3570904ecf2c480e5945250ce73969e246a82d59ac3b154c8b81d93bb5503dfd', 
    '0x88f0c4bde9f065ca2ccdd463ec1b07879cc5e1080407afe6179ab91e8141eab2', 
    '0xb807b4469264fff88062f7154039122e8bee162e71e03d003fe28bcaf92b9c4c', 
    '0x3a505fbe2e444482cb9c5d0c70da3dc8dea36ae62656a4c551d7750f3933f1db', 
    '0xf9a456cb900126462d5292a43b47ca6b5b811199d337867f91b052582e8eb102', 
    '0x1ace71dd22fb5336cf71ccb9824acb00f40300bbe65f79f5060eb9d041a77d22'  
  ]

const tree = new MerkleTree(newLeaves, keccak256)
const root = tree.getRoot().toString('hex')
const leaf = keccak256('T1').toString('hex')
const proof = tree.getProof(leaf)
console.log(proof)
console.log(tree.verify(proof, leaf, root)) // true


// const badLeaves = ['a', 'x', 'c'].map(x => keccak256(x).toString('hex'))
// const badTree = new MerkleTree(badLeaves, keccak256)
// const badLeaf = keccak256('x').toString('hex')
// const badProof = tree.getProof(badLeaf)
// console.log(tree.verify(badProof, leaf, root)) // false