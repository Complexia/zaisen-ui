const createPostABI = [  {    "inputs": [      {        "internalType": "uint256",        "name": "profileId",        "type": "uint256"      },      {        "internalType": "string",        "name": "contentURI",        "type": "string"      },      {        "internalType": "address",        "name": "collectModule",        "type": "address"      },      {        "internalType": "bytes",        "name": "collectModuleInitData",        "type": "bytes"      },      {        "internalType": "address",        "name": "referenceModule",        "type": "address"      },      {        "internalType": "bytes",        "name": "referenceModuleInitData",        "type": "bytes"      },      {        "internalType": "uint256",        "name": "pubId",        "type": "uint256"      },      {        "components": [          {            "components": [              {                "internalType": "string",                "name": "contentURI",                "type": "string"              },              {                "internalType": "address",                "name": "collectModule",                "type": "address"              },              {                "internalType": "bytes",                "name": "collectModuleReturnData",                "type": "bytes"              },              {                "internalType": "address",                "name": "referenceModule",                "type": "address"              },              {                "internalType": "bytes",                "name": "referenceModuleReturnData",                "type": "bytes"              }            ],
        "internalType": "struct DataTypes.PublicationStruct",
        "name": "",
        "type": "tuple"
        }
        ],
        "internalType": "mapping(uint256 => mapping(uint256 => struct DataTypes.PublicationStruct)) storage",
        "name": "_pubByIdByProfile",
        "type": "map"
        },
        {
        "internalType": "mapping(address => bool) storage",
        "name": "_collectModuleWhitelisted",
        "type": "map(address => bool)"
        },
        {
        "internalType": "mapping(address => bool) storage",
        "name": "_referenceModuleWhitelisted",
        "type": "map(address => bool)"
        }
        ],
        "name": "createPost",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

export { createPostABI} ;
