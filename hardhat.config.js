require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    goerli: {
      url: "https://quick-palpable-shard.ethereum-goerli.discover.quiknode.pro/db9d6900093b79890d62b9486d9ff8c3b4850ef8/",
      accounts: ["ed602a739c27881ffd1bc7fbad40bd98e042e13e9539b1193104c4e9093c23fe"],
    },
  },
};