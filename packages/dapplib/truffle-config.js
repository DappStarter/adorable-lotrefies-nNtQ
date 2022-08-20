require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remember mistake inner nasty flower squirrel'; 
let testAccounts = [
"0xd5367cdbe0416f15321e41adea9b40590e79ed0a9ef63bd63809c191820e3240",
"0x947765ff2f7b9c2fa98c524f7abbc52e2ecbf537fee3d8163ade8625c472b9f5",
"0x374748e35d0c7b4347f62f5d46137f5ad88125168b3d2234e43b3984db620752",
"0xa0818c38927f4f576941dcad289828f6965a7ed3d093703ad6f80968a1f3f7c3",
"0x5b936ec088835af439d6fa787b1bd7fce10bd4cc98889c525d5bc4f02ae9a033",
"0x7d772e03d463d58d6bfe43d204ec6d9f5b807f66163c8080c807672a8d780f4b",
"0x6e610e32bea26b0da88b69839e6f342639b8a27abb9c071a06e17c793dc87bb4",
"0xb6318f28cfefccba8622e1d5027d7d634b1ac26c524efc7ded5b9dd5a7b0261e",
"0x851df97f9f6c695b7cad15ff11e60f1fc37896961cb8915dec980508c9c775b0",
"0x9713a6037f3315c3f286be12f51eae1d2586e71330f719b3435c0525bad795d2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


