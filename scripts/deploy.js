const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const Token = await hre.ethers.getContractFactory("StreaxToken");
  const streaxToken = await Token.deploy(100000000, 50);

  await streaxToken.deployed();
  console.log("StreaxToken deployed to:", streaxToken.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
