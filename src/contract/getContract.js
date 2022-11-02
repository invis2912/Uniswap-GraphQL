
const Web3 = require("web3");
// Importing contract details
const {address, ABI} = require("../../constants/uniswapContract");
const getWeb3 = () => {
  return (web3 = new Web3(
    new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/4149340e93ff495bb94cb7e54558e0fc") 
  ));
};
const getContract = new Promise(function(resolve, reject) {
  const web3 = getWeb3();
// JavaScript versions of Smart Contract's interface          // using the contract address and ABI 
  const uniswapContract = new web3.eth.Contract(ABI, address); 
  if (uniswapContract) resolve(uniswapContract);
  else reject();
});
const getCoinbase = async () => {
  const web3 = getWeb3();
  return await web3.eth.getCoinbase();
};
module.exports = { getContract, getCoinbase };