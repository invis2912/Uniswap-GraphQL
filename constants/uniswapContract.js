const address = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6"; // contract address
const ABI = [
  // ABI from remix
  {
    inputs: [ [Object], [Object] ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [],
    name: 'WETH9',
    outputs: [ [Object] ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'factory',
    outputs: [ [Object] ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [ [Object], [Object] ],
    name: 'quoteExactInput',
    outputs: [ [Object] ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [ [Object], [Object], [Object], [Object], [Object] ],
    name: 'quoteExactInputSingle',
    outputs: [ [Object] ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [ [Object], [Object] ],
    name: 'quoteExactOutput',
    outputs: [ [Object] ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [ [Object], [Object], [Object], [Object], [Object] ],
    name: 'quoteExactOutputSingle',
    outputs: [ [Object] ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [ [Object], [Object], [Object] ],
    name: 'uniswapV3SwapCallback',
    outputs: [],
    stateMutability: 'view',
    type: 'function'
  }

];
module.exports = { ABI, address };





 