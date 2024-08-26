const { expect } = require("chai");

describe("MovieEventTicketing", function () {
  it("Should deploy the contract", async function () {
    const [deployer] = await ethers.getSigners();
    const MovieEventTicketing = await ethers.getContractFactory("Ticketing");
    const contract = await MovieEventTicketing.deploy();
    await contract.deployed();
    expect(await contract.deployed()).to.be.ok;
  });

  // Add more tests for contract functionality
});