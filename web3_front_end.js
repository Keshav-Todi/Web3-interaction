const Web3 = require('web3');
const web3 = new Web3("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");

// Contract ABI and Address
const abi = [ /* Paste ABI here after contract deployment */ ];
const contractAddress = "YOUR_CONTRACT_ADDRESS";
const tokenContract = new web3.eth.Contract(abi, contractAddress);

// Check Balance
async function getBalance(address) {
    const balance = await tokenContract.methods.balanceOf(address).call();
    console.log(`Balance: ${balance}`);
}
