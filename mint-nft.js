require("dotenv").config();
const { ethers, InfuraProvider, Contract, Wallet } = require("ethers");

//creating provider
const provider = new InfuraProvider("goerli");
const abi = require("./contracts/test.json");

//creating new wallet signer
const signer = Wallet.fromPhrase(process.env.SEED_PHRASE, provider);

//creating new contract instance
const contract = new Contract(
    process.env.contract_address,
    abi,
    signer
  );

  exports.get_count = async () => {
    const Count = await contract.getCount();
    console.log(" Count is ", Count);
    return Count
  };

//  exports.get_count()

  exports.increase_count = async () => {
    const increase = await contract.increment();
    const result = await increase.wait()
    // get_count()
  };
//  increase_count()
// exports.contract