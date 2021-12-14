export default {
    address: "0x704ec4C35Be2968F0C8De47024C5220B845E2ca5",
    decimal: 0,
    name: "ApeTax",
    symbol: "AP",
    icon: "Ape.jpg",
    abi: [
          {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "Approval",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
              }
            ],
            "name": "ApprovalForAll",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              }
            ],
            "name": "balanceOf",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "getApproved",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "operator",
                "type": "address"
              }
            ],
            "name": "isApprovedForAll",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [],
            "name": "name",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "ownerOf",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "_data",
                "type": "bytes"
              }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
              }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
              }
            ],
            "name": "supportsInterface",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [],
            "name": "symbol",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "tokenURI",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "player",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "tokenURI",
                "type": "string"
              }
            ],
            "name": "awardItem",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "sender",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
              },
              {
                "internalType": "uint32",
                "name": "transId",
                "type": "uint32"
              },
              {
                "internalType": "string",
                "name": "tokenURI",
                "type": "string"
              }
            ],
            "name": "transerNft",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
        "metadata": "{\"compiler\":{\"version\":\"0.8.10+commit.fc410830\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"player\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"tokenURI\",\"type\":\"string\"}],\"name\":\"awardItem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"uint32\",\"name\":\"transId\",\"type\":\"uint32\"},{\"internalType\":\"string\",\"name\":\"tokenURI\",\"type\":\"string\"}],\"name\":\"transerNft\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/ApeTax.sol\":\"ApeTax\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x1ba5cf152c15dc0c785310feeb61e1f74387fc7bdc2aba5d90733f791606d4bf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://38db14c62d6431df042a7ca07fd021ea52ccdbd03f0be2b5c4ab034a56126d38\",\"dweb:/ipfs/QmbCHTCLP6bz8omQXrP8VuxFGdK9Hh3jqfrSTr38WNpTk4\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x872ba21af7c1f0ae04a715beca31e8fcac764d6c8762940b0fe1bfb6ed8e86f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://497017741d74878b56a67ad51e98061bd9ec0e6e4fdbfef0e2ab51523f4c16de\",\"dweb:/ipfs/QmWfkpRHksy8jFywqYxdmMqdkQ1hxrGTPoNBXbZ48zTvyv\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x483b106386dd309f168672928252a19f30c30efb4d17d4b8e2b0f587ca784a11\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://189a39d066c6886ddbe86c79bb36d6cbe66e98bc6a94956e28f5503dae4ad406\",\"dweb:/ipfs/QmT3s3PwCdXqHLJk26kcnedrRGTC9T18z52i9Be7PV9ppc\"]},\"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol\":{\"keccak256\":\"0x95b01a0017e74216dc94e5babd5a7b0fbabab160347349e51789e75ebb130e4a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5aa621ae63904efeeb4c626edf07da0acf4b3c3eb6bef1d2f5215023e4dc9f83\",\"dweb:/ipfs/QmTDk9fG65qquWQ2VXhacZmiUBYS4ZJgr6HqHdeBC7Xwfs\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x6052c25b1021f2b0e733fb52ca11948cb2f08cb66076397507243a6e8a8d7776\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://32ac4547a76b28021a007853958284aa8a15a64f1aeec83cb797b7fd60a46b56\",\"dweb:/ipfs/QmTJWQF8j586oaYNpdZv55xnzyHVQc68XN4eBNeiLbKX8d\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x9944d1038f27dcebff810d7ba16b3b8058b967173d76874fb72dd7cd84129656\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7c455cda07c5f8978c57e545ddde382552d3a55b6e3682e0f809ed07ec7defbe\",\"dweb:/ipfs/QmXkoKbxyMcMzjYdkXi5t4t3ZjBQ81pj7AaanS9jhePxyt\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x7736c187e6f1358c1ea9350a2a21aa8528dec1c2f43b374a9067465a3a51f5d3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4fd625dca17657403af518cc6c8ab5c54c58898cf6e912ca2e1b0f3194ad0405\",\"dweb:/ipfs/QmQVv7YeeKmaS11bg7YDTeeGDk6i7sV8LMMfohaLM4SiRu\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0x74f630d2664c1581a1cbd0730d4ba119b3a184ef90c65f3a934be4d16d0e58a1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cadad0b133129f946a53e0f61fa387803ccdc010d9c794da0738bb7fc5001b66\",\"dweb:/ipfs/QmQdTBpUT9WgDuCm7womDFiAnksepw6Fmi5Z5vv1H17Qr1\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x5fa25f305839292fab713256214f2868e0257d29826b14282bbd7f1e34f5af38\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3de4074848249e00e1336db857e3fa8f78b4fe11d4a887f71050c22023b2132\",\"dweb:/ipfs/QmbL6k2zFGndQPNPG7vCDivtjKam3quJSrEbRuVsNo4hBw\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0x905cd0ecd91d1de79a4679d745b79cf852ca8ccda5d25d1c49c6bd17a5edc0cf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8dd1601fcd370546d8c06ea1902d7e7364fc490fbf0ebc3004230ef1f5db473c\",\"dweb:/ipfs/Qmb8zbC3TjWFtcuyP3KEEaegMkPcfeKAcPrwzvkAoMR3cZ\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x6aa521718bf139b44ce56f194f6aea1d590cacef995b5a84703fb1579fa49be9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://100f8d367b5e94eb9cb991914f1de133cf272654c0708faa893bbc17a5b35b93\",\"dweb:/ipfs/QmZeBojmgXq821dL1TJKFb58B1FogM9jL3u7hXQ8hTEBKT\"]},\"project:/contracts/ApeTax.sol\":{\"keccak256\":\"0xdb54dceb4d0c55a647b0dac32e616609eda2267568fe411567750890834547f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://af61e700173688d20ba41057be903f1f3ca05d4cf88b85bd8d1df429d256aa41\",\"dweb:/ipfs/QmUapFLx54dzUec2EMXJdFh7nFVp9QYFDLdYeKmTm9nh8c\"]}},\"version\":1}",
        "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280600681526020017f41706554617800000000000000000000000000000000000000000000000000008152506040518060400160405280600281526020017f4150000000000000000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620000b8565b508060019080519060200190620000af929190620000b8565b505050620001cd565b828054620000c69062000197565b90600052602060002090601f016020900481019282620000ea576000855562000136565b82601f106200010557805160ff191683800117855562000136565b8280016001018555821562000136579182015b828111156200013557825182559160200191906001019062000118565b5b50905062000145919062000149565b5090565b5b80821115620001645760008160009055506001016200014a565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001b057607f821691505b60208210811415620001c757620001c662000168565b5b50919050565b612ca380620001dd6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063c87b56dd11610066578063c87b56dd14610282578063cf378343146102b2578063e5807f78146102e2578063e985e9c5146102fe576100f5565b806370a08231146101fc57806395d89b411461022c578063a22cb4651461024a578063b88d4fde14610266576100f5565b8063095ea7b3116100d3578063095ea7b31461017857806323b872dd1461019457806342842e0e146101b05780636352211e146101cc576100f5565b806301ffc9a7146100fa57806306fdde031461012a578063081812fc14610148575b600080fd5b610114600480360381019061010f9190611946565b61032e565b604051610121919061198e565b60405180910390f35b610132610410565b60405161013f9190611a42565b60405180910390f35b610162600480360381019061015d9190611a9a565b6104a2565b60405161016f9190611b08565b60405180910390f35b610192600480360381019061018d9190611b4f565b610527565b005b6101ae60048036038101906101a99190611b8f565b61063f565b005b6101ca60048036038101906101c59190611b8f565b61069f565b005b6101e660048036038101906101e19190611a9a565b6106bf565b6040516101f39190611b08565b60405180910390f35b61021660048036038101906102119190611be2565b610771565b6040516102239190611c1e565b60405180910390f35b610234610829565b6040516102419190611a42565b60405180910390f35b610264600480360381019061025f9190611c65565b6108bb565b005b610280600480360381019061027b9190611dda565b6108d1565b005b61029c60048036038101906102979190611a9a565b610933565b6040516102a99190611a42565b60405180910390f35b6102cc60048036038101906102c79190611efe565b610a85565b6040516102d99190611c1e565b60405180910390f35b6102fc60048036038101906102f79190611f96565b610abd565b005b61031860048036038101906103139190612019565b610ae4565b604051610325919061198e565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103f957507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610409575061040882610b78565b5b9050919050565b60606000805461041f90612088565b80601f016020809104026020016040519081016040528092919081815260200182805461044b90612088565b80156104985780601f1061046d57610100808354040283529160200191610498565b820191906000526020600020905b81548152906001019060200180831161047b57829003601f168201915b5050505050905090565b60006104ad82610be2565b6104ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e39061212c565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610532826106bf565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059a906121be565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105c2610c4e565b73ffffffffffffffffffffffffffffffffffffffff1614806105f157506105f0816105eb610c4e565b610ae4565b5b610630576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062790612250565b60405180910390fd5b61063a8383610c56565b505050565b61065061064a610c4e565b82610d0f565b61068f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610686906122e2565b60405180910390fd5b61069a838383610ded565b505050565b6106ba838383604051806020016040528060008152506108d1565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610768576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075f90612374565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d990612406565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461083890612088565b80601f016020809104026020016040519081016040528092919081815260200182805461086490612088565b80156108b15780601f10610886576101008083540402835291602001916108b1565b820191906000526020600020905b81548152906001019060200180831161089457829003601f168201915b5050505050905090565b6108cd6108c6610c4e565b8383611049565b5050565b6108e26108dc610c4e565b83610d0f565b610921576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610918906122e2565b60405180910390fd5b61092d848484846111b6565b50505050565b606061093e82610be2565b61097d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097490612498565b60405180910390fd5b600060066000848152602001908152602001600020805461099d90612088565b80601f01602080910402602001604051908101604052809291908181526020018280546109c990612088565b8015610a165780601f106109eb57610100808354040283529160200191610a16565b820191906000526020600020905b8154815290600101906020018083116109f957829003601f168201915b505050505090506000610a27611212565b9050600081511415610a3d578192505050610a80565b600082511115610a72578082604051602001610a5a9291906124f4565b60405160208183030381529060405292505050610a80565b610a7b84611229565b925050505b919050565b6000610a9160076112d0565b6000610a9d60076112e6565b9050610aa984826112f4565b610ab381846114c2565b8091505092915050565b610ace84848463ffffffff1661069f565b610ade8263ffffffff16826114c2565b50505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610cc9836106bf565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610d1a82610be2565b610d59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d509061258a565b60405180910390fd5b6000610d64836106bf565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610dd357508373ffffffffffffffffffffffffffffffffffffffff16610dbb846104a2565b73ffffffffffffffffffffffffffffffffffffffff16145b80610de45750610de38185610ae4565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610e0d826106bf565b73ffffffffffffffffffffffffffffffffffffffff1614610e63576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5a9061261c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ed3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eca906126ae565b60405180910390fd5b610ede838383611536565b610ee9600082610c56565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f3991906126fd565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f909190612731565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156110b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110af906127d3565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516111a9919061198e565b60405180910390a3505050565b6111c1848484610ded565b6111cd8484848461153b565b61120c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120390612865565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061123482610be2565b611273576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126a906128f7565b60405180910390fd5b600061127d611212565b9050600081511161129d57604051806020016040528060008152506112c8565b806112a7846116c3565b6040516020016112b89291906124f4565b6040516020818303038152906040525b915050919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611364576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135b90612963565b60405180910390fd5b61136d81610be2565b156113ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a4906129cf565b60405180910390fd5b6113b960008383611536565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114099190612731565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6114cb82610be2565b61150a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150190612a61565b60405180910390fd5b80600660008481526020019081526020016000209080519060200190611531929190611837565b505050565b505050565b600061155c8473ffffffffffffffffffffffffffffffffffffffff16611824565b156116b6578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611585610c4e565b8786866040518563ffffffff1660e01b81526004016115a79493929190612ad6565b6020604051808303816000875af19250505080156115e357506040513d601f19601f820116820180604052508101906115e09190612b37565b60015b611666573d8060008114611613576040519150601f19603f3d011682016040523d82523d6000602084013e611618565b606091505b5060008151141561165e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161165590612865565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506116bb565b600190505b949350505050565b6060600082141561170b576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061181f565b600082905060005b6000821461173d57808061172690612b64565b915050600a826117369190612bdc565b9150611713565b60008167ffffffffffffffff81111561175957611758611caf565b5b6040519080825280601f01601f19166020018201604052801561178b5781602001600182028036833780820191505090505b5090505b60008514611818576001826117a491906126fd565b9150600a856117b39190612c0d565b60306117bf9190612731565b60f81b8183815181106117d5576117d4612c3e565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856118119190612bdc565b945061178f565b8093505050505b919050565b600080823b905060008111915050919050565b82805461184390612088565b90600052602060002090601f01602090048101928261186557600085556118ac565b82601f1061187e57805160ff19168380011785556118ac565b828001600101855582156118ac579182015b828111156118ab578251825591602001919060010190611890565b5b5090506118b991906118bd565b5090565b5b808211156118d65760008160009055506001016118be565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611923816118ee565b811461192e57600080fd5b50565b6000813590506119408161191a565b92915050565b60006020828403121561195c5761195b6118e4565b5b600061196a84828501611931565b91505092915050565b60008115159050919050565b61198881611973565b82525050565b60006020820190506119a3600083018461197f565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156119e35780820151818401526020810190506119c8565b838111156119f2576000848401525b50505050565b6000601f19601f8301169050919050565b6000611a14826119a9565b611a1e81856119b4565b9350611a2e8185602086016119c5565b611a37816119f8565b840191505092915050565b60006020820190508181036000830152611a5c8184611a09565b905092915050565b6000819050919050565b611a7781611a64565b8114611a8257600080fd5b50565b600081359050611a9481611a6e565b92915050565b600060208284031215611ab057611aaf6118e4565b5b6000611abe84828501611a85565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611af282611ac7565b9050919050565b611b0281611ae7565b82525050565b6000602082019050611b1d6000830184611af9565b92915050565b611b2c81611ae7565b8114611b3757600080fd5b50565b600081359050611b4981611b23565b92915050565b60008060408385031215611b6657611b656118e4565b5b6000611b7485828601611b3a565b9250506020611b8585828601611a85565b9150509250929050565b600080600060608486031215611ba857611ba76118e4565b5b6000611bb686828701611b3a565b9350506020611bc786828701611b3a565b9250506040611bd886828701611a85565b9150509250925092565b600060208284031215611bf857611bf76118e4565b5b6000611c0684828501611b3a565b91505092915050565b611c1881611a64565b82525050565b6000602082019050611c336000830184611c0f565b92915050565b611c4281611973565b8114611c4d57600080fd5b50565b600081359050611c5f81611c39565b92915050565b60008060408385031215611c7c57611c7b6118e4565b5b6000611c8a85828601611b3a565b9250506020611c9b85828601611c50565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611ce7826119f8565b810181811067ffffffffffffffff82111715611d0657611d05611caf565b5b80604052505050565b6000611d196118da565b9050611d258282611cde565b919050565b600067ffffffffffffffff821115611d4557611d44611caf565b5b611d4e826119f8565b9050602081019050919050565b82818337600083830152505050565b6000611d7d611d7884611d2a565b611d0f565b905082815260208101848484011115611d9957611d98611caa565b5b611da4848285611d5b565b509392505050565b600082601f830112611dc157611dc0611ca5565b5b8135611dd1848260208601611d6a565b91505092915050565b60008060008060808587031215611df457611df36118e4565b5b6000611e0287828801611b3a565b9450506020611e1387828801611b3a565b9350506040611e2487828801611a85565b925050606085013567ffffffffffffffff811115611e4557611e446118e9565b5b611e5187828801611dac565b91505092959194509250565b600067ffffffffffffffff821115611e7857611e77611caf565b5b611e81826119f8565b9050602081019050919050565b6000611ea1611e9c84611e5d565b611d0f565b905082815260208101848484011115611ebd57611ebc611caa565b5b611ec8848285611d5b565b509392505050565b600082601f830112611ee557611ee4611ca5565b5b8135611ef5848260208601611e8e565b91505092915050565b60008060408385031215611f1557611f146118e4565b5b6000611f2385828601611b3a565b925050602083013567ffffffffffffffff811115611f4457611f436118e9565b5b611f5085828601611ed0565b9150509250929050565b600063ffffffff82169050919050565b611f7381611f5a565b8114611f7e57600080fd5b50565b600081359050611f9081611f6a565b92915050565b60008060008060808587031215611fb057611faf6118e4565b5b6000611fbe87828801611b3a565b9450506020611fcf87828801611b3a565b9350506040611fe087828801611f81565b925050606085013567ffffffffffffffff811115612001576120006118e9565b5b61200d87828801611ed0565b91505092959194509250565b600080604083850312156120305761202f6118e4565b5b600061203e85828601611b3a565b925050602061204f85828601611b3a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806120a057607f821691505b602082108114156120b4576120b3612059565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000612116602c836119b4565b9150612121826120ba565b604082019050919050565b6000602082019050818103600083015261214581612109565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006121a86021836119b4565b91506121b38261214c565b604082019050919050565b600060208201905081810360008301526121d78161219b565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b600061223a6038836119b4565b9150612245826121de565b604082019050919050565b600060208201905081810360008301526122698161222d565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b60006122cc6031836119b4565b91506122d782612270565b604082019050919050565b600060208201905081810360008301526122fb816122bf565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b600061235e6029836119b4565b915061236982612302565b604082019050919050565b6000602082019050818103600083015261238d81612351565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b60006123f0602a836119b4565b91506123fb82612394565b604082019050919050565b6000602082019050818103600083015261241f816123e3565b9050919050565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b60006124826031836119b4565b915061248d82612426565b604082019050919050565b600060208201905081810360008301526124b181612475565b9050919050565b600081905092915050565b60006124ce826119a9565b6124d881856124b8565b93506124e88185602086016119c5565b80840191505092915050565b600061250082856124c3565b915061250c82846124c3565b91508190509392505050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000612574602c836119b4565b915061257f82612518565b604082019050919050565b600060208201905081810360008301526125a381612567565b9050919050565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b60006126066029836119b4565b9150612611826125aa565b604082019050919050565b60006020820190508181036000830152612635816125f9565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006126986024836119b4565b91506126a38261263c565b604082019050919050565b600060208201905081810360008301526126c78161268b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061270882611a64565b915061271383611a64565b925082821015612726576127256126ce565b5b828203905092915050565b600061273c82611a64565b915061274783611a64565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561277c5761277b6126ce565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006127bd6019836119b4565b91506127c882612787565b602082019050919050565b600060208201905081810360008301526127ec816127b0565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b600061284f6032836119b4565b915061285a826127f3565b604082019050919050565b6000602082019050818103600083015261287e81612842565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b60006128e1602f836119b4565b91506128ec82612885565b604082019050919050565b60006020820190508181036000830152612910816128d4565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b600061294d6020836119b4565b915061295882612917565b602082019050919050565b6000602082019050818103600083015261297c81612940565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b60006129b9601c836119b4565b91506129c482612983565b602082019050919050565b600060208201905081810360008301526129e8816129ac565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000612a4b602e836119b4565b9150612a56826129ef565b604082019050919050565b60006020820190508181036000830152612a7a81612a3e565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000612aa882612a81565b612ab28185612a8c565b9350612ac28185602086016119c5565b612acb816119f8565b840191505092915050565b6000608082019050612aeb6000830187611af9565b612af86020830186611af9565b612b056040830185611c0f565b8181036060830152612b178184612a9d565b905095945050505050565b600081519050612b318161191a565b92915050565b600060208284031215612b4d57612b4c6118e4565b5b6000612b5b84828501612b22565b91505092915050565b6000612b6f82611a64565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612ba257612ba16126ce565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612be782611a64565b9150612bf283611a64565b925082612c0257612c01612bad565b5b828204905092915050565b6000612c1882611a64565b9150612c2383611a64565b925082612c3357612c32612bad565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220c8c65f890cd4ab79e8772151164c3c6b8509c327724f605df253bcc695b15c5964736f6c634300080a0033",
        "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063c87b56dd11610066578063c87b56dd14610282578063cf378343146102b2578063e5807f78146102e2578063e985e9c5146102fe576100f5565b806370a08231146101fc57806395d89b411461022c578063a22cb4651461024a578063b88d4fde14610266576100f5565b8063095ea7b3116100d3578063095ea7b31461017857806323b872dd1461019457806342842e0e146101b05780636352211e146101cc576100f5565b806301ffc9a7146100fa57806306fdde031461012a578063081812fc14610148575b600080fd5b610114600480360381019061010f9190611946565b61032e565b604051610121919061198e565b60405180910390f35b610132610410565b60405161013f9190611a42565b60405180910390f35b610162600480360381019061015d9190611a9a565b6104a2565b60405161016f9190611b08565b60405180910390f35b610192600480360381019061018d9190611b4f565b610527565b005b6101ae60048036038101906101a99190611b8f565b61063f565b005b6101ca60048036038101906101c59190611b8f565b61069f565b005b6101e660048036038101906101e19190611a9a565b6106bf565b6040516101f39190611b08565b60405180910390f35b61021660048036038101906102119190611be2565b610771565b6040516102239190611c1e565b60405180910390f35b610234610829565b6040516102419190611a42565b60405180910390f35b610264600480360381019061025f9190611c65565b6108bb565b005b610280600480360381019061027b9190611dda565b6108d1565b005b61029c60048036038101906102979190611a9a565b610933565b6040516102a99190611a42565b60405180910390f35b6102cc60048036038101906102c79190611efe565b610a85565b6040516102d99190611c1e565b60405180910390f35b6102fc60048036038101906102f79190611f96565b610abd565b005b61031860048036038101906103139190612019565b610ae4565b604051610325919061198e565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103f957507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610409575061040882610b78565b5b9050919050565b60606000805461041f90612088565b80601f016020809104026020016040519081016040528092919081815260200182805461044b90612088565b80156104985780601f1061046d57610100808354040283529160200191610498565b820191906000526020600020905b81548152906001019060200180831161047b57829003601f168201915b5050505050905090565b60006104ad82610be2565b6104ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e39061212c565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610532826106bf565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156105a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059a906121be565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105c2610c4e565b73ffffffffffffffffffffffffffffffffffffffff1614806105f157506105f0816105eb610c4e565b610ae4565b5b610630576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062790612250565b60405180910390fd5b61063a8383610c56565b505050565b61065061064a610c4e565b82610d0f565b61068f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610686906122e2565b60405180910390fd5b61069a838383610ded565b505050565b6106ba838383604051806020016040528060008152506108d1565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610768576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075f90612374565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d990612406565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461083890612088565b80601f016020809104026020016040519081016040528092919081815260200182805461086490612088565b80156108b15780601f10610886576101008083540402835291602001916108b1565b820191906000526020600020905b81548152906001019060200180831161089457829003601f168201915b5050505050905090565b6108cd6108c6610c4e565b8383611049565b5050565b6108e26108dc610c4e565b83610d0f565b610921576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610918906122e2565b60405180910390fd5b61092d848484846111b6565b50505050565b606061093e82610be2565b61097d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097490612498565b60405180910390fd5b600060066000848152602001908152602001600020805461099d90612088565b80601f01602080910402602001604051908101604052809291908181526020018280546109c990612088565b8015610a165780601f106109eb57610100808354040283529160200191610a16565b820191906000526020600020905b8154815290600101906020018083116109f957829003601f168201915b505050505090506000610a27611212565b9050600081511415610a3d578192505050610a80565b600082511115610a72578082604051602001610a5a9291906124f4565b60405160208183030381529060405292505050610a80565b610a7b84611229565b925050505b919050565b6000610a9160076112d0565b6000610a9d60076112e6565b9050610aa984826112f4565b610ab381846114c2565b8091505092915050565b610ace84848463ffffffff1661069f565b610ade8263ffffffff16826114c2565b50505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610cc9836106bf565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610d1a82610be2565b610d59576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d509061258a565b60405180910390fd5b6000610d64836106bf565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610dd357508373ffffffffffffffffffffffffffffffffffffffff16610dbb846104a2565b73ffffffffffffffffffffffffffffffffffffffff16145b80610de45750610de38185610ae4565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610e0d826106bf565b73ffffffffffffffffffffffffffffffffffffffff1614610e63576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5a9061261c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ed3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eca906126ae565b60405180910390fd5b610ede838383611536565b610ee9600082610c56565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f3991906126fd565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f909190612731565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156110b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110af906127d3565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516111a9919061198e565b60405180910390a3505050565b6111c1848484610ded565b6111cd8484848461153b565b61120c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120390612865565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061123482610be2565b611273576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161126a906128f7565b60405180910390fd5b600061127d611212565b9050600081511161129d57604051806020016040528060008152506112c8565b806112a7846116c3565b6040516020016112b89291906124f4565b6040516020818303038152906040525b915050919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611364576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135b90612963565b60405180910390fd5b61136d81610be2565b156113ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a4906129cf565b60405180910390fd5b6113b960008383611536565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546114099190612731565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b6114cb82610be2565b61150a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161150190612a61565b60405180910390fd5b80600660008481526020019081526020016000209080519060200190611531929190611837565b505050565b505050565b600061155c8473ffffffffffffffffffffffffffffffffffffffff16611824565b156116b6578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611585610c4e565b8786866040518563ffffffff1660e01b81526004016115a79493929190612ad6565b6020604051808303816000875af19250505080156115e357506040513d601f19601f820116820180604052508101906115e09190612b37565b60015b611666573d8060008114611613576040519150601f19603f3d011682016040523d82523d6000602084013e611618565b606091505b5060008151141561165e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161165590612865565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506116bb565b600190505b949350505050565b6060600082141561170b576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061181f565b600082905060005b6000821461173d57808061172690612b64565b915050600a826117369190612bdc565b9150611713565b60008167ffffffffffffffff81111561175957611758611caf565b5b6040519080825280601f01601f19166020018201604052801561178b5781602001600182028036833780820191505090505b5090505b60008514611818576001826117a491906126fd565b9150600a856117b39190612c0d565b60306117bf9190612731565b60f81b8183815181106117d5576117d4612c3e565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856118119190612bdc565b945061178f565b8093505050505b919050565b600080823b905060008111915050919050565b82805461184390612088565b90600052602060002090601f01602090048101928261186557600085556118ac565b82601f1061187e57805160ff19168380011785556118ac565b828001600101855582156118ac579182015b828111156118ab578251825591602001919060010190611890565b5b5090506118b991906118bd565b5090565b5b808211156118d65760008160009055506001016118be565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611923816118ee565b811461192e57600080fd5b50565b6000813590506119408161191a565b92915050565b60006020828403121561195c5761195b6118e4565b5b600061196a84828501611931565b91505092915050565b60008115159050919050565b61198881611973565b82525050565b60006020820190506119a3600083018461197f565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156119e35780820151818401526020810190506119c8565b838111156119f2576000848401525b50505050565b6000601f19601f8301169050919050565b6000611a14826119a9565b611a1e81856119b4565b9350611a2e8185602086016119c5565b611a37816119f8565b840191505092915050565b60006020820190508181036000830152611a5c8184611a09565b905092915050565b6000819050919050565b611a7781611a64565b8114611a8257600080fd5b50565b600081359050611a9481611a6e565b92915050565b600060208284031215611ab057611aaf6118e4565b5b6000611abe84828501611a85565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611af282611ac7565b9050919050565b611b0281611ae7565b82525050565b6000602082019050611b1d6000830184611af9565b92915050565b611b2c81611ae7565b8114611b3757600080fd5b50565b600081359050611b4981611b23565b92915050565b60008060408385031215611b6657611b656118e4565b5b6000611b7485828601611b3a565b9250506020611b8585828601611a85565b9150509250929050565b600080600060608486031215611ba857611ba76118e4565b5b6000611bb686828701611b3a565b9350506020611bc786828701611b3a565b9250506040611bd886828701611a85565b9150509250925092565b600060208284031215611bf857611bf76118e4565b5b6000611c0684828501611b3a565b91505092915050565b611c1881611a64565b82525050565b6000602082019050611c336000830184611c0f565b92915050565b611c4281611973565b8114611c4d57600080fd5b50565b600081359050611c5f81611c39565b92915050565b60008060408385031215611c7c57611c7b6118e4565b5b6000611c8a85828601611b3a565b9250506020611c9b85828601611c50565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611ce7826119f8565b810181811067ffffffffffffffff82111715611d0657611d05611caf565b5b80604052505050565b6000611d196118da565b9050611d258282611cde565b919050565b600067ffffffffffffffff821115611d4557611d44611caf565b5b611d4e826119f8565b9050602081019050919050565b82818337600083830152505050565b6000611d7d611d7884611d2a565b611d0f565b905082815260208101848484011115611d9957611d98611caa565b5b611da4848285611d5b565b509392505050565b600082601f830112611dc157611dc0611ca5565b5b8135611dd1848260208601611d6a565b91505092915050565b60008060008060808587031215611df457611df36118e4565b5b6000611e0287828801611b3a565b9450506020611e1387828801611b3a565b9350506040611e2487828801611a85565b925050606085013567ffffffffffffffff811115611e4557611e446118e9565b5b611e5187828801611dac565b91505092959194509250565b600067ffffffffffffffff821115611e7857611e77611caf565b5b611e81826119f8565b9050602081019050919050565b6000611ea1611e9c84611e5d565b611d0f565b905082815260208101848484011115611ebd57611ebc611caa565b5b611ec8848285611d5b565b509392505050565b600082601f830112611ee557611ee4611ca5565b5b8135611ef5848260208601611e8e565b91505092915050565b60008060408385031215611f1557611f146118e4565b5b6000611f2385828601611b3a565b925050602083013567ffffffffffffffff811115611f4457611f436118e9565b5b611f5085828601611ed0565b9150509250929050565b600063ffffffff82169050919050565b611f7381611f5a565b8114611f7e57600080fd5b50565b600081359050611f9081611f6a565b92915050565b60008060008060808587031215611fb057611faf6118e4565b5b6000611fbe87828801611b3a565b9450506020611fcf87828801611b3a565b9350506040611fe087828801611f81565b925050606085013567ffffffffffffffff811115612001576120006118e9565b5b61200d87828801611ed0565b91505092959194509250565b600080604083850312156120305761202f6118e4565b5b600061203e85828601611b3a565b925050602061204f85828601611b3a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806120a057607f821691505b602082108114156120b4576120b3612059565b5b50919050565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000612116602c836119b4565b9150612121826120ba565b604082019050919050565b6000602082019050818103600083015261214581612109565b9050919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006121a86021836119b4565b91506121b38261214c565b604082019050919050565b600060208201905081810360008301526121d78161219b565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b600061223a6038836119b4565b9150612245826121de565b604082019050919050565b600060208201905081810360008301526122698161222d565b9050919050565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b60006122cc6031836119b4565b91506122d782612270565b604082019050919050565b600060208201905081810360008301526122fb816122bf565b9050919050565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b600061235e6029836119b4565b915061236982612302565b604082019050919050565b6000602082019050818103600083015261238d81612351565b9050919050565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b60006123f0602a836119b4565b91506123fb82612394565b604082019050919050565b6000602082019050818103600083015261241f816123e3565b9050919050565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b60006124826031836119b4565b915061248d82612426565b604082019050919050565b600060208201905081810360008301526124b181612475565b9050919050565b600081905092915050565b60006124ce826119a9565b6124d881856124b8565b93506124e88185602086016119c5565b80840191505092915050565b600061250082856124c3565b915061250c82846124c3565b91508190509392505050565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b6000612574602c836119b4565b915061257f82612518565b604082019050919050565b600060208201905081810360008301526125a381612567565b9050919050565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b60006126066029836119b4565b9150612611826125aa565b604082019050919050565b60006020820190508181036000830152612635816125f9565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006126986024836119b4565b91506126a38261263c565b604082019050919050565b600060208201905081810360008301526126c78161268b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061270882611a64565b915061271383611a64565b925082821015612726576127256126ce565b5b828203905092915050565b600061273c82611a64565b915061274783611a64565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561277c5761277b6126ce565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006127bd6019836119b4565b91506127c882612787565b602082019050919050565b600060208201905081810360008301526127ec816127b0565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b600061284f6032836119b4565b915061285a826127f3565b604082019050919050565b6000602082019050818103600083015261287e81612842565b9050919050565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b60006128e1602f836119b4565b91506128ec82612885565b604082019050919050565b60006020820190508181036000830152612910816128d4565b9050919050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b600061294d6020836119b4565b915061295882612917565b602082019050919050565b6000602082019050818103600083015261297c81612940565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b60006129b9601c836119b4565b91506129c482612983565b602082019050919050565b600060208201905081810360008301526129e8816129ac565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b6000612a4b602e836119b4565b9150612a56826129ef565b604082019050919050565b60006020820190508181036000830152612a7a81612a3e565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000612aa882612a81565b612ab28185612a8c565b9350612ac28185602086016119c5565b612acb816119f8565b840191505092915050565b6000608082019050612aeb6000830187611af9565b612af86020830186611af9565b612b056040830185611c0f565b8181036060830152612b178184612a9d565b905095945050505050565b600081519050612b318161191a565b92915050565b600060208284031215612b4d57612b4c6118e4565b5b6000612b5b84828501612b22565b91505092915050565b6000612b6f82611a64565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612ba257612ba16126ce565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612be782611a64565b9150612bf283611a64565b925082612c0257612c01612bad565b5b828204905092915050565b6000612c1882611a64565b9150612c2383611a64565b925082612c3357612c32612bad565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220c8c65f890cd4ab79e8772151164c3c6b8509c327724f605df253bcc695b15c5964736f6c634300080a0033",
        "immutableReferences": {},
        "generatedSources": [
          {
            "ast": {
              "nodeType": "YulBlock",
              "src": "0:516:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "35:152:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "52:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "55:77:17",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "45:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "45:88:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "45:88:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "149:1:17",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "152:4:17",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "142:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "142:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "142:15:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "173:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "176:4:17",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "166:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "166:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "166:15:17"
                      }
                    ]
                  },
                  "name": "panic_error_0x22",
                  "nodeType": "YulFunctionDefinition",
                  "src": "7:180:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "244:269:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "254:22:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "268:4:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "274:1:17",
                              "type": "",
                              "value": "2"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "264:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "264:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "254:6:17"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "285:38:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "315:4:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "321:1:17",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "311:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "311:12:17"
                        },
                        "variables": [
                          {
                            "name": "outOfPlaceEncoding",
                            "nodeType": "YulTypedName",
                            "src": "289:18:17",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "362:51:17",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "376:27:17",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "390:6:17"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "398:4:17",
                                    "type": "",
                                    "value": "0x7f"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "386:3:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "386:17:17"
                              },
                              "variableNames": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "376:6:17"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "outOfPlaceEncoding",
                              "nodeType": "YulIdentifier",
                              "src": "342:18:17"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "335:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "335:26:17"
                        },
                        "nodeType": "YulIf",
                        "src": "332:81:17"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "465:42:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x22",
                                  "nodeType": "YulIdentifier",
                                  "src": "479:16:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "479:18:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "479:18:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "outOfPlaceEncoding",
                              "nodeType": "YulIdentifier",
                              "src": "429:18:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "452:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "460:2:17",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "449:2:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "449:14:17"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "426:2:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "426:38:17"
                        },
                        "nodeType": "YulIf",
                        "src": "423:84:17"
                      }
                    ]
                  },
                  "name": "extract_byte_array_length",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "data",
                      "nodeType": "YulTypedName",
                      "src": "228:4:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "237:6:17",
                      "type": ""
                    }
                  ],
                  "src": "193:320:17"
                }
              ]
            },
            "contents": "{\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n}\n",
            "id": 17,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "deployedGeneratedSources": [
          {
            "ast": {
              "nodeType": "YulBlock",
              "src": "0:34932:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "47:35:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "57:19:17",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "73:2:17",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "67:5:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "67:9:17"
                        },
                        "variableNames": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "57:6:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "allocate_unbounded",
                  "nodeType": "YulFunctionDefinition",
                  "returnVariables": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "40:6:17",
                      "type": ""
                    }
                  ],
                  "src": "7:75:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "177:28:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "194:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "197:1:17",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "187:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "187:12:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "187:12:17"
                      }
                    ]
                  },
                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                  "nodeType": "YulFunctionDefinition",
                  "src": "88:117:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "300:28:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "317:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "320:1:17",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "310:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "310:12:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "310:12:17"
                      }
                    ]
                  },
                  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                  "nodeType": "YulFunctionDefinition",
                  "src": "211:117:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "378:105:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "388:89:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "403:5:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "410:66:17",
                              "type": "",
                              "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "399:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "399:78:17"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "388:7:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_bytes4",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "360:5:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "370:7:17",
                      "type": ""
                    }
                  ],
                  "src": "334:149:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "531:78:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "587:16:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "596:1:17",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "599:1:17",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "589:6:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "589:12:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "589:12:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "554:5:17"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "578:5:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_bytes4",
                                    "nodeType": "YulIdentifier",
                                    "src": "561:16:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "561:23:17"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "551:2:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "551:34:17"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "544:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "544:42:17"
                        },
                        "nodeType": "YulIf",
                        "src": "541:62:17"
                      }
                    ]
                  },
                  "name": "validator_revert_t_bytes4",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "524:5:17",
                      "type": ""
                    }
                  ],
                  "src": "489:120:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "666:86:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "676:29:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "698:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "685:12:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "685:20:17"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "676:5:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "740:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "validator_revert_t_bytes4",
                            "nodeType": "YulIdentifier",
                            "src": "714:25:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "714:32:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "714:32:17"
                      }
                    ]
                  },
                  "name": "abi_decode_t_bytes4",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "644:6:17",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "652:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "660:5:17",
                      "type": ""
                    }
                  ],
                  "src": "615:137:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "823:262:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "869:83:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "871:77:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "871:79:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "871:79:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "844:7:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "853:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "840:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "840:23:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "865:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "836:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "836:32:17"
                        },
                        "nodeType": "YulIf",
                        "src": "833:119:17"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "962:116:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "977:15:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "991:1:17",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "981:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "1006:62:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "1040:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "1051:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1036:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1036:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "1060:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_bytes4",
                                "nodeType": "YulIdentifier",
                                "src": "1016:19:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1016:52:17"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "1006:6:17"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_bytes4",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "793:9:17",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "804:7:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "816:6:17",
                      "type": ""
                    }
                  ],
                  "src": "758:327:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1133:48:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1143:32:17",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "1168:5:17"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "1161:6:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1161:13:17"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1154:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1154:21:17"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "1143:7:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_bool",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1115:5:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "1125:7:17",
                      "type": ""
                    }
                  ],
                  "src": "1091:90:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1246:50:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1263:3:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "1283:5:17"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_bool",
                                "nodeType": "YulIdentifier",
                                "src": "1268:14:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1268:21:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1256:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1256:34:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1256:34:17"
                      }
                    ]
                  },
                  "name": "abi_encode_t_bool_to_t_bool_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1234:5:17",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "1241:3:17",
                      "type": ""
                    }
                  ],
                  "src": "1187:109:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1394:118:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1404:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1416:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1427:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1412:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1412:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "1404:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1478:6:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1491:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1502:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1487:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1487:17:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_bool_to_t_bool_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "1440:37:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1440:65:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1440:65:17"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "1366:9:17",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1378:6:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "1389:4:17",
                      "type": ""
                    }
                  ],
                  "src": "1302:210:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1577:40:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1588:22:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1604:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1598:5:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1598:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "1588:6:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_length_t_string_memory_ptr",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1560:5:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "1570:6:17",
                      "type": ""
                    }
                  ],
                  "src": "1518:99:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1719:73:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1736:3:17"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1741:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1729:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1729:19:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1729:19:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1757:29:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1776:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1781:4:17",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1772:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1772:14:17"
                        },
                        "variableNames": [
                          {
                            "name": "updated_pos",
                            "nodeType": "YulIdentifier",
                            "src": "1757:11:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "1691:3:17",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "1696:6:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulTypedName",
                      "src": "1707:11:17",
                      "type": ""
                    }
                  ],
                  "src": "1623:169:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1847:258:17",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "1857:10:17",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1866:1:17",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "i",
                            "nodeType": "YulTypedName",
                            "src": "1861:1:17",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1926:63:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "dst",
                                        "nodeType": "YulIdentifier",
                                        "src": "1951:3:17"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "1956:1:17"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "1947:3:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1947:11:17"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "1970:3:17"
                                          },
                                          {
                                            "name": "i",
                                            "nodeType": "YulIdentifier",
                                            "src": "1975:1:17"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "1966:3:17"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "1966:11:17"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "1960:5:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1960:18:17"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "1940:6:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1940:39:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1940:39:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "1887:1:17"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1890:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "1884:2:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1884:13:17"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "1898:19:17",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "1900:15:17",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "1909:1:17"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1912:2:17",
                                    "type": "",
                                    "value": "32"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1905:3:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1905:10:17"
                              },
                              "variableNames": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "1900:1:17"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "1880:3:17",
                          "statements": []
                        },
                        "src": "1876:113:17"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2023:76:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "dst",
                                        "nodeType": "YulIdentifier",
                                        "src": "2073:3:17"
                                      },
                                      {
                                        "name": "length",
                                        "nodeType": "YulIdentifier",
                                        "src": "2078:6:17"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "2069:3:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2069:16:17"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2087:1:17",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "2062:6:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2062:27:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2062:27:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "2004:1:17"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2007:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "2001:2:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2001:13:17"
                        },
                        "nodeType": "YulIf",
                        "src": "1998:101:17"
                      }
                    ]
                  },
                  "name": "copy_memory_to_memory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "src",
                      "nodeType": "YulTypedName",
                      "src": "1829:3:17",
                      "type": ""
                    },
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "1834:3:17",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "1839:6:17",
                      "type": ""
                    }
                  ],
                  "src": "1798:307:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2159:54:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2169:38:17",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "2187:5:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2194:2:17",
                                  "type": "",
                                  "value": "31"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2183:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2183:14:17"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2203:2:17",
                                  "type": "",
                                  "value": "31"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nodeType": "YulIdentifier",
                                "src": "2199:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2199:7:17"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "2179:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2179:28:17"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nodeType": "YulIdentifier",
                            "src": "2169:6:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "round_up_to_mul_of_32",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "2142:5:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "result",
                      "nodeType": "YulTypedName",
                      "src": "2152:6:17",
                      "type": ""
                    }
                  ],
                  "src": "2111:102:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2311:272:17",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2321:53:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "2368:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "array_length_t_string_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "2335:32:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2335:39:17"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "2325:6:17",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2383:78:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "2449:3:17"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2454:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "2390:58:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2390:71:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "2383:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "2496:5:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2503:4:17",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2492:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2492:16:17"
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "2510:3:17"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2515:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "copy_memory_to_memory",
                            "nodeType": "YulIdentifier",
                            "src": "2470:21:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2470:52:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2470:52:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2531:46:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "2542:3:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "2569:6:17"
                                }
                              ],
                              "functionName": {
                                "name": "round_up_to_mul_of_32",
                                "nodeType": "YulIdentifier",
                                "src": "2547:21:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2547:29:17"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2538:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2538:39:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "2531:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "2292:5:17",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "2299:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "2307:3:17",
                      "type": ""
                    }
                  ],
                  "src": "2219:364:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2707:195:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2717:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2729:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2740:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2725:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2725:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2717:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2764:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2775:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2760:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2760:17:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "2783:4:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2789:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "2779:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2779:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2753:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2753:47:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2753:47:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2809:86:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "2881:6:17"
                            },
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "2890:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "2817:63:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2817:78:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2809:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "2679:9:17",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "2691:6:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "2702:4:17",
                      "type": ""
                    }
                  ],
                  "src": "2589:313:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2953:32:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2963:16:17",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2974:5:17"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "2963:7:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "2935:5:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "2945:7:17",
                      "type": ""
                    }
                  ],
                  "src": "2908:77:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3034:79:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "3091:16:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3100:1:17",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3103:1:17",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "3093:6:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3093:12:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "3093:12:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "3057:5:17"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "3082:5:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_uint256",
                                    "nodeType": "YulIdentifier",
                                    "src": "3064:17:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3064:24:17"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "3054:2:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3054:35:17"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "3047:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3047:43:17"
                        },
                        "nodeType": "YulIf",
                        "src": "3044:63:17"
                      }
                    ]
                  },
                  "name": "validator_revert_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "3027:5:17",
                      "type": ""
                    }
                  ],
                  "src": "2991:122:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3171:87:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3181:29:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "3203:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "3190:12:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3190:20:17"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3181:5:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3246:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "validator_revert_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "3219:26:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3219:33:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3219:33:17"
                      }
                    ]
                  },
                  "name": "abi_decode_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "3149:6:17",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "3157:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "3165:5:17",
                      "type": ""
                    }
                  ],
                  "src": "3119:139:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3330:263:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "3376:83:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "3378:77:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3378:79:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "3378:79:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "3351:7:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3360:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "3347:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3347:23:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3372:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "3343:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3343:32:17"
                        },
                        "nodeType": "YulIf",
                        "src": "3340:119:17"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "3469:117:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "3484:15:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3498:1:17",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "3488:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "3513:63:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "3548:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "3559:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "3544:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3544:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "3568:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "3523:20:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3523:53:17"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "3513:6:17"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "3300:9:17",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "3311:7:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "3323:6:17",
                      "type": ""
                    }
                  ],
                  "src": "3264:329:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3644:81:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3654:65:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3669:5:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3676:42:17",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "3665:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3665:54:17"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "3654:7:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_uint160",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "3626:5:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "3636:7:17",
                      "type": ""
                    }
                  ],
                  "src": "3599:126:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3776:51:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3786:35:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3815:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint160",
                            "nodeType": "YulIdentifier",
                            "src": "3797:17:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3797:24:17"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "3786:7:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_address",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "3758:5:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "3768:7:17",
                      "type": ""
                    }
                  ],
                  "src": "3731:96:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3898:53:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3915:3:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "3938:5:17"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "3920:17:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3920:24:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3908:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3908:37:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3908:37:17"
                      }
                    ]
                  },
                  "name": "abi_encode_t_address_to_t_address_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "3886:5:17",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "3893:3:17",
                      "type": ""
                    }
                  ],
                  "src": "3833:118:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4055:124:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "4065:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4077:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4088:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4073:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4073:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "4065:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "4145:6:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4158:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4169:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4154:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4154:17:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_address_to_t_address_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "4101:43:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4101:71:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4101:71:17"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "4027:9:17",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "4039:6:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "4050:4:17",
                      "type": ""
                    }
                  ],
                  "src": "3957:222:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4228:79:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "4285:16:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "4294:1:17",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "4297:1:17",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "4287:6:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4287:12:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "4287:12:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "4251:5:17"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "4276:5:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_address",
                                    "nodeType": "YulIdentifier",
                                    "src": "4258:17:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4258:24:17"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "4248:2:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4248:35:17"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "4241:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4241:43:17"
                        },
                        "nodeType": "YulIf",
                        "src": "4238:63:17"
                      }
                    ]
                  },
                  "name": "validator_revert_t_address",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "4221:5:17",
                      "type": ""
                    }
                  ],
                  "src": "4185:122:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4365:87:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "4375:29:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "4397:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "4384:12:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4384:20:17"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4375:5:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "4440:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "validator_revert_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "4413:26:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4413:33:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4413:33:17"
                      }
                    ]
                  },
                  "name": "abi_decode_t_address",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "4343:6:17",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "4351:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "4359:5:17",
                      "type": ""
                    }
                  ],
                  "src": "4313:139:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4541:391:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "4587:83:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "4589:77:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4589:79:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "4589:79:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "4562:7:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4571:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "4558:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4558:23:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4583:2:17",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "4554:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4554:32:17"
                        },
                        "nodeType": "YulIf",
                        "src": "4551:119:17"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "4680:117:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "4695:15:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4709:1:17",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "4699:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "4724:63:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "4759:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "4770:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "4755:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4755:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "4779:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "4734:20:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4734:53:17"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "4724:6:17"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "4807:118:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "4822:16:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4836:2:17",
                              "type": "",
                              "value": "32"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "4826:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "4852:63:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "4887:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "4898:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "4883:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4883:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "4907:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "4862:20:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4862:53:17"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nodeType": "YulIdentifier",
                                "src": "4852:6:17"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "4503:9:17",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "4514:7:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "4526:6:17",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "4534:6:17",
                      "type": ""
                    }
                  ],
                  "src": "4458:474:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5038:519:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "5084:83:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "5086:77:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5086:79:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "5086:79:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "5059:7:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "5068:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "5055:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5055:23:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5080:2:17",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "5051:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5051:32:17"
                        },
                        "nodeType": "YulIf",
                        "src": "5048:119:17"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "5177:117:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "5192:15:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5206:1:17",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "5196:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "5221:63:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "5256:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "5267:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "5252:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5252:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "5276:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "5231:20:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5231:53:17"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "5221:6:17"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "5304:118:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "5319:16:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5333:2:17",
                              "type": "",
                              "value": "32"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "5323:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "5349:63:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "5384:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "5395:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "5380:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5380:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "5404:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "5359:20:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5359:53:17"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nodeType": "YulIdentifier",
                                "src": "5349:6:17"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "5432:118:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "5447:16:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5461:2:17",
                              "type": "",
                              "value": "64"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "5451:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "5477:63:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "5512:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "5523:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "5508:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5508:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "5532:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "5487:20:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5487:53:17"
                            },
                            "variableNames": [
                              {
                                "name": "value2",
                                "nodeType": "YulIdentifier",
                                "src": "5477:6:17"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_addresst_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "4992:9:17",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "5003:7:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "5015:6:17",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "5023:6:17",
                      "type": ""
                    },
                    {
                      "name": "value2",
                      "nodeType": "YulTypedName",
                      "src": "5031:6:17",
                      "type": ""
                    }
                  ],
                  "src": "4938:619:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5629:263:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "5675:83:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "5677:77:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5677:79:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "5677:79:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "5650:7:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "5659:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "5646:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5646:23:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5671:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "5642:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5642:32:17"
                        },
                        "nodeType": "YulIf",
                        "src": "5639:119:17"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "5768:117:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "5783:15:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5797:1:17",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "5787:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "5812:63:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "5847:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "5858:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "5843:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5843:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "5867:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "5822:20:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5822:53:17"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "5812:6:17"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_address",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "5599:9:17",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "5610:7:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "5622:6:17",
                      "type": ""
                    }
                  ],
                  "src": "5563:329:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5963:53:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "5980:3:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "6003:5:17"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "5985:17:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5985:24:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "5973:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5973:37:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5973:37:17"
                      }
                    ]
                  },
                  "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "5951:5:17",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "5958:3:17",
                      "type": ""
                    }
                  ],
                  "src": "5898:118:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6120:124:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "6130:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6142:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6153:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6138:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6138:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "6130:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "6210:6:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "6223:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6234:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "6219:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6219:17:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "6166:43:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6166:71:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6166:71:17"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "6092:9:17",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "6104:6:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "6115:4:17",
                      "type": ""
                    }
                  ],
                  "src": "6022:222:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6290:76:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6344:16:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6353:1:17",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6356:1:17",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "6346:6:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6346:12:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "6346:12:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "6313:5:17"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "6335:5:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_bool",
                                    "nodeType": "YulIdentifier",
                                    "src": "6320:14:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "6320:21:17"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "6310:2:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6310:32:17"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6303:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6303:40:17"
                        },
                        "nodeType": "YulIf",
                        "src": "6300:60:17"
                      }
                    ]
                  },
                  "name": "validator_revert_t_bool",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "6283:5:17",
                      "type": ""
                    }
                  ],
                  "src": "6250:116:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6421:84:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "6431:29:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "6453:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "6440:12:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6440:20:17"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "6431:5:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "6493:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "validator_revert_t_bool",
                            "nodeType": "YulIdentifier",
                            "src": "6469:23:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6469:30:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6469:30:17"
                      }
                    ]
                  },
                  "name": "abi_decode_t_bool",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "6399:6:17",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "6407:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "6415:5:17",
                      "type": ""
                    }
                  ],
                  "src": "6372:133:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6591:388:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6637:83:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "6639:77:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6639:79:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "6639:79:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "6612:7:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "6621:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "6608:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6608:23:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6633:2:17",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "6604:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6604:32:17"
                        },
                        "nodeType": "YulIf",
                        "src": "6601:119:17"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "6730:117:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "6745:15:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6759:1:17",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "6749:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "6774:63:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "6809:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "6820:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "6805:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "6805:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "6829:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "6784:20:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6784:53:17"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "6774:6:17"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "6857:115:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "6872:16:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6886:2:17",
                              "type": "",
                              "value": "32"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "6876:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "6902:60:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "6934:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "6945:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "6930:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "6930:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "6954:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_bool",
                                "nodeType": "YulIdentifier",
                                "src": "6912:17:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6912:50:17"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nodeType": "YulIdentifier",
                                "src": "6902:6:17"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_bool",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "6553:9:17",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "6564:7:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "6576:6:17",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "6584:6:17",
                      "type": ""
                    }
                  ],
                  "src": "6511:468:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7074:28:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7091:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7094:1:17",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "7084:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7084:12:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7084:12:17"
                      }
                    ]
                  },
                  "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                  "nodeType": "YulFunctionDefinition",
                  "src": "6985:117:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7197:28:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7214:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7217:1:17",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "7207:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7207:12:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7207:12:17"
                      }
                    ]
                  },
                  "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                  "nodeType": "YulFunctionDefinition",
                  "src": "7108:117:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7259:152:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7276:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7279:77:17",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7269:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7269:88:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7269:88:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7373:1:17",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7376:4:17",
                              "type": "",
                              "value": "0x41"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7366:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7366:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7366:15:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7397:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7400:4:17",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "7390:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7390:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7390:15:17"
                      }
                    ]
                  },
                  "name": "panic_error_0x41",
                  "nodeType": "YulFunctionDefinition",
                  "src": "7231:180:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7460:238:17",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "7470:58:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "7492:6:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "size",
                                  "nodeType": "YulIdentifier",
                                  "src": "7522:4:17"
                                }
                              ],
                              "functionName": {
                                "name": "round_up_to_mul_of_32",
                                "nodeType": "YulIdentifier",
                                "src": "7500:21:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7500:27:17"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7488:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7488:40:17"
                        },
                        "variables": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulTypedName",
                            "src": "7474:10:17",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "7639:22:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nodeType": "YulIdentifier",
                                  "src": "7641:16:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "7641:18:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "7641:18:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "newFreePtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "7582:10:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "7594:18:17",
                                  "type": "",
                                  "value": "0xffffffffffffffff"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "7579:2:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7579:34:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "newFreePtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "7618:10:17"
                                },
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "7630:6:17"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "7615:2:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7615:22:17"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nodeType": "YulIdentifier",
                            "src": "7576:2:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7576:62:17"
                        },
                        "nodeType": "YulIf",
                        "src": "7573:88:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7677:2:17",
                              "type": "",
                              "value": "64"
                            },
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "7681:10:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7670:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7670:22:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7670:22:17"
                      }
                    ]
                  },
                  "name": "finalize_allocation",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "7446:6:17",
                      "type": ""
                    },
                    {
                      "name": "size",
                      "nodeType": "YulTypedName",
                      "src": "7454:4:17",
                      "type": ""
                    }
                  ],
                  "src": "7417:281:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7745:88:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "7755:30:17",
                        "value": {
                          "arguments": [],
                          "functionName": {
                            "name": "allocate_unbounded",
                            "nodeType": "YulIdentifier",
                            "src": "7765:18:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7765:20:17"
                        },
                        "variableNames": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "7755:6:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "7814:6:17"
                            },
                            {
                              "name": "size",
                              "nodeType": "YulIdentifier",
                              "src": "7822:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "finalize_allocation",
                            "nodeType": "YulIdentifier",
                            "src": "7794:19:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7794:33:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7794:33:17"
                      }
                    ]
                  },
                  "name": "allocate_memory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "size",
                      "nodeType": "YulTypedName",
                      "src": "7729:4:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "7738:6:17",
                      "type": ""
                    }
                  ],
                  "src": "7704:129:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7905:241:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "8010:22:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nodeType": "YulIdentifier",
                                  "src": "8012:16:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "8012:18:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "8012:18:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "7982:6:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7990:18:17",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "7979:2:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7979:30:17"
                        },
                        "nodeType": "YulIf",
                        "src": "7976:56:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8042:37:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "8072:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "8050:21:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8050:29:17"
                        },
                        "variableNames": [
                          {
                            "name": "size",
                            "nodeType": "YulIdentifier",
                            "src": "8042:4:17"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8116:23:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "size",
                              "nodeType": "YulIdentifier",
                              "src": "8128:4:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8134:4:17",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8124:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8124:15:17"
                        },
                        "variableNames": [
                          {
                            "name": "size",
                            "nodeType": "YulIdentifier",
                            "src": "8116:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_allocation_size_t_bytes_memory_ptr",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "7889:6:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "size",
                      "nodeType": "YulTypedName",
                      "src": "7900:4:17",
                      "type": ""
                    }
                  ],
                  "src": "7839:307:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8203:103:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "8226:3:17"
                            },
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "8231:3:17"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "8236:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "calldatacopy",
                            "nodeType": "YulIdentifier",
                            "src": "8213:12:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8213:30:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8213:30:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "8284:3:17"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "8289:6:17"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8280:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8280:16:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8298:1:17",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "8273:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8273:27:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8273:27:17"
                      }
                    ]
                  },
                  "name": "copy_calldata_to_memory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "src",
                      "nodeType": "YulTypedName",
                      "src": "8185:3:17",
                      "type": ""
                    },
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "8190:3:17",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "8195:6:17",
                      "type": ""
                    }
                  ],
                  "src": "8152:154:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8395:327:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "8405:74:17",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "8471:6:17"
                                }
                              ],
                              "functionName": {
                                "name": "array_allocation_size_t_bytes_memory_ptr",
                                "nodeType": "YulIdentifier",
                                "src": "8430:40:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8430:48:17"
                            }
                          ],
                          "functionName": {
                            "name": "allocate_memory",
                            "nodeType": "YulIdentifier",
                            "src": "8414:15:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8414:65:17"
                        },
                        "variableNames": [
                          {
                            "name": "array",
                            "nodeType": "YulIdentifier",
                            "src": "8405:5:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "8495:5:17"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "8502:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "8488:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8488:21:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8488:21:17"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "8518:27:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "8533:5:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8540:4:17",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8529:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8529:16:17"
                        },
                        "variables": [
                          {
                            "name": "dst",
                            "nodeType": "YulTypedName",
                            "src": "8522:3:17",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "8583:83:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                                  "nodeType": "YulIdentifier",
                                  "src": "8585:77:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "8585:79:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "8585:79:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "src",
                                  "nodeType": "YulIdentifier",
                                  "src": "8564:3:17"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "8569:6:17"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8560:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8560:16:17"
                            },
                            {
                              "name": "end",
                              "nodeType": "YulIdentifier",
                              "src": "8578:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "8557:2:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8557:25:17"
                        },
                        "nodeType": "YulIf",
                        "src": "8554:112:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "8699:3:17"
                            },
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "8704:3:17"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "8709:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "copy_calldata_to_memory",
                            "nodeType": "YulIdentifier",
                            "src": "8675:23:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8675:41:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8675:41:17"
                      }
                    ]
                  },
                  "name": "abi_decode_available_length_t_bytes_memory_ptr",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "src",
                      "nodeType": "YulTypedName",
                      "src": "8368:3:17",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "8373:6:17",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "8381:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "array",
                      "nodeType": "YulTypedName",
                      "src": "8389:5:17",
                      "type": ""
                    }
                  ],
                  "src": "8312:410:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8802:277:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "8851:83:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                                  "nodeType": "YulIdentifier",
                                  "src": "8853:77:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "8853:79:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "8853:79:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "8830:6:17"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "8838:4:17",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "8826:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8826:17:17"
                                },
                                {
                                  "name": "end",
                                  "nodeType": "YulIdentifier",
                                  "src": "8845:3:17"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nodeType": "YulIdentifier",
                                "src": "8822:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8822:27:17"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "8815:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8815:35:17"
                        },
                        "nodeType": "YulIf",
                        "src": "8812:122:17"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "8943:34:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "8970:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "8957:12:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8957:20:17"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "8947:6:17",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8986:87:17",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "9046:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "9054:4:17",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "9042:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9042:17:17"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "9061:6:17"
                            },
                            {
                              "name": "end",
                              "nodeType": "YulIdentifier",
                              "src": "9069:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_available_length_t_bytes_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "8995:46:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8995:78:17"
                        },
                        "variableNames": [
                          {
                            "name": "array",
                            "nodeType": "YulIdentifier",
                            "src": "8986:5:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_t_bytes_memory_ptr",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "8780:6:17",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "8788:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "array",
                      "nodeType": "YulTypedName",
                      "src": "8796:5:17",
                      "type": ""
                    }
                  ],
                  "src": "8741:338:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9211:817:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "9258:83:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "9260:77:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "9260:79:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "9260:79:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "9232:7:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "9241:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "9228:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9228:23:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9253:3:17",
                              "type": "",
                              "value": "128"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "9224:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9224:33:17"
                        },
                        "nodeType": "YulIf",
                        "src": "9221:120:17"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "9351:117:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "9366:15:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9380:1:17",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "9370:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "9395:63:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "9430:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "9441:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "9426:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "9426:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "9450:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "9405:20:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9405:53:17"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "9395:6:17"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "9478:118:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "9493:16:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9507:2:17",
                              "type": "",
                              "value": "32"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "9497:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "9523:63:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "9558:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "9569:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "9554:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "9554:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "9578:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "9533:20:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9533:53:17"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nodeType": "YulIdentifier",
                                "src": "9523:6:17"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "9606:118:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "9621:16:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9635:2:17",
                              "type": "",
                              "value": "64"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "9625:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "9651:63:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "9686:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "9697:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "9682:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "9682:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "9706:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "9661:20:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9661:53:17"
                            },
                            "variableNames": [
                              {
                                "name": "value2",
                                "nodeType": "YulIdentifier",
                                "src": "9651:6:17"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "9734:287:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "9749:46:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "9780:9:17"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "9791:2:17",
                                      "type": "",
                                      "value": "96"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "9776:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "9776:18:17"
                                }
                              ],
                              "functionName": {
                                "name": "calldataload",
                                "nodeType": "YulIdentifier",
                                "src": "9763:12:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9763:32:17"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "9753:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "9842:83:17",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [],
                                    "functionName": {
                                      "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                      "nodeType": "YulIdentifier",
                                      "src": "9844:77:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "9844:79:17"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "9844:79:17"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "9814:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "9822:18:17",
                                  "type": "",
                                  "value": "0xffffffffffffffff"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "9811:2:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9811:30:17"
                            },
                            "nodeType": "YulIf",
                            "src": "9808:117:17"
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "9939:72:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "9983:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "9994:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "9979:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "9979:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "10003:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_bytes_memory_ptr",
                                "nodeType": "YulIdentifier",
                                "src": "9949:29:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9949:62:17"
                            },
                            "variableNames": [
                              {
                                "name": "value3",
                                "nodeType": "YulIdentifier",
                                "src": "9939:6:17"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "9157:9:17",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "9168:7:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "9180:6:17",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "9188:6:17",
                      "type": ""
                    },
                    {
                      "name": "value2",
                      "nodeType": "YulTypedName",
                      "src": "9196:6:17",
                      "type": ""
                    },
                    {
                      "name": "value3",
                      "nodeType": "YulTypedName",
                      "src": "9204:6:17",
                      "type": ""
                    }
                  ],
                  "src": "9085:943:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10101:241:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "10206:22:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x41",
                                  "nodeType": "YulIdentifier",
                                  "src": "10208:16:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "10208:18:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "10208:18:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "10178:6:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10186:18:17",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "10175:2:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10175:30:17"
                        },
                        "nodeType": "YulIf",
                        "src": "10172:56:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "10238:37:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "10268:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "10246:21:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10246:29:17"
                        },
                        "variableNames": [
                          {
                            "name": "size",
                            "nodeType": "YulIdentifier",
                            "src": "10238:4:17"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "10312:23:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "size",
                              "nodeType": "YulIdentifier",
                              "src": "10324:4:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10330:4:17",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10320:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10320:15:17"
                        },
                        "variableNames": [
                          {
                            "name": "size",
                            "nodeType": "YulIdentifier",
                            "src": "10312:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_allocation_size_t_string_memory_ptr",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "10085:6:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "size",
                      "nodeType": "YulTypedName",
                      "src": "10096:4:17",
                      "type": ""
                    }
                  ],
                  "src": "10034:308:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10432:328:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "10442:75:17",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "10509:6:17"
                                }
                              ],
                              "functionName": {
                                "name": "array_allocation_size_t_string_memory_ptr",
                                "nodeType": "YulIdentifier",
                                "src": "10467:41:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10467:49:17"
                            }
                          ],
                          "functionName": {
                            "name": "allocate_memory",
                            "nodeType": "YulIdentifier",
                            "src": "10451:15:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10451:66:17"
                        },
                        "variableNames": [
                          {
                            "name": "array",
                            "nodeType": "YulIdentifier",
                            "src": "10442:5:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "10533:5:17"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "10540:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "10526:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10526:21:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10526:21:17"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "10556:27:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "10571:5:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10578:4:17",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10567:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10567:16:17"
                        },
                        "variables": [
                          {
                            "name": "dst",
                            "nodeType": "YulTypedName",
                            "src": "10560:3:17",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "10621:83:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                                  "nodeType": "YulIdentifier",
                                  "src": "10623:77:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "10623:79:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "10623:79:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "src",
                                  "nodeType": "YulIdentifier",
                                  "src": "10602:3:17"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "10607:6:17"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "10598:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10598:16:17"
                            },
                            {
                              "name": "end",
                              "nodeType": "YulIdentifier",
                              "src": "10616:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "10595:2:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10595:25:17"
                        },
                        "nodeType": "YulIf",
                        "src": "10592:112:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "10737:3:17"
                            },
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "10742:3:17"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "10747:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "copy_calldata_to_memory",
                            "nodeType": "YulIdentifier",
                            "src": "10713:23:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10713:41:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10713:41:17"
                      }
                    ]
                  },
                  "name": "abi_decode_available_length_t_string_memory_ptr",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "src",
                      "nodeType": "YulTypedName",
                      "src": "10405:3:17",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "10410:6:17",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "10418:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "array",
                      "nodeType": "YulTypedName",
                      "src": "10426:5:17",
                      "type": ""
                    }
                  ],
                  "src": "10348:412:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10842:278:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "10891:83:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                                  "nodeType": "YulIdentifier",
                                  "src": "10893:77:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "10893:79:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "10893:79:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "10870:6:17"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10878:4:17",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "10866:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10866:17:17"
                                },
                                {
                                  "name": "end",
                                  "nodeType": "YulIdentifier",
                                  "src": "10885:3:17"
                                }
                              ],
                              "functionName": {
                                "name": "slt",
                                "nodeType": "YulIdentifier",
                                "src": "10862:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10862:27:17"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "10855:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10855:35:17"
                        },
                        "nodeType": "YulIf",
                        "src": "10852:122:17"
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "10983:34:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "11010:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "10997:12:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10997:20:17"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "10987:6:17",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "11026:88:17",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "11087:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "11095:4:17",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "11083:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11083:17:17"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "11102:6:17"
                            },
                            {
                              "name": "end",
                              "nodeType": "YulIdentifier",
                              "src": "11110:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_available_length_t_string_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "11035:47:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11035:79:17"
                        },
                        "variableNames": [
                          {
                            "name": "array",
                            "nodeType": "YulIdentifier",
                            "src": "11026:5:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_t_string_memory_ptr",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "10820:6:17",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "10828:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "array",
                      "nodeType": "YulTypedName",
                      "src": "10836:5:17",
                      "type": ""
                    }
                  ],
                  "src": "10780:340:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11219:561:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "11265:83:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "11267:77:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "11267:79:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "11267:79:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "11240:7:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "11249:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "11236:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11236:23:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11261:2:17",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "11232:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11232:32:17"
                        },
                        "nodeType": "YulIf",
                        "src": "11229:119:17"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "11358:117:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "11373:15:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11387:1:17",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "11377:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "11402:63:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "11437:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "11448:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "11433:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "11433:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "11457:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "11412:20:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11412:53:17"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "11402:6:17"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "11485:288:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "11500:46:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "11531:9:17"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "11542:2:17",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "11527:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "11527:18:17"
                                }
                              ],
                              "functionName": {
                                "name": "calldataload",
                                "nodeType": "YulIdentifier",
                                "src": "11514:12:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11514:32:17"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "11504:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "11593:83:17",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [],
                                    "functionName": {
                                      "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                      "nodeType": "YulIdentifier",
                                      "src": "11595:77:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "11595:79:17"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "11595:79:17"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "11565:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "11573:18:17",
                                  "type": "",
                                  "value": "0xffffffffffffffff"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "11562:2:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11562:30:17"
                            },
                            "nodeType": "YulIf",
                            "src": "11559:117:17"
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "11690:73:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "11735:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "11746:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "11731:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "11731:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "11755:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_string_memory_ptr",
                                "nodeType": "YulIdentifier",
                                "src": "11700:30:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11700:63:17"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nodeType": "YulIdentifier",
                                "src": "11690:6:17"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_string_memory_ptr",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "11181:9:17",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "11192:7:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "11204:6:17",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "11212:6:17",
                      "type": ""
                    }
                  ],
                  "src": "11126:654:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11830:49:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "11840:33:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "11855:5:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11862:10:17",
                              "type": "",
                              "value": "0xffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "11851:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11851:22:17"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "11840:7:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_uint32",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "11812:5:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "11822:7:17",
                      "type": ""
                    }
                  ],
                  "src": "11786:93:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11927:78:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "11983:16:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "11992:1:17",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "11995:1:17",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "11985:6:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "11985:12:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "11985:12:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "11950:5:17"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "11974:5:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_uint32",
                                    "nodeType": "YulIdentifier",
                                    "src": "11957:16:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "11957:23:17"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "11947:2:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11947:34:17"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "11940:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11940:42:17"
                        },
                        "nodeType": "YulIf",
                        "src": "11937:62:17"
                      }
                    ]
                  },
                  "name": "validator_revert_t_uint32",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "11920:5:17",
                      "type": ""
                    }
                  ],
                  "src": "11885:120:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12062:86:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "12072:29:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "12094:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "12081:12:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12081:20:17"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "12072:5:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "12136:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "validator_revert_t_uint32",
                            "nodeType": "YulIdentifier",
                            "src": "12110:25:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12110:32:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12110:32:17"
                      }
                    ]
                  },
                  "name": "abi_decode_t_uint32",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "12040:6:17",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "12048:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "12056:5:17",
                      "type": ""
                    }
                  ],
                  "src": "12011:137:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12280:817:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "12327:83:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "12329:77:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "12329:79:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "12329:79:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "12301:7:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "12310:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "12297:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12297:23:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12322:3:17",
                              "type": "",
                              "value": "128"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "12293:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12293:33:17"
                        },
                        "nodeType": "YulIf",
                        "src": "12290:120:17"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "12420:117:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "12435:15:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12449:1:17",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "12439:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "12464:63:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "12499:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "12510:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "12495:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "12495:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "12519:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "12474:20:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12474:53:17"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "12464:6:17"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "12547:118:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "12562:16:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12576:2:17",
                              "type": "",
                              "value": "32"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "12566:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "12592:63:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "12627:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "12638:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "12623:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "12623:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "12647:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "12602:20:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12602:53:17"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nodeType": "YulIdentifier",
                                "src": "12592:6:17"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "12675:117:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "12690:16:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12704:2:17",
                              "type": "",
                              "value": "64"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "12694:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "12720:62:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "12754:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "12765:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "12750:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "12750:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "12774:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_uint32",
                                "nodeType": "YulIdentifier",
                                "src": "12730:19:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12730:52:17"
                            },
                            "variableNames": [
                              {
                                "name": "value2",
                                "nodeType": "YulIdentifier",
                                "src": "12720:6:17"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "12802:288:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "12817:46:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "12848:9:17"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "12859:2:17",
                                      "type": "",
                                      "value": "96"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "12844:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "12844:18:17"
                                }
                              ],
                              "functionName": {
                                "name": "calldataload",
                                "nodeType": "YulIdentifier",
                                "src": "12831:12:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12831:32:17"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "12821:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "12910:83:17",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [],
                                    "functionName": {
                                      "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                      "nodeType": "YulIdentifier",
                                      "src": "12912:77:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "12912:79:17"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "12912:79:17"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "12882:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "12890:18:17",
                                  "type": "",
                                  "value": "0xffffffffffffffff"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "12879:2:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12879:30:17"
                            },
                            "nodeType": "YulIf",
                            "src": "12876:117:17"
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "13007:73:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "13052:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "13063:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "13048:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "13048:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "13072:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_string_memory_ptr",
                                "nodeType": "YulIdentifier",
                                "src": "13017:30:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "13017:63:17"
                            },
                            "variableNames": [
                              {
                                "name": "value3",
                                "nodeType": "YulIdentifier",
                                "src": "13007:6:17"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_addresst_uint32t_string_memory_ptr",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "12226:9:17",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "12237:7:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "12249:6:17",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "12257:6:17",
                      "type": ""
                    },
                    {
                      "name": "value2",
                      "nodeType": "YulTypedName",
                      "src": "12265:6:17",
                      "type": ""
                    },
                    {
                      "name": "value3",
                      "nodeType": "YulTypedName",
                      "src": "12273:6:17",
                      "type": ""
                    }
                  ],
                  "src": "12154:943:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "13186:391:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "13232:83:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "13234:77:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "13234:79:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "13234:79:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "13207:7:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "13216:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "13203:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "13203:23:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13228:2:17",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "13199:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13199:32:17"
                        },
                        "nodeType": "YulIf",
                        "src": "13196:119:17"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "13325:117:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "13340:15:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13354:1:17",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "13344:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "13369:63:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "13404:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "13415:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "13400:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "13400:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "13424:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "13379:20:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "13379:53:17"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "13369:6:17"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "13452:118:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "13467:16:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13481:2:17",
                              "type": "",
                              "value": "32"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "13471:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "13497:63:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "13532:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "13543:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "13528:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "13528:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "13552:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "13507:20:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "13507:53:17"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nodeType": "YulIdentifier",
                                "src": "13497:6:17"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_address",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "13148:9:17",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "13159:7:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "13171:6:17",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "13179:6:17",
                      "type": ""
                    }
                  ],
                  "src": "13103:474:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "13611:152:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13628:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13631:77:17",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "13621:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13621:88:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "13621:88:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13725:1:17",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13728:4:17",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "13718:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13718:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "13718:15:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13749:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13752:4:17",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "13742:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13742:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "13742:15:17"
                      }
                    ]
                  },
                  "name": "panic_error_0x22",
                  "nodeType": "YulFunctionDefinition",
                  "src": "13583:180:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "13820:269:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "13830:22:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "13844:4:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13850:1:17",
                              "type": "",
                              "value": "2"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "13840:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13840:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "13830:6:17"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "13861:38:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "13891:4:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13897:1:17",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "13887:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13887:12:17"
                        },
                        "variables": [
                          {
                            "name": "outOfPlaceEncoding",
                            "nodeType": "YulTypedName",
                            "src": "13865:18:17",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "13938:51:17",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "13952:27:17",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "13966:6:17"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "13974:4:17",
                                    "type": "",
                                    "value": "0x7f"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "13962:3:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "13962:17:17"
                              },
                              "variableNames": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "13952:6:17"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "outOfPlaceEncoding",
                              "nodeType": "YulIdentifier",
                              "src": "13918:18:17"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "13911:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13911:26:17"
                        },
                        "nodeType": "YulIf",
                        "src": "13908:81:17"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "14041:42:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x22",
                                  "nodeType": "YulIdentifier",
                                  "src": "14055:16:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "14055:18:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "14055:18:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "outOfPlaceEncoding",
                              "nodeType": "YulIdentifier",
                              "src": "14005:18:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "14028:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "14036:2:17",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "14025:2:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "14025:14:17"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "14002:2:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14002:38:17"
                        },
                        "nodeType": "YulIf",
                        "src": "13999:84:17"
                      }
                    ]
                  },
                  "name": "extract_byte_array_length",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "data",
                      "nodeType": "YulTypedName",
                      "src": "13804:4:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "13813:6:17",
                      "type": ""
                    }
                  ],
                  "src": "13769:320:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "14201:125:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "14223:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "14231:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "14219:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "14219:14:17"
                            },
                            {
                              "hexValue": "4552433732313a20617070726f76656420717565727920666f72206e6f6e6578",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "14235:34:17",
                              "type": "",
                              "value": "ERC721: approved query for nonex"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "14212:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14212:58:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "14212:58:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "14291:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "14299:2:17",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "14287:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "14287:15:17"
                            },
                            {
                              "hexValue": "697374656e7420746f6b656e",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "14304:14:17",
                              "type": "",
                              "value": "istent token"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "14280:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14280:39:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "14280:39:17"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_9291e0f44949204f2e9b40e6be090924979d6047b2365868f4e9f027722eb89d",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "14193:6:17",
                      "type": ""
                    }
                  ],
                  "src": "14095:231:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "14478:220:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "14488:74:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "14554:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14559:2:17",
                              "type": "",
                              "value": "44"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "14495:58:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14495:67:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "14488:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "14660:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_9291e0f44949204f2e9b40e6be090924979d6047b2365868f4e9f027722eb89d",
                            "nodeType": "YulIdentifier",
                            "src": "14571:88:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14571:93:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "14571:93:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "14673:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "14684:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14689:2:17",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14680:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14680:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "14673:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_9291e0f44949204f2e9b40e6be090924979d6047b2365868f4e9f027722eb89d_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "14466:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "14474:3:17",
                      "type": ""
                    }
                  ],
                  "src": "14332:366:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "14875:248:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "14885:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "14897:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14908:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14893:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14893:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "14885:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "14932:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "14943:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "14928:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "14928:17:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "14951:4:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "14957:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "14947:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "14947:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "14921:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14921:47:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "14921:47:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "14977:139:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "15111:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_9291e0f44949204f2e9b40e6be090924979d6047b2365868f4e9f027722eb89d_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "14985:124:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14985:131:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "14977:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_9291e0f44949204f2e9b40e6be090924979d6047b2365868f4e9f027722eb89d__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "14855:9:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "14870:4:17",
                      "type": ""
                    }
                  ],
                  "src": "14704:419:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "15235:114:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "15257:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "15265:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "15253:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "15253:14:17"
                            },
                            {
                              "hexValue": "4552433732313a20617070726f76616c20746f2063757272656e74206f776e65",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "15269:34:17",
                              "type": "",
                              "value": "ERC721: approval to current owne"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "15246:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15246:58:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "15246:58:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "15325:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "15333:2:17",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "15321:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "15321:15:17"
                            },
                            {
                              "hexValue": "72",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "15338:3:17",
                              "type": "",
                              "value": "r"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "15314:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15314:28:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "15314:28:17"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "15227:6:17",
                      "type": ""
                    }
                  ],
                  "src": "15129:220:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "15501:220:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "15511:74:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "15577:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15582:2:17",
                              "type": "",
                              "value": "33"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "15518:58:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15518:67:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "15511:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "15683:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942",
                            "nodeType": "YulIdentifier",
                            "src": "15594:88:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15594:93:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "15594:93:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "15696:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "15707:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15712:2:17",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15703:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15703:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "15696:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "15489:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "15497:3:17",
                      "type": ""
                    }
                  ],
                  "src": "15355:366:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "15898:248:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "15908:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "15920:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15931:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15916:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15916:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "15908:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "15955:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "15966:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "15951:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "15951:17:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "15974:4:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "15980:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "15970:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "15970:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "15944:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15944:47:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "15944:47:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "16000:139:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "16134:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "16008:124:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16008:131:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "16000:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "15878:9:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "15893:4:17",
                      "type": ""
                    }
                  ],
                  "src": "15727:419:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "16258:137:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "16280:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "16288:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "16276:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "16276:14:17"
                            },
                            {
                              "hexValue": "4552433732313a20617070726f76652063616c6c6572206973206e6f74206f77",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "16292:34:17",
                              "type": "",
                              "value": "ERC721: approve caller is not ow"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "16269:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16269:58:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "16269:58:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "16348:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "16356:2:17",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "16344:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "16344:15:17"
                            },
                            {
                              "hexValue": "6e6572206e6f7220617070726f76656420666f7220616c6c",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "16361:26:17",
                              "type": "",
                              "value": "ner nor approved for all"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "16337:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16337:51:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "16337:51:17"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_6d83cef3e0cb19b8320a9c5feb26b56bbb08f152a8e61b12eca3302d8d68b23d",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "16250:6:17",
                      "type": ""
                    }
                  ],
                  "src": "16152:243:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "16547:220:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "16557:74:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "16623:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16628:2:17",
                              "type": "",
                              "value": "56"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "16564:58:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16564:67:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "16557:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "16729:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_6d83cef3e0cb19b8320a9c5feb26b56bbb08f152a8e61b12eca3302d8d68b23d",
                            "nodeType": "YulIdentifier",
                            "src": "16640:88:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16640:93:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "16640:93:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "16742:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "16753:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16758:2:17",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16749:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16749:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "16742:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_6d83cef3e0cb19b8320a9c5feb26b56bbb08f152a8e61b12eca3302d8d68b23d_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "16535:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "16543:3:17",
                      "type": ""
                    }
                  ],
                  "src": "16401:366:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "16944:248:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "16954:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "16966:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16977:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16962:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16962:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "16954:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "17001:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "17012:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "16997:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "16997:17:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "17020:4:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "17026:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "17016:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "17016:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "16990:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16990:47:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "16990:47:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "17046:139:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "17180:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_6d83cef3e0cb19b8320a9c5feb26b56bbb08f152a8e61b12eca3302d8d68b23d_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "17054:124:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17054:131:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "17046:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_6d83cef3e0cb19b8320a9c5feb26b56bbb08f152a8e61b12eca3302d8d68b23d__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "16924:9:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "16939:4:17",
                      "type": ""
                    }
                  ],
                  "src": "16773:419:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "17304:130:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "17326:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "17334:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "17322:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "17322:14:17"
                            },
                            {
                              "hexValue": "4552433732313a207472616e736665722063616c6c6572206973206e6f74206f",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "17338:34:17",
                              "type": "",
                              "value": "ERC721: transfer caller is not o"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "17315:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17315:58:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "17315:58:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "17394:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "17402:2:17",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "17390:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "17390:15:17"
                            },
                            {
                              "hexValue": "776e6572206e6f7220617070726f766564",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "17407:19:17",
                              "type": "",
                              "value": "wner nor approved"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "17383:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17383:44:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "17383:44:17"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_c8682f3ad98807db59a6ec6bb812b72fed0a66e3150fa8239699ee83885247f2",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "17296:6:17",
                      "type": ""
                    }
                  ],
                  "src": "17198:236:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "17586:220:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "17596:74:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "17662:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17667:2:17",
                              "type": "",
                              "value": "49"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "17603:58:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17603:67:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "17596:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "17768:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_c8682f3ad98807db59a6ec6bb812b72fed0a66e3150fa8239699ee83885247f2",
                            "nodeType": "YulIdentifier",
                            "src": "17679:88:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17679:93:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "17679:93:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "17781:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "17792:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17797:2:17",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "17788:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17788:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "17781:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_c8682f3ad98807db59a6ec6bb812b72fed0a66e3150fa8239699ee83885247f2_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "17574:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "17582:3:17",
                      "type": ""
                    }
                  ],
                  "src": "17440:366:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "17983:248:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "17993:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "18005:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "18016:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "18001:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18001:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "17993:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "18040:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "18051:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "18036:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "18036:17:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "18059:4:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "18065:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "18055:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "18055:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "18029:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18029:47:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "18029:47:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "18085:139:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "18219:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_c8682f3ad98807db59a6ec6bb812b72fed0a66e3150fa8239699ee83885247f2_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "18093:124:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18093:131:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "18085:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_c8682f3ad98807db59a6ec6bb812b72fed0a66e3150fa8239699ee83885247f2__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "17963:9:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "17978:4:17",
                      "type": ""
                    }
                  ],
                  "src": "17812:419:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "18343:122:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "18365:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "18373:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "18361:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "18361:14:17"
                            },
                            {
                              "hexValue": "4552433732313a206f776e657220717565727920666f72206e6f6e6578697374",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "18377:34:17",
                              "type": "",
                              "value": "ERC721: owner query for nonexist"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "18354:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18354:58:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "18354:58:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "18433:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "18441:2:17",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "18429:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "18429:15:17"
                            },
                            {
                              "hexValue": "656e7420746f6b656e",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "18446:11:17",
                              "type": "",
                              "value": "ent token"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "18422:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18422:36:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "18422:36:17"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_7481f3df2a424c0755a1ad2356614e9a5a358d461ea2eae1f89cb21cbad00397",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "18335:6:17",
                      "type": ""
                    }
                  ],
                  "src": "18237:228:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "18617:220:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "18627:74:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "18693:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "18698:2:17",
                              "type": "",
                              "value": "41"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "18634:58:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18634:67:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "18627:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "18799:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_7481f3df2a424c0755a1ad2356614e9a5a358d461ea2eae1f89cb21cbad00397",
                            "nodeType": "YulIdentifier",
                            "src": "18710:88:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18710:93:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "18710:93:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "18812:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "18823:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "18828:2:17",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "18819:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18819:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "18812:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_7481f3df2a424c0755a1ad2356614e9a5a358d461ea2eae1f89cb21cbad00397_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "18605:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "18613:3:17",
                      "type": ""
                    }
                  ],
                  "src": "18471:366:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "19014:248:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "19024:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "19036:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19047:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "19032:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19032:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "19024:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "19071:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "19082:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "19067:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "19067:17:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "19090:4:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "19096:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "19086:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "19086:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "19060:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19060:47:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "19060:47:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "19116:139:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "19250:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_7481f3df2a424c0755a1ad2356614e9a5a358d461ea2eae1f89cb21cbad00397_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "19124:124:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19124:131:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "19116:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_7481f3df2a424c0755a1ad2356614e9a5a358d461ea2eae1f89cb21cbad00397__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "18994:9:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "19009:4:17",
                      "type": ""
                    }
                  ],
                  "src": "18843:419:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "19374:123:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "19396:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "19404:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "19392:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "19392:14:17"
                            },
                            {
                              "hexValue": "4552433732313a2062616c616e636520717565727920666f7220746865207a65",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "19408:34:17",
                              "type": "",
                              "value": "ERC721: balance query for the ze"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "19385:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19385:58:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "19385:58:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "19464:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "19472:2:17",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "19460:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "19460:15:17"
                            },
                            {
                              "hexValue": "726f2061646472657373",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "19477:12:17",
                              "type": "",
                              "value": "ro address"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "19453:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19453:37:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "19453:37:17"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_7395d4d3901c50cdfcab223d072f9aa36241df5d883e62cbf147ee1b05a9e6ba",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "19366:6:17",
                      "type": ""
                    }
                  ],
                  "src": "19268:229:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "19649:220:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "19659:74:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "19725:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19730:2:17",
                              "type": "",
                              "value": "42"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "19666:58:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19666:67:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "19659:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "19831:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_7395d4d3901c50cdfcab223d072f9aa36241df5d883e62cbf147ee1b05a9e6ba",
                            "nodeType": "YulIdentifier",
                            "src": "19742:88:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19742:93:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "19742:93:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "19844:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "19855:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19860:2:17",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "19851:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19851:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "19844:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_7395d4d3901c50cdfcab223d072f9aa36241df5d883e62cbf147ee1b05a9e6ba_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "19637:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "19645:3:17",
                      "type": ""
                    }
                  ],
                  "src": "19503:366:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "20046:248:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "20056:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "20068:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "20079:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "20064:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20064:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "20056:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "20103:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "20114:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "20099:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "20099:17:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "20122:4:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "20128:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "20118:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "20118:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "20092:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20092:47:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "20092:47:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "20148:139:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "20282:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_7395d4d3901c50cdfcab223d072f9aa36241df5d883e62cbf147ee1b05a9e6ba_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "20156:124:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20156:131:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "20148:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_7395d4d3901c50cdfcab223d072f9aa36241df5d883e62cbf147ee1b05a9e6ba__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "20026:9:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "20041:4:17",
                      "type": ""
                    }
                  ],
                  "src": "19875:419:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "20406:130:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "20428:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "20436:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "20424:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "20424:14:17"
                            },
                            {
                              "hexValue": "45524337323155524953746f726167653a2055524920717565727920666f7220",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "20440:34:17",
                              "type": "",
                              "value": "ERC721URIStorage: URI query for "
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "20417:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20417:58:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "20417:58:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "20496:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "20504:2:17",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "20492:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "20492:15:17"
                            },
                            {
                              "hexValue": "6e6f6e6578697374656e7420746f6b656e",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "20509:19:17",
                              "type": "",
                              "value": "nonexistent token"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "20485:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20485:44:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "20485:44:17"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_8e9ed1638ba7e2d59e03d0957c9339381732ac84d73f65c86c45db1467eafa2a",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "20398:6:17",
                      "type": ""
                    }
                  ],
                  "src": "20300:236:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "20688:220:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "20698:74:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "20764:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "20769:2:17",
                              "type": "",
                              "value": "49"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "20705:58:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20705:67:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "20698:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "20870:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_8e9ed1638ba7e2d59e03d0957c9339381732ac84d73f65c86c45db1467eafa2a",
                            "nodeType": "YulIdentifier",
                            "src": "20781:88:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20781:93:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "20781:93:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "20883:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "20894:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "20899:2:17",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "20890:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20890:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "20883:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_8e9ed1638ba7e2d59e03d0957c9339381732ac84d73f65c86c45db1467eafa2a_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "20676:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "20684:3:17",
                      "type": ""
                    }
                  ],
                  "src": "20542:366:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "21085:248:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "21095:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "21107:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "21118:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "21103:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21103:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "21095:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "21142:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "21153:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "21138:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "21138:17:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "21161:4:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "21167:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "21157:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "21157:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "21131:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21131:47:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "21131:47:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "21187:139:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "21321:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_8e9ed1638ba7e2d59e03d0957c9339381732ac84d73f65c86c45db1467eafa2a_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "21195:124:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21195:131:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "21187:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_8e9ed1638ba7e2d59e03d0957c9339381732ac84d73f65c86c45db1467eafa2a__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "21065:9:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "21080:4:17",
                      "type": ""
                    }
                  ],
                  "src": "20914:419:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "21453:34:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "21463:18:17",
                        "value": {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "21478:3:17"
                        },
                        "variableNames": [
                          {
                            "name": "updated_pos",
                            "nodeType": "YulIdentifier",
                            "src": "21463:11:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "21425:3:17",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "21430:6:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulTypedName",
                      "src": "21441:11:17",
                      "type": ""
                    }
                  ],
                  "src": "21339:148:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "21603:267:17",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "21613:53:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "21660:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "array_length_t_string_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "21627:32:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21627:39:17"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "21617:6:17",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "21675:96:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "21759:3:17"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "21764:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "21682:76:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21682:89:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "21675:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "21806:5:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "21813:4:17",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "21802:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "21802:16:17"
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "21820:3:17"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "21825:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "copy_memory_to_memory",
                            "nodeType": "YulIdentifier",
                            "src": "21780:21:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21780:52:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "21780:52:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "21841:23:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "21852:3:17"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "21857:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "21848:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21848:16:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "21841:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "21584:5:17",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "21591:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "21599:3:17",
                      "type": ""
                    }
                  ],
                  "src": "21493:377:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "22060:251:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "22071:102:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "22160:6:17"
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "22169:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "22078:81:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22078:95:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "22071:3:17"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "22183:102:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "22272:6:17"
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "22281:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "22190:81:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22190:95:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "22183:3:17"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "22295:10:17",
                        "value": {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "22302:3:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "22295:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "22031:3:17",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "22037:6:17",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "22045:6:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "22056:3:17",
                      "type": ""
                    }
                  ],
                  "src": "21876:435:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "22423:125:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "22445:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "22453:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "22441:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "22441:14:17"
                            },
                            {
                              "hexValue": "4552433732313a206f70657261746f7220717565727920666f72206e6f6e6578",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "22457:34:17",
                              "type": "",
                              "value": "ERC721: operator query for nonex"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "22434:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22434:58:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "22434:58:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "22513:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "22521:2:17",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "22509:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "22509:15:17"
                            },
                            {
                              "hexValue": "697374656e7420746f6b656e",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "22526:14:17",
                              "type": "",
                              "value": "istent token"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "22502:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22502:39:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "22502:39:17"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_5797d1ccb08b83980dd0c07ea40d8f6a64d35fff736a19bdd17522954cb0899c",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "22415:6:17",
                      "type": ""
                    }
                  ],
                  "src": "22317:231:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "22700:220:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "22710:74:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "22776:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "22781:2:17",
                              "type": "",
                              "value": "44"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "22717:58:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22717:67:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "22710:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "22882:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_5797d1ccb08b83980dd0c07ea40d8f6a64d35fff736a19bdd17522954cb0899c",
                            "nodeType": "YulIdentifier",
                            "src": "22793:88:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22793:93:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "22793:93:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "22895:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "22906:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "22911:2:17",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "22902:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22902:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "22895:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_5797d1ccb08b83980dd0c07ea40d8f6a64d35fff736a19bdd17522954cb0899c_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "22688:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "22696:3:17",
                      "type": ""
                    }
                  ],
                  "src": "22554:366:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "23097:248:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "23107:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "23119:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "23130:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "23115:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23115:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "23107:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "23154:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "23165:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "23150:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "23150:17:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "23173:4:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "23179:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "23169:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "23169:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "23143:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23143:47:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "23143:47:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "23199:139:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "23333:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_5797d1ccb08b83980dd0c07ea40d8f6a64d35fff736a19bdd17522954cb0899c_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "23207:124:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23207:131:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "23199:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_5797d1ccb08b83980dd0c07ea40d8f6a64d35fff736a19bdd17522954cb0899c__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "23077:9:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "23092:4:17",
                      "type": ""
                    }
                  ],
                  "src": "22926:419:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "23457:122:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "23479:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "23487:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "23475:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "23475:14:17"
                            },
                            {
                              "hexValue": "4552433732313a207472616e73666572206f6620746f6b656e20746861742069",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "23491:34:17",
                              "type": "",
                              "value": "ERC721: transfer of token that i"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "23468:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23468:58:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "23468:58:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "23547:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "23555:2:17",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "23543:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "23543:15:17"
                            },
                            {
                              "hexValue": "73206e6f74206f776e",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "23560:11:17",
                              "type": "",
                              "value": "s not own"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "23536:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23536:36:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "23536:36:17"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_a01073130a885d6c1c1af6ac75fc3b1c4f9403c235362962bbf528e2bd87d950",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "23449:6:17",
                      "type": ""
                    }
                  ],
                  "src": "23351:228:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "23731:220:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "23741:74:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "23807:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "23812:2:17",
                              "type": "",
                              "value": "41"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "23748:58:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23748:67:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "23741:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "23913:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_a01073130a885d6c1c1af6ac75fc3b1c4f9403c235362962bbf528e2bd87d950",
                            "nodeType": "YulIdentifier",
                            "src": "23824:88:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23824:93:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "23824:93:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "23926:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "23937:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "23942:2:17",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "23933:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23933:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "23926:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_a01073130a885d6c1c1af6ac75fc3b1c4f9403c235362962bbf528e2bd87d950_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "23719:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "23727:3:17",
                      "type": ""
                    }
                  ],
                  "src": "23585:366:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "24128:248:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "24138:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "24150:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "24161:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "24146:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24146:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "24138:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "24185:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "24196:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "24181:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "24181:17:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "24204:4:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "24210:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "24200:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "24200:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "24174:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24174:47:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "24174:47:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "24230:139:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "24364:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_a01073130a885d6c1c1af6ac75fc3b1c4f9403c235362962bbf528e2bd87d950_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "24238:124:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24238:131:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "24230:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_a01073130a885d6c1c1af6ac75fc3b1c4f9403c235362962bbf528e2bd87d950__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "24108:9:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "24123:4:17",
                      "type": ""
                    }
                  ],
                  "src": "23957:419:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "24488:117:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "24510:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "24518:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "24506:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "24506:14:17"
                            },
                            {
                              "hexValue": "4552433732313a207472616e7366657220746f20746865207a65726f20616464",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "24522:34:17",
                              "type": "",
                              "value": "ERC721: transfer to the zero add"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "24499:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24499:58:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "24499:58:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "24578:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "24586:2:17",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "24574:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "24574:15:17"
                            },
                            {
                              "hexValue": "72657373",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "24591:6:17",
                              "type": "",
                              "value": "ress"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "24567:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24567:31:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "24567:31:17"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "24480:6:17",
                      "type": ""
                    }
                  ],
                  "src": "24382:223:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "24757:220:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "24767:74:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "24833:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "24838:2:17",
                              "type": "",
                              "value": "36"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "24774:58:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24774:67:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "24767:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "24939:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4",
                            "nodeType": "YulIdentifier",
                            "src": "24850:88:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24850:93:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "24850:93:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "24952:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "24963:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "24968:2:17",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "24959:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24959:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "24952:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "24745:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "24753:3:17",
                      "type": ""
                    }
                  ],
                  "src": "24611:366:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "25154:248:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "25164:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "25176:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "25187:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "25172:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25172:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "25164:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "25211:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "25222:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "25207:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "25207:17:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "25230:4:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "25236:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "25226:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "25226:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "25200:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25200:47:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "25200:47:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "25256:139:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "25390:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "25264:124:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25264:131:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "25256:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "25134:9:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "25149:4:17",
                      "type": ""
                    }
                  ],
                  "src": "24983:419:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "25436:152:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "25453:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "25456:77:17",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "25446:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25446:88:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "25446:88:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "25550:1:17",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "25553:4:17",
                              "type": "",
                              "value": "0x11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "25543:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25543:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "25543:15:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "25574:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "25577:4:17",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "25567:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25567:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "25567:15:17"
                      }
                    ]
                  },
                  "name": "panic_error_0x11",
                  "nodeType": "YulFunctionDefinition",
                  "src": "25408:180:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "25639:146:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "25649:25:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "25672:1:17"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "25654:17:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25654:20:17"
                        },
                        "variableNames": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "25649:1:17"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "25683:25:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "25706:1:17"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "25688:17:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25688:20:17"
                        },
                        "variableNames": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "25683:1:17"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "25730:22:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "25732:16:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "25732:18:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "25732:18:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "25724:1:17"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "25727:1:17"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "25721:2:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25721:8:17"
                        },
                        "nodeType": "YulIf",
                        "src": "25718:34:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "25762:17:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "25774:1:17"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "25777:1:17"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "25770:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25770:9:17"
                        },
                        "variableNames": [
                          {
                            "name": "diff",
                            "nodeType": "YulIdentifier",
                            "src": "25762:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "checked_sub_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "25625:1:17",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "25628:1:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "diff",
                      "nodeType": "YulTypedName",
                      "src": "25634:4:17",
                      "type": ""
                    }
                  ],
                  "src": "25594:191:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "25835:261:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "25845:25:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "25868:1:17"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "25850:17:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25850:20:17"
                        },
                        "variableNames": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "25845:1:17"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "25879:25:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "25902:1:17"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "25884:17:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25884:20:17"
                        },
                        "variableNames": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "25879:1:17"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "26042:22:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "26044:16:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "26044:18:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "26044:18:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "25963:1:17"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "25970:66:17",
                                  "type": "",
                                  "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "26038:1:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "25966:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "25966:74:17"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "25960:2:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25960:81:17"
                        },
                        "nodeType": "YulIf",
                        "src": "25957:107:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "26074:16:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "26085:1:17"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "26088:1:17"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "26081:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26081:9:17"
                        },
                        "variableNames": [
                          {
                            "name": "sum",
                            "nodeType": "YulIdentifier",
                            "src": "26074:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "checked_add_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "25822:1:17",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "25825:1:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "sum",
                      "nodeType": "YulTypedName",
                      "src": "25831:3:17",
                      "type": ""
                    }
                  ],
                  "src": "25791:305:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "26208:69:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "26230:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "26238:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "26226:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "26226:14:17"
                            },
                            {
                              "hexValue": "4552433732313a20617070726f766520746f2063616c6c6572",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "26242:27:17",
                              "type": "",
                              "value": "ERC721: approve to caller"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "26219:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26219:51:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "26219:51:17"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "26200:6:17",
                      "type": ""
                    }
                  ],
                  "src": "26102:175:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "26429:220:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "26439:74:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "26505:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26510:2:17",
                              "type": "",
                              "value": "25"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "26446:58:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26446:67:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "26439:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "26611:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05",
                            "nodeType": "YulIdentifier",
                            "src": "26522:88:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26522:93:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "26522:93:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "26624:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "26635:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26640:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "26631:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26631:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "26624:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "26417:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "26425:3:17",
                      "type": ""
                    }
                  ],
                  "src": "26283:366:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "26826:248:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "26836:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "26848:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26859:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "26844:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26844:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "26836:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "26883:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "26894:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "26879:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "26879:17:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "26902:4:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "26908:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "26898:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "26898:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "26872:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26872:47:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "26872:47:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "26928:139:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "27062:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "26936:124:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26936:131:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "26928:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "26806:9:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "26821:4:17",
                      "type": ""
                    }
                  ],
                  "src": "26655:419:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "27186:131:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "27208:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "27216:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "27204:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "27204:14:17"
                            },
                            {
                              "hexValue": "4552433732313a207472616e7366657220746f206e6f6e204552433732315265",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "27220:34:17",
                              "type": "",
                              "value": "ERC721: transfer to non ERC721Re"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "27197:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "27197:58:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "27197:58:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "27276:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "27284:2:17",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "27272:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "27272:15:17"
                            },
                            {
                              "hexValue": "63656976657220696d706c656d656e746572",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "27289:20:17",
                              "type": "",
                              "value": "ceiver implementer"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "27265:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "27265:45:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "27265:45:17"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "27178:6:17",
                      "type": ""
                    }
                  ],
                  "src": "27080:237:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "27469:220:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "27479:74:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "27545:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "27550:2:17",
                              "type": "",
                              "value": "50"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "27486:58:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "27486:67:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "27479:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "27651:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e",
                            "nodeType": "YulIdentifier",
                            "src": "27562:88:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "27562:93:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "27562:93:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "27664:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "27675:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "27680:2:17",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "27671:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "27671:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "27664:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "27457:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "27465:3:17",
                      "type": ""
                    }
                  ],
                  "src": "27323:366:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "27866:248:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "27876:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "27888:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "27899:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "27884:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "27884:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "27876:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "27923:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "27934:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "27919:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "27919:17:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "27942:4:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "27948:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "27938:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "27938:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "27912:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "27912:47:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "27912:47:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "27968:139:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "28102:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "27976:124:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "27976:131:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "27968:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "27846:9:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "27861:4:17",
                      "type": ""
                    }
                  ],
                  "src": "27695:419:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "28226:128:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "28248:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "28256:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "28244:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "28244:14:17"
                            },
                            {
                              "hexValue": "4552433732314d657461646174613a2055524920717565727920666f72206e6f",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "28260:34:17",
                              "type": "",
                              "value": "ERC721Metadata: URI query for no"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "28237:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "28237:58:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "28237:58:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "28316:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "28324:2:17",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "28312:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "28312:15:17"
                            },
                            {
                              "hexValue": "6e6578697374656e7420746f6b656e",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "28329:17:17",
                              "type": "",
                              "value": "nexistent token"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "28305:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "28305:42:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "28305:42:17"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "28218:6:17",
                      "type": ""
                    }
                  ],
                  "src": "28120:234:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "28506:220:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "28516:74:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "28582:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "28587:2:17",
                              "type": "",
                              "value": "47"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "28523:58:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "28523:67:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "28516:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "28688:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb",
                            "nodeType": "YulIdentifier",
                            "src": "28599:88:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "28599:93:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "28599:93:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "28701:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "28712:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "28717:2:17",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "28708:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "28708:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "28701:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "28494:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "28502:3:17",
                      "type": ""
                    }
                  ],
                  "src": "28360:366:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "28903:248:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "28913:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "28925:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "28936:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "28921:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "28921:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "28913:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "28960:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "28971:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "28956:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "28956:17:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "28979:4:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "28985:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "28975:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "28975:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "28949:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "28949:47:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "28949:47:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "29005:139:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "29139:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "29013:124:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "29013:131:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "29005:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "28883:9:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "28898:4:17",
                      "type": ""
                    }
                  ],
                  "src": "28732:419:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "29263:76:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "29285:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "29293:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "29281:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "29281:14:17"
                            },
                            {
                              "hexValue": "4552433732313a206d696e7420746f20746865207a65726f2061646472657373",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "29297:34:17",
                              "type": "",
                              "value": "ERC721: mint to the zero address"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "29274:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "29274:58:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "29274:58:17"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "29255:6:17",
                      "type": ""
                    }
                  ],
                  "src": "29157:182:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "29491:220:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "29501:74:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "29567:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "29572:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "29508:58:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "29508:67:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "29501:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "29673:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6",
                            "nodeType": "YulIdentifier",
                            "src": "29584:88:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "29584:93:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "29584:93:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "29686:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "29697:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "29702:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "29693:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "29693:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "29686:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "29479:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "29487:3:17",
                      "type": ""
                    }
                  ],
                  "src": "29345:366:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "29888:248:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "29898:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "29910:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "29921:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "29906:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "29906:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "29898:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "29945:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "29956:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "29941:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "29941:17:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "29964:4:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "29970:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "29960:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "29960:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "29934:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "29934:47:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "29934:47:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "29990:139:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "30124:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "29998:124:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "29998:131:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "29990:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "29868:9:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "29883:4:17",
                      "type": ""
                    }
                  ],
                  "src": "29717:419:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "30248:72:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "30270:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "30278:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "30266:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "30266:14:17"
                            },
                            {
                              "hexValue": "4552433732313a20746f6b656e20616c7265616479206d696e746564",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "30282:30:17",
                              "type": "",
                              "value": "ERC721: token already minted"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "30259:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30259:54:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "30259:54:17"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "30240:6:17",
                      "type": ""
                    }
                  ],
                  "src": "30142:178:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "30472:220:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "30482:74:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "30548:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "30553:2:17",
                              "type": "",
                              "value": "28"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "30489:58:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30489:67:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "30482:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "30654:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57",
                            "nodeType": "YulIdentifier",
                            "src": "30565:88:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30565:93:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "30565:93:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "30667:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "30678:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "30683:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "30674:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30674:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "30667:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "30460:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "30468:3:17",
                      "type": ""
                    }
                  ],
                  "src": "30326:366:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "30869:248:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "30879:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "30891:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "30902:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "30887:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30887:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "30879:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "30926:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "30937:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "30922:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "30922:17:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "30945:4:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "30951:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "30941:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "30941:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "30915:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30915:47:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "30915:47:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "30971:139:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "31105:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "30979:124:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30979:131:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "30971:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "30849:9:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "30864:4:17",
                      "type": ""
                    }
                  ],
                  "src": "30698:419:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "31229:127:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "31251:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "31259:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "31247:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "31247:14:17"
                            },
                            {
                              "hexValue": "45524337323155524953746f726167653a2055524920736574206f66206e6f6e",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "31263:34:17",
                              "type": "",
                              "value": "ERC721URIStorage: URI set of non"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "31240:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "31240:58:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "31240:58:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "31319:6:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "31327:2:17",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "31315:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "31315:15:17"
                            },
                            {
                              "hexValue": "6578697374656e7420746f6b656e",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "31332:16:17",
                              "type": "",
                              "value": "existent token"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "31308:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "31308:41:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "31308:41:17"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "31221:6:17",
                      "type": ""
                    }
                  ],
                  "src": "31123:233:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "31508:220:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "31518:74:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "31584:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "31589:2:17",
                              "type": "",
                              "value": "46"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "31525:58:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "31525:67:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "31518:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "31690:3:17"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4",
                            "nodeType": "YulIdentifier",
                            "src": "31601:88:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "31601:93:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "31601:93:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "31703:19:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "31714:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "31719:2:17",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "31710:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "31710:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "31703:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "31496:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "31504:3:17",
                      "type": ""
                    }
                  ],
                  "src": "31362:366:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "31905:248:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "31915:26:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "31927:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "31938:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "31923:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "31923:18:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "31915:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "31962:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "31973:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "31958:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "31958:17:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "31981:4:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "31987:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "31977:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "31977:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "31951:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "31951:47:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "31951:47:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "32007:139:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "32141:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "32015:124:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32015:131:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "32007:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "31885:9:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "31900:4:17",
                      "type": ""
                    }
                  ],
                  "src": "31734:419:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "32217:40:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "32228:22:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "32244:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "32238:5:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32238:12:17"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "32228:6:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_length_t_bytes_memory_ptr",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "32200:5:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "32210:6:17",
                      "type": ""
                    }
                  ],
                  "src": "32159:98:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "32358:73:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "32375:3:17"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "32380:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "32368:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32368:19:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "32368:19:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "32396:29:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "32415:3:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "32420:4:17",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "32411:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32411:14:17"
                        },
                        "variableNames": [
                          {
                            "name": "updated_pos",
                            "nodeType": "YulIdentifier",
                            "src": "32396:11:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "32330:3:17",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "32335:6:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulTypedName",
                      "src": "32346:11:17",
                      "type": ""
                    }
                  ],
                  "src": "32263:168:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "32527:270:17",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "32537:52:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "32583:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "array_length_t_bytes_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "32551:31:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32551:38:17"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "32541:6:17",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "32598:77:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "32663:3:17"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "32668:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "32605:57:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32605:70:17"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "32598:3:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "32710:5:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "32717:4:17",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "32706:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "32706:16:17"
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "32724:3:17"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "32729:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "copy_memory_to_memory",
                            "nodeType": "YulIdentifier",
                            "src": "32684:21:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32684:52:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "32684:52:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "32745:46:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "32756:3:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "32783:6:17"
                                }
                              ],
                              "functionName": {
                                "name": "round_up_to_mul_of_32",
                                "nodeType": "YulIdentifier",
                                "src": "32761:21:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "32761:29:17"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "32752:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32752:39:17"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "32745:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "32508:5:17",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "32515:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "32523:3:17",
                      "type": ""
                    }
                  ],
                  "src": "32437:360:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "33003:440:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "33013:27:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "33025:9:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "33036:3:17",
                              "type": "",
                              "value": "128"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "33021:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33021:19:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "33013:4:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "33094:6:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "33107:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "33118:1:17",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "33103:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "33103:17:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_address_to_t_address_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "33050:43:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33050:71:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "33050:71:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "33175:6:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "33188:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "33199:2:17",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "33184:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "33184:18:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_address_to_t_address_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "33131:43:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33131:72:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "33131:72:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value2",
                              "nodeType": "YulIdentifier",
                              "src": "33257:6:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "33270:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "33281:2:17",
                                  "type": "",
                                  "value": "64"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "33266:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "33266:18:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "33213:43:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33213:72:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "33213:72:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "33306:9:17"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "33317:2:17",
                                  "type": "",
                                  "value": "96"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "33302:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "33302:18:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "33326:4:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "33332:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "33322:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "33322:20:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "33295:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33295:48:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "33295:48:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "33352:84:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "value3",
                              "nodeType": "YulIdentifier",
                              "src": "33422:6:17"
                            },
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "33431:4:17"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "33360:61:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33360:76:17"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "33352:4:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "32951:9:17",
                      "type": ""
                    },
                    {
                      "name": "value3",
                      "nodeType": "YulTypedName",
                      "src": "32963:6:17",
                      "type": ""
                    },
                    {
                      "name": "value2",
                      "nodeType": "YulTypedName",
                      "src": "32971:6:17",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "32979:6:17",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "32987:6:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "32998:4:17",
                      "type": ""
                    }
                  ],
                  "src": "32803:640:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "33511:79:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "33521:22:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "33536:6:17"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "33530:5:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33530:13:17"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "33521:5:17"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "33578:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "validator_revert_t_bytes4",
                            "nodeType": "YulIdentifier",
                            "src": "33552:25:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33552:32:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "33552:32:17"
                      }
                    ]
                  },
                  "name": "abi_decode_t_bytes4_fromMemory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "33489:6:17",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "33497:3:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "33505:5:17",
                      "type": ""
                    }
                  ],
                  "src": "33449:141:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "33672:273:17",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "33718:83:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "33720:77:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "33720:79:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "33720:79:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "33693:7:17"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "33702:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "33689:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "33689:23:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "33714:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "33685:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33685:32:17"
                        },
                        "nodeType": "YulIf",
                        "src": "33682:119:17"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "33811:127:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "33826:15:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "33840:1:17",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "33830:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "33855:73:17",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "33900:9:17"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "33911:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "33896:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "33896:22:17"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "33920:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_bytes4_fromMemory",
                                "nodeType": "YulIdentifier",
                                "src": "33865:30:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "33865:63:17"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "33855:6:17"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_bytes4_fromMemory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "33642:9:17",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "33653:7:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "33665:6:17",
                      "type": ""
                    }
                  ],
                  "src": "33596:349:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "33994:190:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "34004:33:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "34031:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "34013:17:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34013:24:17"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "34004:5:17"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "34127:22:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "34129:16:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "34129:18:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "34129:18:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "34052:5:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "34059:66:17",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "34049:2:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34049:77:17"
                        },
                        "nodeType": "YulIf",
                        "src": "34046:103:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "34158:20:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "34169:5:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "34176:1:17",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "34165:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34165:13:17"
                        },
                        "variableNames": [
                          {
                            "name": "ret",
                            "nodeType": "YulIdentifier",
                            "src": "34158:3:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "increment_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "33980:5:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "ret",
                      "nodeType": "YulTypedName",
                      "src": "33990:3:17",
                      "type": ""
                    }
                  ],
                  "src": "33951:233:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "34218:152:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "34235:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "34238:77:17",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "34228:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34228:88:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "34228:88:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "34332:1:17",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "34335:4:17",
                              "type": "",
                              "value": "0x12"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "34325:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34325:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "34325:15:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "34356:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "34359:4:17",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "34349:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34349:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "34349:15:17"
                      }
                    ]
                  },
                  "name": "panic_error_0x12",
                  "nodeType": "YulFunctionDefinition",
                  "src": "34190:180:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "34418:143:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "34428:25:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "34451:1:17"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "34433:17:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34433:20:17"
                        },
                        "variableNames": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "34428:1:17"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "34462:25:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "34485:1:17"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "34467:17:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34467:20:17"
                        },
                        "variableNames": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "34462:1:17"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "34509:22:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x12",
                                  "nodeType": "YulIdentifier",
                                  "src": "34511:16:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "34511:18:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "34511:18:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "34506:1:17"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "34499:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34499:9:17"
                        },
                        "nodeType": "YulIf",
                        "src": "34496:35:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "34541:14:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "34550:1:17"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "34553:1:17"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "34546:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34546:9:17"
                        },
                        "variableNames": [
                          {
                            "name": "r",
                            "nodeType": "YulIdentifier",
                            "src": "34541:1:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "checked_div_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "34407:1:17",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "34410:1:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "r",
                      "nodeType": "YulTypedName",
                      "src": "34416:1:17",
                      "type": ""
                    }
                  ],
                  "src": "34376:185:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "34601:142:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "34611:25:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "34634:1:17"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "34616:17:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34616:20:17"
                        },
                        "variableNames": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "34611:1:17"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "34645:25:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "34668:1:17"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "34650:17:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34650:20:17"
                        },
                        "variableNames": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "34645:1:17"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "34692:22:17",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x12",
                                  "nodeType": "YulIdentifier",
                                  "src": "34694:16:17"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "34694:18:17"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "34694:18:17"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "34689:1:17"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "34682:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34682:9:17"
                        },
                        "nodeType": "YulIf",
                        "src": "34679:35:17"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "34723:14:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "34732:1:17"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "34735:1:17"
                            }
                          ],
                          "functionName": {
                            "name": "mod",
                            "nodeType": "YulIdentifier",
                            "src": "34728:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34728:9:17"
                        },
                        "variableNames": [
                          {
                            "name": "r",
                            "nodeType": "YulIdentifier",
                            "src": "34723:1:17"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "mod_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "34590:1:17",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "34593:1:17",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "r",
                      "nodeType": "YulTypedName",
                      "src": "34599:1:17",
                      "type": ""
                    }
                  ],
                  "src": "34567:176:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "34777:152:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "34794:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "34797:77:17",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "34787:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34787:88:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "34787:88:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "34891:1:17",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "34894:4:17",
                              "type": "",
                              "value": "0x32"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "34884:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34884:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "34884:15:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "34915:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "34918:4:17",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "34908:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34908:15:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "34908:15:17"
                      }
                    ]
                  },
                  "name": "panic_error_0x32",
                  "nodeType": "YulFunctionDefinition",
                  "src": "34749:180:17"
                }
              ]
            },
            "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_bytes4(value) -> cleaned {\n        cleaned := and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000)\n    }\n\n    function validator_revert_t_bytes4(value) {\n        if iszero(eq(value, cleanup_t_bytes4(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bytes4(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bool(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_tuple_t_addresst_bool(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_bool(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_bytes_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory(src, dst, length) {\n        calldatacopy(dst, src, length)\n        // clear end\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_bytes_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_bytes_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // bytes\n    function abi_decode_t_bytes_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_bytes_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3 {\n        if slt(sub(dataEnd, headStart), 128) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 96))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value3 := abi_decode_t_bytes_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_addresst_string_memory_ptr(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value1 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint32(value) -> cleaned {\n        cleaned := and(value, 0xffffffff)\n    }\n\n    function validator_revert_t_uint32(value) {\n        if iszero(eq(value, cleanup_t_uint32(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint32(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint32(value)\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint32t_string_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3 {\n        if slt(sub(dataEnd, headStart), 128) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint32(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 96))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value3 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function store_literal_in_memory_9291e0f44949204f2e9b40e6be090924979d6047b2365868f4e9f027722eb89d(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approved query for nonex\")\n\n        mstore(add(memPtr, 32), \"istent token\")\n\n    }\n\n    function abi_encode_t_stringliteral_9291e0f44949204f2e9b40e6be090924979d6047b2365868f4e9f027722eb89d_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 44)\n        store_literal_in_memory_9291e0f44949204f2e9b40e6be090924979d6047b2365868f4e9f027722eb89d(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_9291e0f44949204f2e9b40e6be090924979d6047b2365868f4e9f027722eb89d__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9291e0f44949204f2e9b40e6be090924979d6047b2365868f4e9f027722eb89d_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approval to current owne\")\n\n        mstore(add(memPtr, 32), \"r\")\n\n    }\n\n    function abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 33)\n        store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_6d83cef3e0cb19b8320a9c5feb26b56bbb08f152a8e61b12eca3302d8d68b23d(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approve caller is not ow\")\n\n        mstore(add(memPtr, 32), \"ner nor approved for all\")\n\n    }\n\n    function abi_encode_t_stringliteral_6d83cef3e0cb19b8320a9c5feb26b56bbb08f152a8e61b12eca3302d8d68b23d_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 56)\n        store_literal_in_memory_6d83cef3e0cb19b8320a9c5feb26b56bbb08f152a8e61b12eca3302d8d68b23d(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_6d83cef3e0cb19b8320a9c5feb26b56bbb08f152a8e61b12eca3302d8d68b23d__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_6d83cef3e0cb19b8320a9c5feb26b56bbb08f152a8e61b12eca3302d8d68b23d_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_c8682f3ad98807db59a6ec6bb812b72fed0a66e3150fa8239699ee83885247f2(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer caller is not o\")\n\n        mstore(add(memPtr, 32), \"wner nor approved\")\n\n    }\n\n    function abi_encode_t_stringliteral_c8682f3ad98807db59a6ec6bb812b72fed0a66e3150fa8239699ee83885247f2_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 49)\n        store_literal_in_memory_c8682f3ad98807db59a6ec6bb812b72fed0a66e3150fa8239699ee83885247f2(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_c8682f3ad98807db59a6ec6bb812b72fed0a66e3150fa8239699ee83885247f2__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_c8682f3ad98807db59a6ec6bb812b72fed0a66e3150fa8239699ee83885247f2_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_7481f3df2a424c0755a1ad2356614e9a5a358d461ea2eae1f89cb21cbad00397(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: owner query for nonexist\")\n\n        mstore(add(memPtr, 32), \"ent token\")\n\n    }\n\n    function abi_encode_t_stringliteral_7481f3df2a424c0755a1ad2356614e9a5a358d461ea2eae1f89cb21cbad00397_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 41)\n        store_literal_in_memory_7481f3df2a424c0755a1ad2356614e9a5a358d461ea2eae1f89cb21cbad00397(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_7481f3df2a424c0755a1ad2356614e9a5a358d461ea2eae1f89cb21cbad00397__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_7481f3df2a424c0755a1ad2356614e9a5a358d461ea2eae1f89cb21cbad00397_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_7395d4d3901c50cdfcab223d072f9aa36241df5d883e62cbf147ee1b05a9e6ba(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: balance query for the ze\")\n\n        mstore(add(memPtr, 32), \"ro address\")\n\n    }\n\n    function abi_encode_t_stringliteral_7395d4d3901c50cdfcab223d072f9aa36241df5d883e62cbf147ee1b05a9e6ba_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 42)\n        store_literal_in_memory_7395d4d3901c50cdfcab223d072f9aa36241df5d883e62cbf147ee1b05a9e6ba(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_7395d4d3901c50cdfcab223d072f9aa36241df5d883e62cbf147ee1b05a9e6ba__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_7395d4d3901c50cdfcab223d072f9aa36241df5d883e62cbf147ee1b05a9e6ba_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_8e9ed1638ba7e2d59e03d0957c9339381732ac84d73f65c86c45db1467eafa2a(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721URIStorage: URI query for \")\n\n        mstore(add(memPtr, 32), \"nonexistent token\")\n\n    }\n\n    function abi_encode_t_stringliteral_8e9ed1638ba7e2d59e03d0957c9339381732ac84d73f65c86c45db1467eafa2a_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 49)\n        store_literal_in_memory_8e9ed1638ba7e2d59e03d0957c9339381732ac84d73f65c86c45db1467eafa2a(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_8e9ed1638ba7e2d59e03d0957c9339381732ac84d73f65c86c45db1467eafa2a__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8e9ed1638ba7e2d59e03d0957c9339381732ac84d73f65c86c45db1467eafa2a_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, length) -> updated_pos {\n        updated_pos := pos\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, length)\n    }\n\n    function abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed(pos , value1, value0) -> end {\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value0,  pos)\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value1,  pos)\n\n        end := pos\n    }\n\n    function store_literal_in_memory_5797d1ccb08b83980dd0c07ea40d8f6a64d35fff736a19bdd17522954cb0899c(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: operator query for nonex\")\n\n        mstore(add(memPtr, 32), \"istent token\")\n\n    }\n\n    function abi_encode_t_stringliteral_5797d1ccb08b83980dd0c07ea40d8f6a64d35fff736a19bdd17522954cb0899c_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 44)\n        store_literal_in_memory_5797d1ccb08b83980dd0c07ea40d8f6a64d35fff736a19bdd17522954cb0899c(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_5797d1ccb08b83980dd0c07ea40d8f6a64d35fff736a19bdd17522954cb0899c__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_5797d1ccb08b83980dd0c07ea40d8f6a64d35fff736a19bdd17522954cb0899c_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_a01073130a885d6c1c1af6ac75fc3b1c4f9403c235362962bbf528e2bd87d950(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer of token that i\")\n\n        mstore(add(memPtr, 32), \"s not own\")\n\n    }\n\n    function abi_encode_t_stringliteral_a01073130a885d6c1c1af6ac75fc3b1c4f9403c235362962bbf528e2bd87d950_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 41)\n        store_literal_in_memory_a01073130a885d6c1c1af6ac75fc3b1c4f9403c235362962bbf528e2bd87d950(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_a01073130a885d6c1c1af6ac75fc3b1c4f9403c235362962bbf528e2bd87d950__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_a01073130a885d6c1c1af6ac75fc3b1c4f9403c235362962bbf528e2bd87d950_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer to the zero add\")\n\n        mstore(add(memPtr, 32), \"ress\")\n\n    }\n\n    function abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n        store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        if lt(x, y) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approve to caller\")\n\n    }\n\n    function abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 25)\n        store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer to non ERC721Re\")\n\n        mstore(add(memPtr, 32), \"ceiver implementer\")\n\n    }\n\n    function abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 50)\n        store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721Metadata: URI query for no\")\n\n        mstore(add(memPtr, 32), \"nexistent token\")\n\n    }\n\n    function abi_encode_t_stringliteral_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 47)\n        store_literal_in_memory_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_a2d45c0fba603d40d82d590051761ca952d1ab9d78cca6d0d464d7b6e961a9cb_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: token already minted\")\n\n    }\n\n    function abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 28)\n        store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721URIStorage: URI set of non\")\n\n        mstore(add(memPtr, 32), \"existent token\")\n\n    }\n\n    function abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 46)\n        store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function array_length_t_bytes_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_bytes_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed(headStart , value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 128)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n        mstore(add(headStart, 96), sub(tail, headStart))\n        tail := abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value3,  tail)\n\n    }\n\n    function abi_decode_t_bytes4_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    function abi_decode_tuple_t_bytes4_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function checked_div_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n\n        r := div(x, y)\n    }\n\n    function mod_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n\n    function panic_error_0x32() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n\n}\n",
            "id": 17,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "sourceMap": "216:688:15:-:0;;;340:39;;;;;;;;;;1375:113:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1449:5;1441;:13;;;;;;;;;;;;:::i;:::-;;1474:7;1464;:17;;;;;;;;;;;;:::i;:::-;;1375:113;;216:688:15;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:180:17:-;55:77;52:1;45:88;152:4;149:1;142:15;176:4;173:1;166:15;193:320;237:6;274:1;268:4;264:12;254:22;;321:1;315:4;311:12;342:18;332:81;;398:4;390:6;386:17;376:27;;332:81;460:2;452:6;449:14;429:18;426:38;423:84;;;479:18;;:::i;:::-;423:84;244:269;193:320;;;:::o;216:688:15:-;;;;;;;",
        "deployedSourceMap": "216:688:15:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1555:300:3;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2473:98;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3984:217;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3522:401;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4711:330;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5107:179;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2176:235;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1914:205;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2635:102;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4268:153;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5352:320;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;467:663:6;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;385:296:15;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;687:203;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4487:162:3;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1555:300;1657:4;1707:25;1692:40;;;:11;:40;;;;:104;;;;1763:33;1748:48;;;:11;:48;;;;1692:104;:156;;;;1812:36;1836:11;1812:23;:36::i;:::-;1692:156;1673:175;;1555:300;;;:::o;2473:98::-;2527:13;2559:5;2552:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2473:98;:::o;3984:217::-;4060:7;4087:16;4095:7;4087;:16::i;:::-;4079:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;4170:15;:24;4186:7;4170:24;;;;;;;;;;;;;;;;;;;;;4163:31;;3984:217;;;:::o;3522:401::-;3602:13;3618:23;3633:7;3618:14;:23::i;:::-;3602:39;;3665:5;3659:11;;:2;:11;;;;3651:57;;;;;;;;;;;;:::i;:::-;;;;;;;;;3756:5;3740:21;;:12;:10;:12::i;:::-;:21;;;:62;;;;3765:37;3782:5;3789:12;:10;:12::i;:::-;3765:16;:37::i;:::-;3740:62;3719:165;;;;;;;;;;;;:::i;:::-;;;;;;;;;3895:21;3904:2;3908:7;3895:8;:21::i;:::-;3592:331;3522:401;;:::o;4711:330::-;4900:41;4919:12;:10;:12::i;:::-;4933:7;4900:18;:41::i;:::-;4892:103;;;;;;;;;;;;:::i;:::-;;;;;;;;;5006:28;5016:4;5022:2;5026:7;5006:9;:28::i;:::-;4711:330;;;:::o;5107:179::-;5240:39;5257:4;5263:2;5267:7;5240:39;;;;;;;;;;;;:16;:39::i;:::-;5107:179;;;:::o;2176:235::-;2248:7;2267:13;2283:7;:16;2291:7;2283:16;;;;;;;;;;;;;;;;;;;;;2267:32;;2334:1;2317:19;;:5;:19;;;;2309:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;2399:5;2392:12;;;2176:235;;;:::o;1914:205::-;1986:7;2030:1;2013:19;;:5;:19;;;;2005:74;;;;;;;;;;;;:::i;:::-;;;;;;;;;2096:9;:16;2106:5;2096:16;;;;;;;;;;;;;;;;2089:23;;1914:205;;;:::o;2635:102::-;2691:13;2723:7;2716:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2635:102;:::o;4268:153::-;4362:52;4381:12;:10;:12::i;:::-;4395:8;4405;4362:18;:52::i;:::-;4268:153;;:::o;5352:320::-;5521:41;5540:12;:10;:12::i;:::-;5554:7;5521:18;:41::i;:::-;5513:103;;;;;;;;;;;;:::i;:::-;;;;;;;;;5626:39;5640:4;5646:2;5650:7;5659:5;5626:13;:39::i;:::-;5352:320;;;;:::o;467:663:6:-;540:13;573:16;581:7;573;:16::i;:::-;565:78;;;;;;;;;;;;:::i;:::-;;;;;;;;;654:23;680:10;:19;691:7;680:19;;;;;;;;;;;654:45;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;709:18;730:10;:8;:10::i;:::-;709:31;;835:1;819:4;813:18;:23;809:70;;;859:9;852:16;;;;;;809:70;1007:1;987:9;981:23;:27;977:106;;;1055:4;1061:9;1038:33;;;;;;;;;:::i;:::-;;;;;;;;;;;;;1024:48;;;;;;977:106;1100:23;1115:7;1100:14;:23::i;:::-;1093:30;;;;467:663;;;;:::o;385:296:15:-;476:7;499:21;:9;:19;:21::i;:::-;531:17;551:19;:9;:17;:19::i;:::-;531:39;;580:24;586:6;594:9;580:5;:24::i;:::-;614:33;627:9;638:8;614:12;:33::i;:::-;665:9;658:16;;;385:296;;;;:::o;687:203::-;798:43;815:6;823:8;833:7;798:43;;:16;:43::i;:::-;851:31;864:7;851:31;;873:8;851:12;:31::i;:::-;687:203;;;;:::o;4487:162:3:-;4584:4;4607:18;:25;4626:5;4607:25;;;;;;;;;;;;;;;:35;4633:8;4607:35;;;;;;;;;;;;;;;;;;;;;;;;;4600:42;;4487:162;;;;:::o;829:155:12:-;914:4;952:25;937:40;;;:11;:40;;;;930:47;;829:155;;;:::o;7144:125:3:-;7209:4;7260:1;7232:30;;:7;:16;7240:7;7232:16;;;;;;;;;;;;;;;;;;;;;:30;;;;7225:37;;7144:125;;;:::o;640:96:9:-;693:7;719:10;712:17;;640:96;:::o;10995:171:3:-;11096:2;11069:15;:24;11085:7;11069:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;11151:7;11147:2;11113:46;;11122:23;11137:7;11122:14;:23::i;:::-;11113:46;;;;;;;;;;;;10995:171;;:::o;7427:344::-;7520:4;7544:16;7552:7;7544;:16::i;:::-;7536:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;7619:13;7635:23;7650:7;7635:14;:23::i;:::-;7619:39;;7687:5;7676:16;;:7;:16;;;:51;;;;7720:7;7696:31;;:20;7708:7;7696:11;:20::i;:::-;:31;;;7676:51;:87;;;;7731:32;7748:5;7755:7;7731:16;:32::i;:::-;7676:87;7668:96;;;7427:344;;;;:::o;10324:560::-;10478:4;10451:31;;:23;10466:7;10451:14;:23::i;:::-;:31;;;10443:85;;;;;;;;;;;;:::i;:::-;;;;;;;;;10560:1;10546:16;;:2;:16;;;;10538:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;10614:39;10635:4;10641:2;10645:7;10614:20;:39::i;:::-;10715:29;10732:1;10736:7;10715:8;:29::i;:::-;10774:1;10755:9;:15;10765:4;10755:15;;;;;;;;;;;;;;;;:20;;;;;;;:::i;:::-;;;;;;;;10802:1;10785:9;:13;10795:2;10785:13;;;;;;;;;;;;;;;;:18;;;;;;;:::i;:::-;;;;;;;;10832:2;10813:7;:16;10821:7;10813:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;10869:7;10865:2;10850:27;;10859:4;10850:27;;;;;;;;;;;;10324:560;;;:::o;11301:307::-;11451:8;11442:17;;:5;:17;;;;11434:55;;;;;;;;;;;;:::i;:::-;;;;;;;;;11537:8;11499:18;:25;11518:5;11499:25;;;;;;;;;;;;;;;:35;11525:8;11499:35;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;11582:8;11560:41;;11575:5;11560:41;;;11592:8;11560:41;;;;;;:::i;:::-;;;;;;;;11301:307;;;:::o;6534:::-;6685:28;6695:4;6701:2;6705:7;6685:9;:28::i;:::-;6731:48;6754:4;6760:2;6764:7;6773:5;6731:22;:48::i;:::-;6723:111;;;;;;;;;;;;:::i;:::-;;;;;;;;;6534:307;;;;:::o;3373:92::-;3424:13;3449:9;;;;;;;;;;;;;;3373:92;:::o;2803:329::-;2876:13;2909:16;2917:7;2909;:16::i;:::-;2901:76;;;;;;;;;;;;:::i;:::-;;;;;;;;;2988:21;3012:10;:8;:10::i;:::-;2988:34;;3063:1;3045:7;3039:21;:25;:86;;;;;;;;;;;;;;;;;3091:7;3100:18;:7;:16;:18::i;:::-;3074:45;;;;;;;;;:::i;:::-;;;;;;;;;;;;;3039:86;3032:93;;;2803:329;;;:::o;945:123:10:-;1050:1;1032:7;:14;;;:19;;;;;;;;;;;945:123;:::o;827:112::-;892:7;918;:14;;;911:21;;827:112;;;:::o;9063:372:3:-;9156:1;9142:16;;:2;:16;;;;9134:61;;;;;;;;;;;;:::i;:::-;;;;;;;;;9214:16;9222:7;9214;:16::i;:::-;9213:17;9205:58;;;;;;;;;;;;:::i;:::-;;;;;;;;;9274:45;9303:1;9307:2;9311:7;9274:20;:45::i;:::-;9347:1;9330:9;:13;9340:2;9330:13;;;;;;;;;;;;;;;;:18;;;;;;;:::i;:::-;;;;;;;;9377:2;9358:7;:16;9366:7;9358:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;9420:7;9416:2;9395:33;;9412:1;9395:33;;;;;;;;;;;;9063:372;;:::o;1277:214:6:-;1376:16;1384:7;1376;:16::i;:::-;1368:75;;;;;;;;;;;;:::i;:::-;;;;;;;;;1475:9;1453:10;:19;1464:7;1453:19;;;;;;;;;;;:31;;;;;;;;;;;;:::i;:::-;;1277:214;;:::o;13495:122:3:-;;;;:::o;12161:778::-;12311:4;12331:15;:2;:13;;;:15::i;:::-;12327:606;;;12382:2;12366:36;;;12403:12;:10;:12::i;:::-;12417:4;12423:7;12432:5;12366:72;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;12362:519;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12622:1;12605:6;:13;:18;12601:266;;;12647:60;;;;;;;;;;:::i;:::-;;;;;;;;12601:266;12819:6;12813:13;12804:6;12800:2;12796:15;12789:38;12362:519;12498:41;;;12488:51;;;:6;:51;;;;12481:58;;;;;12327:606;12918:4;12911:11;;12161:778;;;;;;;:::o;328:703:11:-;384:13;610:1;601:5;:10;597:51;;;627:10;;;;;;;;;;;;;;;;;;;;;597:51;657:12;672:5;657:20;;687:14;711:75;726:1;718:4;:9;711:75;;743:8;;;;;:::i;:::-;;;;773:2;765:10;;;;;:::i;:::-;;;711:75;;;795:19;827:6;817:17;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;795:39;;844:150;860:1;851:5;:10;844:150;;887:1;877:11;;;;;:::i;:::-;;;953:2;945:5;:10;;;;:::i;:::-;932:2;:24;;;;:::i;:::-;919:39;;902:6;909;902:14;;;;;;;;:::i;:::-;;;;;:56;;;;;;;;;;;981:2;972:11;;;;;:::i;:::-;;;844:150;;;1017:6;1003:21;;;;;328:703;;;;:::o;771:377:8:-;831:4;1034:12;1099:7;1087:20;1079:28;;1140:1;1133:4;:8;1126:15;;;771:377;;;:::o;-1:-1:-1:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:75:17:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:149;370:7;410:66;403:5;399:78;388:89;;334:149;;;:::o;489:120::-;561:23;578:5;561:23;:::i;:::-;554:5;551:34;541:62;;599:1;596;589:12;541:62;489:120;:::o;615:137::-;660:5;698:6;685:20;676:29;;714:32;740:5;714:32;:::i;:::-;615:137;;;;:::o;758:327::-;816:6;865:2;853:9;844:7;840:23;836:32;833:119;;;871:79;;:::i;:::-;833:119;991:1;1016:52;1060:7;1051:6;1040:9;1036:22;1016:52;:::i;:::-;1006:62;;962:116;758:327;;;;:::o;1091:90::-;1125:7;1168:5;1161:13;1154:21;1143:32;;1091:90;;;:::o;1187:109::-;1268:21;1283:5;1268:21;:::i;:::-;1263:3;1256:34;1187:109;;:::o;1302:210::-;1389:4;1427:2;1416:9;1412:18;1404:26;;1440:65;1502:1;1491:9;1487:17;1478:6;1440:65;:::i;:::-;1302:210;;;;:::o;1518:99::-;1570:6;1604:5;1598:12;1588:22;;1518:99;;;:::o;1623:169::-;1707:11;1741:6;1736:3;1729:19;1781:4;1776:3;1772:14;1757:29;;1623:169;;;;:::o;1798:307::-;1866:1;1876:113;1890:6;1887:1;1884:13;1876:113;;;1975:1;1970:3;1966:11;1960:18;1956:1;1951:3;1947:11;1940:39;1912:2;1909:1;1905:10;1900:15;;1876:113;;;2007:6;2004:1;2001:13;1998:101;;;2087:1;2078:6;2073:3;2069:16;2062:27;1998:101;1847:258;1798:307;;;:::o;2111:102::-;2152:6;2203:2;2199:7;2194:2;2187:5;2183:14;2179:28;2169:38;;2111:102;;;:::o;2219:364::-;2307:3;2335:39;2368:5;2335:39;:::i;:::-;2390:71;2454:6;2449:3;2390:71;:::i;:::-;2383:78;;2470:52;2515:6;2510:3;2503:4;2496:5;2492:16;2470:52;:::i;:::-;2547:29;2569:6;2547:29;:::i;:::-;2542:3;2538:39;2531:46;;2311:272;2219:364;;;;:::o;2589:313::-;2702:4;2740:2;2729:9;2725:18;2717:26;;2789:9;2783:4;2779:20;2775:1;2764:9;2760:17;2753:47;2817:78;2890:4;2881:6;2817:78;:::i;:::-;2809:86;;2589:313;;;;:::o;2908:77::-;2945:7;2974:5;2963:16;;2908:77;;;:::o;2991:122::-;3064:24;3082:5;3064:24;:::i;:::-;3057:5;3054:35;3044:63;;3103:1;3100;3093:12;3044:63;2991:122;:::o;3119:139::-;3165:5;3203:6;3190:20;3181:29;;3219:33;3246:5;3219:33;:::i;:::-;3119:139;;;;:::o;3264:329::-;3323:6;3372:2;3360:9;3351:7;3347:23;3343:32;3340:119;;;3378:79;;:::i;:::-;3340:119;3498:1;3523:53;3568:7;3559:6;3548:9;3544:22;3523:53;:::i;:::-;3513:63;;3469:117;3264:329;;;;:::o;3599:126::-;3636:7;3676:42;3669:5;3665:54;3654:65;;3599:126;;;:::o;3731:96::-;3768:7;3797:24;3815:5;3797:24;:::i;:::-;3786:35;;3731:96;;;:::o;3833:118::-;3920:24;3938:5;3920:24;:::i;:::-;3915:3;3908:37;3833:118;;:::o;3957:222::-;4050:4;4088:2;4077:9;4073:18;4065:26;;4101:71;4169:1;4158:9;4154:17;4145:6;4101:71;:::i;:::-;3957:222;;;;:::o;4185:122::-;4258:24;4276:5;4258:24;:::i;:::-;4251:5;4248:35;4238:63;;4297:1;4294;4287:12;4238:63;4185:122;:::o;4313:139::-;4359:5;4397:6;4384:20;4375:29;;4413:33;4440:5;4413:33;:::i;:::-;4313:139;;;;:::o;4458:474::-;4526:6;4534;4583:2;4571:9;4562:7;4558:23;4554:32;4551:119;;;4589:79;;:::i;:::-;4551:119;4709:1;4734:53;4779:7;4770:6;4759:9;4755:22;4734:53;:::i;:::-;4724:63;;4680:117;4836:2;4862:53;4907:7;4898:6;4887:9;4883:22;4862:53;:::i;:::-;4852:63;;4807:118;4458:474;;;;;:::o;4938:619::-;5015:6;5023;5031;5080:2;5068:9;5059:7;5055:23;5051:32;5048:119;;;5086:79;;:::i;:::-;5048:119;5206:1;5231:53;5276:7;5267:6;5256:9;5252:22;5231:53;:::i;:::-;5221:63;;5177:117;5333:2;5359:53;5404:7;5395:6;5384:9;5380:22;5359:53;:::i;:::-;5349:63;;5304:118;5461:2;5487:53;5532:7;5523:6;5512:9;5508:22;5487:53;:::i;:::-;5477:63;;5432:118;4938:619;;;;;:::o;5563:329::-;5622:6;5671:2;5659:9;5650:7;5646:23;5642:32;5639:119;;;5677:79;;:::i;:::-;5639:119;5797:1;5822:53;5867:7;5858:6;5847:9;5843:22;5822:53;:::i;:::-;5812:63;;5768:117;5563:329;;;;:::o;5898:118::-;5985:24;6003:5;5985:24;:::i;:::-;5980:3;5973:37;5898:118;;:::o;6022:222::-;6115:4;6153:2;6142:9;6138:18;6130:26;;6166:71;6234:1;6223:9;6219:17;6210:6;6166:71;:::i;:::-;6022:222;;;;:::o;6250:116::-;6320:21;6335:5;6320:21;:::i;:::-;6313:5;6310:32;6300:60;;6356:1;6353;6346:12;6300:60;6250:116;:::o;6372:133::-;6415:5;6453:6;6440:20;6431:29;;6469:30;6493:5;6469:30;:::i;:::-;6372:133;;;;:::o;6511:468::-;6576:6;6584;6633:2;6621:9;6612:7;6608:23;6604:32;6601:119;;;6639:79;;:::i;:::-;6601:119;6759:1;6784:53;6829:7;6820:6;6809:9;6805:22;6784:53;:::i;:::-;6774:63;;6730:117;6886:2;6912:50;6954:7;6945:6;6934:9;6930:22;6912:50;:::i;:::-;6902:60;;6857:115;6511:468;;;;;:::o;6985:117::-;7094:1;7091;7084:12;7108:117;7217:1;7214;7207:12;7231:180;7279:77;7276:1;7269:88;7376:4;7373:1;7366:15;7400:4;7397:1;7390:15;7417:281;7500:27;7522:4;7500:27;:::i;:::-;7492:6;7488:40;7630:6;7618:10;7615:22;7594:18;7582:10;7579:34;7576:62;7573:88;;;7641:18;;:::i;:::-;7573:88;7681:10;7677:2;7670:22;7460:238;7417:281;;:::o;7704:129::-;7738:6;7765:20;;:::i;:::-;7755:30;;7794:33;7822:4;7814:6;7794:33;:::i;:::-;7704:129;;;:::o;7839:307::-;7900:4;7990:18;7982:6;7979:30;7976:56;;;8012:18;;:::i;:::-;7976:56;8050:29;8072:6;8050:29;:::i;:::-;8042:37;;8134:4;8128;8124:15;8116:23;;7839:307;;;:::o;8152:154::-;8236:6;8231:3;8226;8213:30;8298:1;8289:6;8284:3;8280:16;8273:27;8152:154;;;:::o;8312:410::-;8389:5;8414:65;8430:48;8471:6;8430:48;:::i;:::-;8414:65;:::i;:::-;8405:74;;8502:6;8495:5;8488:21;8540:4;8533:5;8529:16;8578:3;8569:6;8564:3;8560:16;8557:25;8554:112;;;8585:79;;:::i;:::-;8554:112;8675:41;8709:6;8704:3;8699;8675:41;:::i;:::-;8395:327;8312:410;;;;;:::o;8741:338::-;8796:5;8845:3;8838:4;8830:6;8826:17;8822:27;8812:122;;8853:79;;:::i;:::-;8812:122;8970:6;8957:20;8995:78;9069:3;9061:6;9054:4;9046:6;9042:17;8995:78;:::i;:::-;8986:87;;8802:277;8741:338;;;;:::o;9085:943::-;9180:6;9188;9196;9204;9253:3;9241:9;9232:7;9228:23;9224:33;9221:120;;;9260:79;;:::i;:::-;9221:120;9380:1;9405:53;9450:7;9441:6;9430:9;9426:22;9405:53;:::i;:::-;9395:63;;9351:117;9507:2;9533:53;9578:7;9569:6;9558:9;9554:22;9533:53;:::i;:::-;9523:63;;9478:118;9635:2;9661:53;9706:7;9697:6;9686:9;9682:22;9661:53;:::i;:::-;9651:63;;9606:118;9791:2;9780:9;9776:18;9763:32;9822:18;9814:6;9811:30;9808:117;;;9844:79;;:::i;:::-;9808:117;9949:62;10003:7;9994:6;9983:9;9979:22;9949:62;:::i;:::-;9939:72;;9734:287;9085:943;;;;;;;:::o;10034:308::-;10096:4;10186:18;10178:6;10175:30;10172:56;;;10208:18;;:::i;:::-;10172:56;10246:29;10268:6;10246:29;:::i;:::-;10238:37;;10330:4;10324;10320:15;10312:23;;10034:308;;;:::o;10348:412::-;10426:5;10451:66;10467:49;10509:6;10467:49;:::i;:::-;10451:66;:::i;:::-;10442:75;;10540:6;10533:5;10526:21;10578:4;10571:5;10567:16;10616:3;10607:6;10602:3;10598:16;10595:25;10592:112;;;10623:79;;:::i;:::-;10592:112;10713:41;10747:6;10742:3;10737;10713:41;:::i;:::-;10432:328;10348:412;;;;;:::o;10780:340::-;10836:5;10885:3;10878:4;10870:6;10866:17;10862:27;10852:122;;10893:79;;:::i;:::-;10852:122;11010:6;10997:20;11035:79;11110:3;11102:6;11095:4;11087:6;11083:17;11035:79;:::i;:::-;11026:88;;10842:278;10780:340;;;;:::o;11126:654::-;11204:6;11212;11261:2;11249:9;11240:7;11236:23;11232:32;11229:119;;;11267:79;;:::i;:::-;11229:119;11387:1;11412:53;11457:7;11448:6;11437:9;11433:22;11412:53;:::i;:::-;11402:63;;11358:117;11542:2;11531:9;11527:18;11514:32;11573:18;11565:6;11562:30;11559:117;;;11595:79;;:::i;:::-;11559:117;11700:63;11755:7;11746:6;11735:9;11731:22;11700:63;:::i;:::-;11690:73;;11485:288;11126:654;;;;;:::o;11786:93::-;11822:7;11862:10;11855:5;11851:22;11840:33;;11786:93;;;:::o;11885:120::-;11957:23;11974:5;11957:23;:::i;:::-;11950:5;11947:34;11937:62;;11995:1;11992;11985:12;11937:62;11885:120;:::o;12011:137::-;12056:5;12094:6;12081:20;12072:29;;12110:32;12136:5;12110:32;:::i;:::-;12011:137;;;;:::o;12154:943::-;12249:6;12257;12265;12273;12322:3;12310:9;12301:7;12297:23;12293:33;12290:120;;;12329:79;;:::i;:::-;12290:120;12449:1;12474:53;12519:7;12510:6;12499:9;12495:22;12474:53;:::i;:::-;12464:63;;12420:117;12576:2;12602:53;12647:7;12638:6;12627:9;12623:22;12602:53;:::i;:::-;12592:63;;12547:118;12704:2;12730:52;12774:7;12765:6;12754:9;12750:22;12730:52;:::i;:::-;12720:62;;12675:117;12859:2;12848:9;12844:18;12831:32;12890:18;12882:6;12879:30;12876:117;;;12912:79;;:::i;:::-;12876:117;13017:63;13072:7;13063:6;13052:9;13048:22;13017:63;:::i;:::-;13007:73;;12802:288;12154:943;;;;;;;:::o;13103:474::-;13171:6;13179;13228:2;13216:9;13207:7;13203:23;13199:32;13196:119;;;13234:79;;:::i;:::-;13196:119;13354:1;13379:53;13424:7;13415:6;13404:9;13400:22;13379:53;:::i;:::-;13369:63;;13325:117;13481:2;13507:53;13552:7;13543:6;13532:9;13528:22;13507:53;:::i;:::-;13497:63;;13452:118;13103:474;;;;;:::o;13583:180::-;13631:77;13628:1;13621:88;13728:4;13725:1;13718:15;13752:4;13749:1;13742:15;13769:320;13813:6;13850:1;13844:4;13840:12;13830:22;;13897:1;13891:4;13887:12;13918:18;13908:81;;13974:4;13966:6;13962:17;13952:27;;13908:81;14036:2;14028:6;14025:14;14005:18;14002:38;13999:84;;;14055:18;;:::i;:::-;13999:84;13820:269;13769:320;;;:::o;14095:231::-;14235:34;14231:1;14223:6;14219:14;14212:58;14304:14;14299:2;14291:6;14287:15;14280:39;14095:231;:::o;14332:366::-;14474:3;14495:67;14559:2;14554:3;14495:67;:::i;:::-;14488:74;;14571:93;14660:3;14571:93;:::i;:::-;14689:2;14684:3;14680:12;14673:19;;14332:366;;;:::o;14704:419::-;14870:4;14908:2;14897:9;14893:18;14885:26;;14957:9;14951:4;14947:20;14943:1;14932:9;14928:17;14921:47;14985:131;15111:4;14985:131;:::i;:::-;14977:139;;14704:419;;;:::o;15129:220::-;15269:34;15265:1;15257:6;15253:14;15246:58;15338:3;15333:2;15325:6;15321:15;15314:28;15129:220;:::o;15355:366::-;15497:3;15518:67;15582:2;15577:3;15518:67;:::i;:::-;15511:74;;15594:93;15683:3;15594:93;:::i;:::-;15712:2;15707:3;15703:12;15696:19;;15355:366;;;:::o;15727:419::-;15893:4;15931:2;15920:9;15916:18;15908:26;;15980:9;15974:4;15970:20;15966:1;15955:9;15951:17;15944:47;16008:131;16134:4;16008:131;:::i;:::-;16000:139;;15727:419;;;:::o;16152:243::-;16292:34;16288:1;16280:6;16276:14;16269:58;16361:26;16356:2;16348:6;16344:15;16337:51;16152:243;:::o;16401:366::-;16543:3;16564:67;16628:2;16623:3;16564:67;:::i;:::-;16557:74;;16640:93;16729:3;16640:93;:::i;:::-;16758:2;16753:3;16749:12;16742:19;;16401:366;;;:::o;16773:419::-;16939:4;16977:2;16966:9;16962:18;16954:26;;17026:9;17020:4;17016:20;17012:1;17001:9;16997:17;16990:47;17054:131;17180:4;17054:131;:::i;:::-;17046:139;;16773:419;;;:::o;17198:236::-;17338:34;17334:1;17326:6;17322:14;17315:58;17407:19;17402:2;17394:6;17390:15;17383:44;17198:236;:::o;17440:366::-;17582:3;17603:67;17667:2;17662:3;17603:67;:::i;:::-;17596:74;;17679:93;17768:3;17679:93;:::i;:::-;17797:2;17792:3;17788:12;17781:19;;17440:366;;;:::o;17812:419::-;17978:4;18016:2;18005:9;18001:18;17993:26;;18065:9;18059:4;18055:20;18051:1;18040:9;18036:17;18029:47;18093:131;18219:4;18093:131;:::i;:::-;18085:139;;17812:419;;;:::o;18237:228::-;18377:34;18373:1;18365:6;18361:14;18354:58;18446:11;18441:2;18433:6;18429:15;18422:36;18237:228;:::o;18471:366::-;18613:3;18634:67;18698:2;18693:3;18634:67;:::i;:::-;18627:74;;18710:93;18799:3;18710:93;:::i;:::-;18828:2;18823:3;18819:12;18812:19;;18471:366;;;:::o;18843:419::-;19009:4;19047:2;19036:9;19032:18;19024:26;;19096:9;19090:4;19086:20;19082:1;19071:9;19067:17;19060:47;19124:131;19250:4;19124:131;:::i;:::-;19116:139;;18843:419;;;:::o;19268:229::-;19408:34;19404:1;19396:6;19392:14;19385:58;19477:12;19472:2;19464:6;19460:15;19453:37;19268:229;:::o;19503:366::-;19645:3;19666:67;19730:2;19725:3;19666:67;:::i;:::-;19659:74;;19742:93;19831:3;19742:93;:::i;:::-;19860:2;19855:3;19851:12;19844:19;;19503:366;;;:::o;19875:419::-;20041:4;20079:2;20068:9;20064:18;20056:26;;20128:9;20122:4;20118:20;20114:1;20103:9;20099:17;20092:47;20156:131;20282:4;20156:131;:::i;:::-;20148:139;;19875:419;;;:::o;20300:236::-;20440:34;20436:1;20428:6;20424:14;20417:58;20509:19;20504:2;20496:6;20492:15;20485:44;20300:236;:::o;20542:366::-;20684:3;20705:67;20769:2;20764:3;20705:67;:::i;:::-;20698:74;;20781:93;20870:3;20781:93;:::i;:::-;20899:2;20894:3;20890:12;20883:19;;20542:366;;;:::o;20914:419::-;21080:4;21118:2;21107:9;21103:18;21095:26;;21167:9;21161:4;21157:20;21153:1;21142:9;21138:17;21131:47;21195:131;21321:4;21195:131;:::i;:::-;21187:139;;20914:419;;;:::o;21339:148::-;21441:11;21478:3;21463:18;;21339:148;;;;:::o;21493:377::-;21599:3;21627:39;21660:5;21627:39;:::i;:::-;21682:89;21764:6;21759:3;21682:89;:::i;:::-;21675:96;;21780:52;21825:6;21820:3;21813:4;21806:5;21802:16;21780:52;:::i;:::-;21857:6;21852:3;21848:16;21841:23;;21603:267;21493:377;;;;:::o;21876:435::-;22056:3;22078:95;22169:3;22160:6;22078:95;:::i;:::-;22071:102;;22190:95;22281:3;22272:6;22190:95;:::i;:::-;22183:102;;22302:3;22295:10;;21876:435;;;;;:::o;22317:231::-;22457:34;22453:1;22445:6;22441:14;22434:58;22526:14;22521:2;22513:6;22509:15;22502:39;22317:231;:::o;22554:366::-;22696:3;22717:67;22781:2;22776:3;22717:67;:::i;:::-;22710:74;;22793:93;22882:3;22793:93;:::i;:::-;22911:2;22906:3;22902:12;22895:19;;22554:366;;;:::o;22926:419::-;23092:4;23130:2;23119:9;23115:18;23107:26;;23179:9;23173:4;23169:20;23165:1;23154:9;23150:17;23143:47;23207:131;23333:4;23207:131;:::i;:::-;23199:139;;22926:419;;;:::o;23351:228::-;23491:34;23487:1;23479:6;23475:14;23468:58;23560:11;23555:2;23547:6;23543:15;23536:36;23351:228;:::o;23585:366::-;23727:3;23748:67;23812:2;23807:3;23748:67;:::i;:::-;23741:74;;23824:93;23913:3;23824:93;:::i;:::-;23942:2;23937:3;23933:12;23926:19;;23585:366;;;:::o;23957:419::-;24123:4;24161:2;24150:9;24146:18;24138:26;;24210:9;24204:4;24200:20;24196:1;24185:9;24181:17;24174:47;24238:131;24364:4;24238:131;:::i;:::-;24230:139;;23957:419;;;:::o;24382:223::-;24522:34;24518:1;24510:6;24506:14;24499:58;24591:6;24586:2;24578:6;24574:15;24567:31;24382:223;:::o;24611:366::-;24753:3;24774:67;24838:2;24833:3;24774:67;:::i;:::-;24767:74;;24850:93;24939:3;24850:93;:::i;:::-;24968:2;24963:3;24959:12;24952:19;;24611:366;;;:::o;24983:419::-;25149:4;25187:2;25176:9;25172:18;25164:26;;25236:9;25230:4;25226:20;25222:1;25211:9;25207:17;25200:47;25264:131;25390:4;25264:131;:::i;:::-;25256:139;;24983:419;;;:::o;25408:180::-;25456:77;25453:1;25446:88;25553:4;25550:1;25543:15;25577:4;25574:1;25567:15;25594:191;25634:4;25654:20;25672:1;25654:20;:::i;:::-;25649:25;;25688:20;25706:1;25688:20;:::i;:::-;25683:25;;25727:1;25724;25721:8;25718:34;;;25732:18;;:::i;:::-;25718:34;25777:1;25774;25770:9;25762:17;;25594:191;;;;:::o;25791:305::-;25831:3;25850:20;25868:1;25850:20;:::i;:::-;25845:25;;25884:20;25902:1;25884:20;:::i;:::-;25879:25;;26038:1;25970:66;25966:74;25963:1;25960:81;25957:107;;;26044:18;;:::i;:::-;25957:107;26088:1;26085;26081:9;26074:16;;25791:305;;;;:::o;26102:175::-;26242:27;26238:1;26230:6;26226:14;26219:51;26102:175;:::o;26283:366::-;26425:3;26446:67;26510:2;26505:3;26446:67;:::i;:::-;26439:74;;26522:93;26611:3;26522:93;:::i;:::-;26640:2;26635:3;26631:12;26624:19;;26283:366;;;:::o;26655:419::-;26821:4;26859:2;26848:9;26844:18;26836:26;;26908:9;26902:4;26898:20;26894:1;26883:9;26879:17;26872:47;26936:131;27062:4;26936:131;:::i;:::-;26928:139;;26655:419;;;:::o;27080:237::-;27220:34;27216:1;27208:6;27204:14;27197:58;27289:20;27284:2;27276:6;27272:15;27265:45;27080:237;:::o;27323:366::-;27465:3;27486:67;27550:2;27545:3;27486:67;:::i;:::-;27479:74;;27562:93;27651:3;27562:93;:::i;:::-;27680:2;27675:3;27671:12;27664:19;;27323:366;;;:::o;27695:419::-;27861:4;27899:2;27888:9;27884:18;27876:26;;27948:9;27942:4;27938:20;27934:1;27923:9;27919:17;27912:47;27976:131;28102:4;27976:131;:::i;:::-;27968:139;;27695:419;;;:::o;28120:234::-;28260:34;28256:1;28248:6;28244:14;28237:58;28329:17;28324:2;28316:6;28312:15;28305:42;28120:234;:::o;28360:366::-;28502:3;28523:67;28587:2;28582:3;28523:67;:::i;:::-;28516:74;;28599:93;28688:3;28599:93;:::i;:::-;28717:2;28712:3;28708:12;28701:19;;28360:366;;;:::o;28732:419::-;28898:4;28936:2;28925:9;28921:18;28913:26;;28985:9;28979:4;28975:20;28971:1;28960:9;28956:17;28949:47;29013:131;29139:4;29013:131;:::i;:::-;29005:139;;28732:419;;;:::o;29157:182::-;29297:34;29293:1;29285:6;29281:14;29274:58;29157:182;:::o;29345:366::-;29487:3;29508:67;29572:2;29567:3;29508:67;:::i;:::-;29501:74;;29584:93;29673:3;29584:93;:::i;:::-;29702:2;29697:3;29693:12;29686:19;;29345:366;;;:::o;29717:419::-;29883:4;29921:2;29910:9;29906:18;29898:26;;29970:9;29964:4;29960:20;29956:1;29945:9;29941:17;29934:47;29998:131;30124:4;29998:131;:::i;:::-;29990:139;;29717:419;;;:::o;30142:178::-;30282:30;30278:1;30270:6;30266:14;30259:54;30142:178;:::o;30326:366::-;30468:3;30489:67;30553:2;30548:3;30489:67;:::i;:::-;30482:74;;30565:93;30654:3;30565:93;:::i;:::-;30683:2;30678:3;30674:12;30667:19;;30326:366;;;:::o;30698:419::-;30864:4;30902:2;30891:9;30887:18;30879:26;;30951:9;30945:4;30941:20;30937:1;30926:9;30922:17;30915:47;30979:131;31105:4;30979:131;:::i;:::-;30971:139;;30698:419;;;:::o;31123:233::-;31263:34;31259:1;31251:6;31247:14;31240:58;31332:16;31327:2;31319:6;31315:15;31308:41;31123:233;:::o;31362:366::-;31504:3;31525:67;31589:2;31584:3;31525:67;:::i;:::-;31518:74;;31601:93;31690:3;31601:93;:::i;:::-;31719:2;31714:3;31710:12;31703:19;;31362:366;;;:::o;31734:419::-;31900:4;31938:2;31927:9;31923:18;31915:26;;31987:9;31981:4;31977:20;31973:1;31962:9;31958:17;31951:47;32015:131;32141:4;32015:131;:::i;:::-;32007:139;;31734:419;;;:::o;32159:98::-;32210:6;32244:5;32238:12;32228:22;;32159:98;;;:::o;32263:168::-;32346:11;32380:6;32375:3;32368:19;32420:4;32415:3;32411:14;32396:29;;32263:168;;;;:::o;32437:360::-;32523:3;32551:38;32583:5;32551:38;:::i;:::-;32605:70;32668:6;32663:3;32605:70;:::i;:::-;32598:77;;32684:52;32729:6;32724:3;32717:4;32710:5;32706:16;32684:52;:::i;:::-;32761:29;32783:6;32761:29;:::i;:::-;32756:3;32752:39;32745:46;;32527:270;32437:360;;;;:::o;32803:640::-;32998:4;33036:3;33025:9;33021:19;33013:27;;33050:71;33118:1;33107:9;33103:17;33094:6;33050:71;:::i;:::-;33131:72;33199:2;33188:9;33184:18;33175:6;33131:72;:::i;:::-;33213;33281:2;33270:9;33266:18;33257:6;33213:72;:::i;:::-;33332:9;33326:4;33322:20;33317:2;33306:9;33302:18;33295:48;33360:76;33431:4;33422:6;33360:76;:::i;:::-;33352:84;;32803:640;;;;;;;:::o;33449:141::-;33505:5;33536:6;33530:13;33521:22;;33552:32;33578:5;33552:32;:::i;:::-;33449:141;;;;:::o;33596:349::-;33665:6;33714:2;33702:9;33693:7;33689:23;33685:32;33682:119;;;33720:79;;:::i;:::-;33682:119;33840:1;33865:63;33920:7;33911:6;33900:9;33896:22;33865:63;:::i;:::-;33855:73;;33811:127;33596:349;;;;:::o;33951:233::-;33990:3;34013:24;34031:5;34013:24;:::i;:::-;34004:33;;34059:66;34052:5;34049:77;34046:103;;;34129:18;;:::i;:::-;34046:103;34176:1;34169:5;34165:13;34158:20;;33951:233;;;:::o;34190:180::-;34238:77;34235:1;34228:88;34335:4;34332:1;34325:15;34359:4;34356:1;34349:15;34376:185;34416:1;34433:20;34451:1;34433:20;:::i;:::-;34428:25;;34467:20;34485:1;34467:20;:::i;:::-;34462:25;;34506:1;34496:35;;34511:18;;:::i;:::-;34496:35;34553:1;34550;34546:9;34541:14;;34376:185;;;;:::o;34567:176::-;34599:1;34616:20;34634:1;34616:20;:::i;:::-;34611:25;;34650:20;34668:1;34650:20;:::i;:::-;34645:25;;34689:1;34679:35;;34694:18;;:::i;:::-;34679:35;34735:1;34732;34728:9;34723:14;;34567:176;;;;:::o;34749:180::-;34797:77;34794:1;34787:88;34894:4;34891:1;34884:15;34918:4;34915:1;34908:15",
        "source": "// contracts/GameItem.sol\n// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol\";\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\n\ncontract ApeTax is ERC721URIStorage {\n    using Counters for Counters.Counter;\n    Counters.Counter private _tokenIds;\n\n    constructor() ERC721(\"ApeTax\", \"AP\") {}\n\n    function awardItem(address player, string memory tokenURI)\n        public\n        returns (uint256)\n    {\n        _tokenIds.increment();\n\n        uint256 newItemId = _tokenIds.current();\n        _mint(player, newItemId);\n        _setTokenURI(newItemId, tokenURI);\n\n        return newItemId;\n    }\n\n    function transerNft(address sender,address receiver,uint32 transId,string memory tokenURI) external {\n\n        safeTransferFrom(sender, receiver, transId);\n        _setTokenURI(transId, tokenURI);\n\n    }\n\n    \n\n    \n}",
        "sourcePath": "/home/sabali/wallet/contracts/ApeTax.sol",
        "ast": {
          "absolutePath": "project:/contracts/ApeTax.sol",
          "exportedSymbols": {
            "Address": [
              2065
            ],
            "ApeTax": [
              2506
            ],
            "Context": [
              2087
            ],
            "Counters": [
              2161
            ],
            "ERC165": [
              2388
            ],
            "ERC721": [
              1479
            ],
            "ERC721URIStorage": [
              1741
            ],
            "IERC165": [
              2400
            ],
            "IERC721": [
              1595
            ],
            "IERC721Metadata": [
              1768
            ],
            "IERC721Receiver": [
              1613
            ],
            "Strings": [
              2364
            ]
          },
          "id": 2507,
          "license": "MIT",
          "nodeType": "SourceUnit",
          "nodes": [
            {
              "id": 2430,
              "literals": [
                "solidity",
                "^",
                "0.8",
                ".0"
              ],
              "nodeType": "PragmaDirective",
              "src": "58:23:15"
            },
            {
              "absolutePath": "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
              "file": "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
              "id": 2431,
              "nameLocation": "-1:-1:-1",
              "nodeType": "ImportDirective",
              "scope": 2507,
              "sourceUnit": 1742,
              "src": "83:78:15",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
              "file": "@openzeppelin/contracts/utils/Counters.sol",
              "id": 2432,
              "nameLocation": "-1:-1:-1",
              "nodeType": "ImportDirective",
              "scope": 2507,
              "sourceUnit": 2162,
              "src": "162:52:15",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "abstract": false,
              "baseContracts": [
                {
                  "baseName": {
                    "id": 2433,
                    "name": "ERC721URIStorage",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 1741,
                    "src": "235:16:15"
                  },
                  "id": 2434,
                  "nodeType": "InheritanceSpecifier",
                  "src": "235:16:15"
                }
              ],
              "canonicalName": "ApeTax",
              "contractDependencies": [],
              "contractKind": "contract",
              "fullyImplemented": true,
              "id": 2506,
              "linearizedBaseContracts": [
                2506,
                1741,
                1479,
                1768,
                1595,
                2388,
                2400,
                2087
              ],
              "name": "ApeTax",
              "nameLocation": "225:6:15",
              "nodeType": "ContractDefinition",
              "nodes": [
                {
                  "id": 2438,
                  "libraryName": {
                    "id": 2435,
                    "name": "Counters",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2161,
                    "src": "264:8:15"
                  },
                  "nodeType": "UsingForDirective",
                  "src": "258:36:15",
                  "typeName": {
                    "id": 2437,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2436,
                      "name": "Counters.Counter",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 2093,
                      "src": "277:16:15"
                    },
                    "referencedDeclaration": 2093,
                    "src": "277:16:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Counter_$2093_storage_ptr",
                      "typeString": "struct Counters.Counter"
                    }
                  }
                },
                {
                  "constant": false,
                  "id": 2441,
                  "mutability": "mutable",
                  "name": "_tokenIds",
                  "nameLocation": "324:9:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2506,
                  "src": "299:34:15",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Counter_$2093_storage",
                    "typeString": "struct Counters.Counter"
                  },
                  "typeName": {
                    "id": 2440,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2439,
                      "name": "Counters.Counter",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 2093,
                      "src": "299:16:15"
                    },
                    "referencedDeclaration": 2093,
                    "src": "299:16:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Counter_$2093_storage_ptr",
                      "typeString": "struct Counters.Counter"
                    }
                  },
                  "visibility": "private"
                },
                {
                  "body": {
                    "id": 2448,
                    "nodeType": "Block",
                    "src": "377:2:15",
                    "statements": []
                  },
                  "id": 2449,
                  "implemented": true,
                  "kind": "constructor",
                  "modifiers": [
                    {
                      "arguments": [
                        {
                          "hexValue": "417065546178",
                          "id": 2444,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "361:8:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_8adaa78dacd00e867f9398339e9bfa48724f29371f35e84ce4d8bd9a46702acd",
                            "typeString": "literal_string \"ApeTax\""
                          },
                          "value": "ApeTax"
                        },
                        {
                          "hexValue": "4150",
                          "id": 2445,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "371:4:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_0cc8ab7de9d981eca4ad7299b5443a93ffd01850d63cd6b84203336bdd4c657f",
                            "typeString": "literal_string \"AP\""
                          },
                          "value": "AP"
                        }
                      ],
                      "id": 2446,
                      "kind": "baseConstructorSpecifier",
                      "modifierName": {
                        "id": 2443,
                        "name": "ERC721",
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 1479,
                        "src": "354:6:15"
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "354:22:15"
                    }
                  ],
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 2442,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "351:2:15"
                  },
                  "returnParameters": {
                    "id": 2447,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "377:0:15"
                  },
                  "scope": 2506,
                  "src": "340:39:15",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 2481,
                    "nodeType": "Block",
                    "src": "489:192:15",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2458,
                              "name": "_tokenIds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2441,
                              "src": "499:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Counter_$2093_storage",
                                "typeString": "struct Counters.Counter storage ref"
                              }
                            },
                            "id": 2460,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "increment",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 2119,
                            "src": "499:19:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$2093_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$2093_storage_ptr_$",
                              "typeString": "function (struct Counters.Counter storage pointer)"
                            }
                          },
                          "id": 2461,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "499:21:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2462,
                        "nodeType": "ExpressionStatement",
                        "src": "499:21:15"
                      },
                      {
                        "assignments": [
                          2464
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 2464,
                            "mutability": "mutable",
                            "name": "newItemId",
                            "nameLocation": "539:9:15",
                            "nodeType": "VariableDeclaration",
                            "scope": 2481,
                            "src": "531:17:15",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 2463,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "531:7:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 2468,
                        "initialValue": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2465,
                              "name": "_tokenIds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2441,
                              "src": "551:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Counter_$2093_storage",
                                "typeString": "struct Counters.Counter storage ref"
                              }
                            },
                            "id": 2466,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "current",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 2105,
                            "src": "551:17:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$2093_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$2093_storage_ptr_$",
                              "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                            }
                          },
                          "id": 2467,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "551:19:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "531:39:15"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 2470,
                              "name": "player",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2451,
                              "src": "586:6:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 2471,
                              "name": "newItemId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2464,
                              "src": "594:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 2469,
                            "name": "_mint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1229,
                            "src": "580:5:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 2472,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "580:24:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2473,
                        "nodeType": "ExpressionStatement",
                        "src": "580:24:15"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 2475,
                              "name": "newItemId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2464,
                              "src": "627:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 2476,
                              "name": "tokenURI",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2453,
                              "src": "638:8:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 2474,
                            "name": "_setTokenURI",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1710,
                            "src": "614:12:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (uint256,string memory)"
                            }
                          },
                          "id": 2477,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "614:33:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2478,
                        "nodeType": "ExpressionStatement",
                        "src": "614:33:15"
                      },
                      {
                        "expression": {
                          "id": 2479,
                          "name": "newItemId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2464,
                          "src": "665:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 2457,
                        "id": 2480,
                        "nodeType": "Return",
                        "src": "658:16:15"
                      }
                    ]
                  },
                  "functionSelector": "cf378343",
                  "id": 2482,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "awardItem",
                  "nameLocation": "394:9:15",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 2454,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 2451,
                        "mutability": "mutable",
                        "name": "player",
                        "nameLocation": "412:6:15",
                        "nodeType": "VariableDeclaration",
                        "scope": 2482,
                        "src": "404:14:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 2450,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "404:7:15",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 2453,
                        "mutability": "mutable",
                        "name": "tokenURI",
                        "nameLocation": "434:8:15",
                        "nodeType": "VariableDeclaration",
                        "scope": 2482,
                        "src": "420:22:15",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 2452,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "420:6:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "403:40:15"
                  },
                  "returnParameters": {
                    "id": 2457,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 2456,
                        "mutability": "mutable",
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "nodeType": "VariableDeclaration",
                        "scope": 2482,
                        "src": "476:7:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2455,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "476:7:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "475:9:15"
                  },
                  "scope": 2506,
                  "src": "385:296:15",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 2504,
                    "nodeType": "Block",
                    "src": "787:103:15",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 2494,
                              "name": "sender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2484,
                              "src": "815:6:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 2495,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2486,
                              "src": "823:8:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 2496,
                              "name": "transId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2488,
                              "src": "833:7:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              }
                            ],
                            "id": 2493,
                            "name": "safeTransferFrom",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              1010,
                              1040
                            ],
                            "referencedDeclaration": 1010,
                            "src": "798:16:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 2497,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "798:43:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2498,
                        "nodeType": "ExpressionStatement",
                        "src": "798:43:15"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 2500,
                              "name": "transId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2488,
                              "src": "864:7:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              }
                            },
                            {
                              "id": 2501,
                              "name": "tokenURI",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2490,
                              "src": "873:8:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 2499,
                            "name": "_setTokenURI",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1710,
                            "src": "851:12:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (uint256,string memory)"
                            }
                          },
                          "id": 2502,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "851:31:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2503,
                        "nodeType": "ExpressionStatement",
                        "src": "851:31:15"
                      }
                    ]
                  },
                  "functionSelector": "e5807f78",
                  "id": 2505,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "transerNft",
                  "nameLocation": "696:10:15",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 2491,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 2484,
                        "mutability": "mutable",
                        "name": "sender",
                        "nameLocation": "715:6:15",
                        "nodeType": "VariableDeclaration",
                        "scope": 2505,
                        "src": "707:14:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 2483,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "707:7:15",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 2486,
                        "mutability": "mutable",
                        "name": "receiver",
                        "nameLocation": "730:8:15",
                        "nodeType": "VariableDeclaration",
                        "scope": 2505,
                        "src": "722:16:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 2485,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "722:7:15",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 2488,
                        "mutability": "mutable",
                        "name": "transId",
                        "nameLocation": "746:7:15",
                        "nodeType": "VariableDeclaration",
                        "scope": 2505,
                        "src": "739:14:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        },
                        "typeName": {
                          "id": 2487,
                          "name": "uint32",
                          "nodeType": "ElementaryTypeName",
                          "src": "739:6:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 2490,
                        "mutability": "mutable",
                        "name": "tokenURI",
                        "nameLocation": "768:8:15",
                        "nodeType": "VariableDeclaration",
                        "scope": 2505,
                        "src": "754:22:15",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 2489,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "754:6:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "706:71:15"
                  },
                  "returnParameters": {
                    "id": 2492,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "787:0:15"
                  },
                  "scope": 2506,
                  "src": "687:203:15",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "external"
                }
              ],
              "scope": 2507,
              "src": "216:688:15",
              "usedErrors": []
            }
          ],
          "src": "58:846:15"
        },
        "legacyAST": {
          "absolutePath": "project:/contracts/ApeTax.sol",
          "exportedSymbols": {
            "Address": [
              2065
            ],
            "ApeTax": [
              2506
            ],
            "Context": [
              2087
            ],
            "Counters": [
              2161
            ],
            "ERC165": [
              2388
            ],
            "ERC721": [
              1479
            ],
            "ERC721URIStorage": [
              1741
            ],
            "IERC165": [
              2400
            ],
            "IERC721": [
              1595
            ],
            "IERC721Metadata": [
              1768
            ],
            "IERC721Receiver": [
              1613
            ],
            "Strings": [
              2364
            ]
          },
          "id": 2507,
          "license": "MIT",
          "nodeType": "SourceUnit",
          "nodes": [
            {
              "id": 2430,
              "literals": [
                "solidity",
                "^",
                "0.8",
                ".0"
              ],
              "nodeType": "PragmaDirective",
              "src": "58:23:15"
            },
            {
              "absolutePath": "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
              "file": "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
              "id": 2431,
              "nameLocation": "-1:-1:-1",
              "nodeType": "ImportDirective",
              "scope": 2507,
              "sourceUnit": 1742,
              "src": "83:78:15",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
              "file": "@openzeppelin/contracts/utils/Counters.sol",
              "id": 2432,
              "nameLocation": "-1:-1:-1",
              "nodeType": "ImportDirective",
              "scope": 2507,
              "sourceUnit": 2162,
              "src": "162:52:15",
              "symbolAliases": [],
              "unitAlias": ""
            },
            {
              "abstract": false,
              "baseContracts": [
                {
                  "baseName": {
                    "id": 2433,
                    "name": "ERC721URIStorage",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 1741,
                    "src": "235:16:15"
                  },
                  "id": 2434,
                  "nodeType": "InheritanceSpecifier",
                  "src": "235:16:15"
                }
              ],
              "canonicalName": "ApeTax",
              "contractDependencies": [],
              "contractKind": "contract",
              "fullyImplemented": true,
              "id": 2506,
              "linearizedBaseContracts": [
                2506,
                1741,
                1479,
                1768,
                1595,
                2388,
                2400,
                2087
              ],
              "name": "ApeTax",
              "nameLocation": "225:6:15",
              "nodeType": "ContractDefinition",
              "nodes": [
                {
                  "id": 2438,
                  "libraryName": {
                    "id": 2435,
                    "name": "Counters",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2161,
                    "src": "264:8:15"
                  },
                  "nodeType": "UsingForDirective",
                  "src": "258:36:15",
                  "typeName": {
                    "id": 2437,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2436,
                      "name": "Counters.Counter",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 2093,
                      "src": "277:16:15"
                    },
                    "referencedDeclaration": 2093,
                    "src": "277:16:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Counter_$2093_storage_ptr",
                      "typeString": "struct Counters.Counter"
                    }
                  }
                },
                {
                  "constant": false,
                  "id": 2441,
                  "mutability": "mutable",
                  "name": "_tokenIds",
                  "nameLocation": "324:9:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2506,
                  "src": "299:34:15",
                  "stateVariable": true,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Counter_$2093_storage",
                    "typeString": "struct Counters.Counter"
                  },
                  "typeName": {
                    "id": 2440,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2439,
                      "name": "Counters.Counter",
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 2093,
                      "src": "299:16:15"
                    },
                    "referencedDeclaration": 2093,
                    "src": "299:16:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Counter_$2093_storage_ptr",
                      "typeString": "struct Counters.Counter"
                    }
                  },
                  "visibility": "private"
                },
                {
                  "body": {
                    "id": 2448,
                    "nodeType": "Block",
                    "src": "377:2:15",
                    "statements": []
                  },
                  "id": 2449,
                  "implemented": true,
                  "kind": "constructor",
                  "modifiers": [
                    {
                      "arguments": [
                        {
                          "hexValue": "417065546178",
                          "id": 2444,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "361:8:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_8adaa78dacd00e867f9398339e9bfa48724f29371f35e84ce4d8bd9a46702acd",
                            "typeString": "literal_string \"ApeTax\""
                          },
                          "value": "ApeTax"
                        },
                        {
                          "hexValue": "4150",
                          "id": 2445,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "371:4:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_0cc8ab7de9d981eca4ad7299b5443a93ffd01850d63cd6b84203336bdd4c657f",
                            "typeString": "literal_string \"AP\""
                          },
                          "value": "AP"
                        }
                      ],
                      "id": 2446,
                      "kind": "baseConstructorSpecifier",
                      "modifierName": {
                        "id": 2443,
                        "name": "ERC721",
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 1479,
                        "src": "354:6:15"
                      },
                      "nodeType": "ModifierInvocation",
                      "src": "354:22:15"
                    }
                  ],
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 2442,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "351:2:15"
                  },
                  "returnParameters": {
                    "id": 2447,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "377:0:15"
                  },
                  "scope": 2506,
                  "src": "340:39:15",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 2481,
                    "nodeType": "Block",
                    "src": "489:192:15",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2458,
                              "name": "_tokenIds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2441,
                              "src": "499:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Counter_$2093_storage",
                                "typeString": "struct Counters.Counter storage ref"
                              }
                            },
                            "id": 2460,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "increment",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 2119,
                            "src": "499:19:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$2093_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$2093_storage_ptr_$",
                              "typeString": "function (struct Counters.Counter storage pointer)"
                            }
                          },
                          "id": 2461,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "499:21:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2462,
                        "nodeType": "ExpressionStatement",
                        "src": "499:21:15"
                      },
                      {
                        "assignments": [
                          2464
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 2464,
                            "mutability": "mutable",
                            "name": "newItemId",
                            "nameLocation": "539:9:15",
                            "nodeType": "VariableDeclaration",
                            "scope": 2481,
                            "src": "531:17:15",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 2463,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "531:7:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 2468,
                        "initialValue": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2465,
                              "name": "_tokenIds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2441,
                              "src": "551:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Counter_$2093_storage",
                                "typeString": "struct Counters.Counter storage ref"
                              }
                            },
                            "id": 2466,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "current",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 2105,
                            "src": "551:17:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$2093_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$2093_storage_ptr_$",
                              "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                            }
                          },
                          "id": 2467,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "551:19:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "531:39:15"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 2470,
                              "name": "player",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2451,
                              "src": "586:6:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 2471,
                              "name": "newItemId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2464,
                              "src": "594:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 2469,
                            "name": "_mint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1229,
                            "src": "580:5:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 2472,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "580:24:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2473,
                        "nodeType": "ExpressionStatement",
                        "src": "580:24:15"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 2475,
                              "name": "newItemId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2464,
                              "src": "627:9:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 2476,
                              "name": "tokenURI",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2453,
                              "src": "638:8:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 2474,
                            "name": "_setTokenURI",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1710,
                            "src": "614:12:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (uint256,string memory)"
                            }
                          },
                          "id": 2477,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "614:33:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2478,
                        "nodeType": "ExpressionStatement",
                        "src": "614:33:15"
                      },
                      {
                        "expression": {
                          "id": 2479,
                          "name": "newItemId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 2464,
                          "src": "665:9:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 2457,
                        "id": 2480,
                        "nodeType": "Return",
                        "src": "658:16:15"
                      }
                    ]
                  },
                  "functionSelector": "cf378343",
                  "id": 2482,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "awardItem",
                  "nameLocation": "394:9:15",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 2454,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 2451,
                        "mutability": "mutable",
                        "name": "player",
                        "nameLocation": "412:6:15",
                        "nodeType": "VariableDeclaration",
                        "scope": 2482,
                        "src": "404:14:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 2450,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "404:7:15",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 2453,
                        "mutability": "mutable",
                        "name": "tokenURI",
                        "nameLocation": "434:8:15",
                        "nodeType": "VariableDeclaration",
                        "scope": 2482,
                        "src": "420:22:15",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 2452,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "420:6:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "403:40:15"
                  },
                  "returnParameters": {
                    "id": 2457,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 2456,
                        "mutability": "mutable",
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "nodeType": "VariableDeclaration",
                        "scope": 2482,
                        "src": "476:7:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 2455,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "476:7:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "475:9:15"
                  },
                  "scope": 2506,
                  "src": "385:296:15",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "public"
                },
                {
                  "body": {
                    "id": 2504,
                    "nodeType": "Block",
                    "src": "787:103:15",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 2494,
                              "name": "sender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2484,
                              "src": "815:6:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 2495,
                              "name": "receiver",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2486,
                              "src": "823:8:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 2496,
                              "name": "transId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2488,
                              "src": "833:7:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              }
                            ],
                            "id": 2493,
                            "name": "safeTransferFrom",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              1010,
                              1040
                            ],
                            "referencedDeclaration": 1010,
                            "src": "798:16:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,address,uint256)"
                            }
                          },
                          "id": 2497,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "798:43:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2498,
                        "nodeType": "ExpressionStatement",
                        "src": "798:43:15"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 2500,
                              "name": "transId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2488,
                              "src": "864:7:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              }
                            },
                            {
                              "id": 2501,
                              "name": "tokenURI",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2490,
                              "src": "873:8:15",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint32",
                                "typeString": "uint32"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 2499,
                            "name": "_setTokenURI",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1710,
                            "src": "851:12:15",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (uint256,string memory)"
                            }
                          },
                          "id": 2502,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "851:31:15",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2503,
                        "nodeType": "ExpressionStatement",
                        "src": "851:31:15"
                      }
                    ]
                  },
                  "functionSelector": "e5807f78",
                  "id": 2505,
                  "implemented": true,
                  "kind": "function",
                  "modifiers": [],
                  "name": "transerNft",
                  "nameLocation": "696:10:15",
                  "nodeType": "FunctionDefinition",
                  "parameters": {
                    "id": 2491,
                    "nodeType": "ParameterList",
                    "parameters": [
                      {
                        "constant": false,
                        "id": 2484,
                        "mutability": "mutable",
                        "name": "sender",
                        "nameLocation": "715:6:15",
                        "nodeType": "VariableDeclaration",
                        "scope": 2505,
                        "src": "707:14:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 2483,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "707:7:15",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 2486,
                        "mutability": "mutable",
                        "name": "receiver",
                        "nameLocation": "730:8:15",
                        "nodeType": "VariableDeclaration",
                        "scope": 2505,
                        "src": "722:16:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "typeName": {
                          "id": 2485,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "722:7:15",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 2488,
                        "mutability": "mutable",
                        "name": "transId",
                        "nameLocation": "746:7:15",
                        "nodeType": "VariableDeclaration",
                        "scope": 2505,
                        "src": "739:14:15",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint32",
                          "typeString": "uint32"
                        },
                        "typeName": {
                          "id": 2487,
                          "name": "uint32",
                          "nodeType": "ElementaryTypeName",
                          "src": "739:6:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint32",
                            "typeString": "uint32"
                          }
                        },
                        "visibility": "internal"
                      },
                      {
                        "constant": false,
                        "id": 2490,
                        "mutability": "mutable",
                        "name": "tokenURI",
                        "nameLocation": "768:8:15",
                        "nodeType": "VariableDeclaration",
                        "scope": 2505,
                        "src": "754:22:15",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string"
                        },
                        "typeName": {
                          "id": 2489,
                          "name": "string",
                          "nodeType": "ElementaryTypeName",
                          "src": "754:6:15",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_storage_ptr",
                            "typeString": "string"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "src": "706:71:15"
                  },
                  "returnParameters": {
                    "id": 2492,
                    "nodeType": "ParameterList",
                    "parameters": [],
                    "src": "787:0:15"
                  },
                  "scope": 2506,
                  "src": "687:203:15",
                  "stateMutability": "nonpayable",
                  "virtual": false,
                  "visibility": "external"
                }
              ],
              "scope": 2507,
              "src": "216:688:15",
              "usedErrors": []
            }
          ],
          "src": "58:846:15"
        },
        "compiler": {
          "name": "solc",
          "version": "0.8.10+commit.fc410830.Emscripten.clang"
        },
        "networks": {
          "5777": {
            "events": {},
            "links": {},
            "address": "0x704ec4C35Be2968F0C8De47024C5220B845E2ca5",
            "transactionHash": "0x98d66da5ea8f55a5c2a8a4d851580d973c19e1d6fbe1b5c3859e9e5e84ff8a35"
          }
        },
        "schemaVersion": "3.4.3",
        "updatedAt": "2021-12-12T09:13:10.142Z",
        "networkType": "ethereum",
        "devdoc": {
          "kind": "dev",
          "methods": {
            "approve(address,uint256)": {
              "details": "See {IERC721-approve}."
            },
            "balanceOf(address)": {
              "details": "See {IERC721-balanceOf}."
            },
            "getApproved(uint256)": {
              "details": "See {IERC721-getApproved}."
            },
            "isApprovedForAll(address,address)": {
              "details": "See {IERC721-isApprovedForAll}."
            },
            "name()": {
              "details": "See {IERC721Metadata-name}."
            },
            "ownerOf(uint256)": {
              "details": "See {IERC721-ownerOf}."
            },
            "safeTransferFrom(address,address,uint256)": {
              "details": "See {IERC721-safeTransferFrom}."
            },
            "safeTransferFrom(address,address,uint256,bytes)": {
              "details": "See {IERC721-safeTransferFrom}."
            },
            "setApprovalForAll(address,bool)": {
              "details": "See {IERC721-setApprovalForAll}."
            },
            "supportsInterface(bytes4)": {
              "details": "See {IERC165-supportsInterface}."
            },
            "symbol()": {
              "details": "See {IERC721Metadata-symbol}."
            },
            "tokenURI(uint256)": {
              "details": "See {IERC721Metadata-tokenURI}."
            },
            "transferFrom(address,address,uint256)": {
              "details": "See {IERC721-transferFrom}."
            }
          },
          "version": 1
        },
        "userdoc": {
          "kind": "user",
          "methods": {},
          "version": 1
        }
      }