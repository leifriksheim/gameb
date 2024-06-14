import { expect } from "chai";
import { ethers } from "hardhat";

const TDF_ADDRESS = "0xEaa00a0e0D29D1F883485E8f98A0E8FfD75B23FB";

describe("IndexToken Contract", function () {
  async function deployIndexToken() {
    const [owner, otherAccount] = await ethers.getSigners();
    const IndexToken = await ethers.getContractFactory("IndexToken");
    const indexToken = await IndexToken.deploy();

    await indexToken.initialize("0xf0f4df0cde2c8cb8660ed022d7a22488f723e702");

    return { indexToken, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Owner should be the same as deployer", async function () {
      const { indexToken, owner } = await deployIndexToken();
      expect(await indexToken.owner()).to.equal(owner.address);
    });
  });

  describe("Token management", function () {
    it("Should add a token correctly", async function () {
      const { indexToken, owner } = await deployIndexToken();
      const tokenAddress = TDF_ADDRESS;
      await indexToken.addToken(tokenAddress);
      expect(await indexToken.isToken(tokenAddress)).to.be.true;
    });

    it("Should remove a token correctly", async function () {
      const { indexToken, owner } = await deployIndexToken();
      const tokenAddress = TDF_ADDRESS;
      await indexToken.addToken(tokenAddress);
      await indexToken.removeToken(tokenAddress);
      expect(await indexToken.isToken(tokenAddress)).to.be.false;
    });

    it("Should not allow non-owner to add or remove tokens", async function () {
      const { indexToken, otherAccount } = await deployIndexToken();
      const tokenAddress = TDF_ADDRESS;
      await expect(
        indexToken.connect(otherAccount).addToken(tokenAddress)
      ).to.be.revertedWith("Ownable: caller is not the owner");
      await expect(
        indexToken.connect(otherAccount).removeToken(tokenAddress)
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
  });
});
