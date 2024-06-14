const { ethers, upgrades } = require("hardhat");

async function main() {
  try {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const SimpleToken = await ethers.getContractFactory("SimpleToken");
    const stablecoinAddress = "0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F"; // Correct checksum
    const simpleToken = await upgrades.deployProxy(
      SimpleToken,
      [stablecoinAddress],
      { initializer: "initialize" }
    );

    console.log("SimpleToken deployed to:", simpleToken);
  } catch (e) {
    console.error("Deployment failed:", e);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
