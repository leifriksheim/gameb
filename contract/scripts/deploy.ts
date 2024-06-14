const { ethers, upgrades } = require("hardhat");

async function main() {
  try {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Deployer balance:", deployer);

    const IndexToken = await ethers.getContractFactory("IndexToken");
    const contract = await upgrades.deployProxy(
      IndexToken,
      ["0x0C9861e64Fd62b5d753e623879Efdc04E273A7b5"],
      { initializer: "initialize" }
    );

    console.log("IndexToken deployed to:", contract);
  } catch (e) {
    console.log(e);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
