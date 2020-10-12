require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stove renew magnet assume give cloth equal gasp'; 
let testAccounts = [
"0x2cf56af5948d23b2efcea30b021580ffcc4dc1e075802451ab577fdb96c3b2d0",
"0x5291feb1d75a5d0ecb44fb817096552fdd8be07e5f2de9fc5b823b0adb005396",
"0x028ae5523d24609ed9faeac0844b5161984b272b9b6bc504ebc5b846d4f5da15",
"0x80d50d272f8c2c6048511d1b7e89ad26b149c3f3a3e6f6f3b582f7d4c0d1b849",
"0xd37a7757429b9801cfc587f5d8b942a4e0599851d3231b3c218aaa5cef0ed09e",
"0x64001488cd12084372963d5551452f5aea1129e57060610ffd643ea5b1a3b9bf",
"0x5f853ee41a38a3d245b9f7db430c4763a91c18baba03aba749ac190742e627fb",
"0x60af2fb28536c9c391b875acd1b1871f7fdf413085f4b80ca35dd95c72508af2",
"0x342571ca82627bfdefa478ea28d18017d6a5894c3e1ac9d11dbd941100ceeadc",
"0xbbbe077db3f570a9fe87664aaa2af12d54c0bcbd3c4f127ecccca1b72031d02a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
