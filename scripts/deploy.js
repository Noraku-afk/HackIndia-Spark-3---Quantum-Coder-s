async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const Ticketing = await ethers.getContractFactory("Ticketing");
    const ticketing = await Ticketing.deploy();
    console.log("Ticketing contract deployed to:", ticketing.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });