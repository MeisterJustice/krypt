require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/fNatxmYbP3B-Lx2ov_hCEal65tiCtGQb",
      accounts: [
        "2b0637bbdd114fb9a74b21ab25e30f66c48798b10e8701768328e4304b6097ac",
      ],
    },
  },
};
