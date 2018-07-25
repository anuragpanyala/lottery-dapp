const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
// const ganache = require('ganache-cli');

const provider = new HDWalletProvider(
    'farm angle slab end degree next pig visual high occur tourist spawn',
    'https://rinkeby.infura.io/p7MT1Rnxz3M9sfi21lZn'
);

// const provider = ganache.provider();
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const results = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: '0x' + bytecode}) //no initial arguments in this smart contact
    .send({from: accounts[0], gas: 1000000});

    console.log(interface);
    console.log('Contract deployed to', results.options.address);
};
deploy();
