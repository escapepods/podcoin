const {Blockchain, Transaction} = require("./blockchain");
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('3863cf6157b25d9690e41e8abf95b6ea8016c1cc60e9a291871975a00c162296');
const myWalletAddress = myKey.getPublic('hex');

let podCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
podCoin.addTransaction(tx1);

console.log("\nStaring the miner...");
podCoin.minePendingTransactions(myWalletAddress);

console.log("\nBalance of wallet is: ", podCoin.getBalanceOfAddress(myWalletAddress));

console.log('Chain validity check return: ', podCoin.isChainValid());