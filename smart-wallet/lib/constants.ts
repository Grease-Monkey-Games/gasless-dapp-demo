import { Mumbai } from "@thirdweb-dev/chains";

export const THIRDWEB_API_KEY = "dca20a5be1ee008e94f1063a94dd7dbb";

export const chain = Mumbai;

const chainInfos = {
  [Mumbai.chainId]: {
    factoryAddress: "0x523661Cb7DE917A0605fD85D465E7bE985F099F8",
  },
};

export const factoryAddress = chainInfos[chain.chainId].factoryAddress;

export const ACCOUNT_ABI = [
  {
    type: "constructor",
    name: "",
    inputs: [
      {
        type: "address",
        name: "_entrypoint",
        internalType: "contract IEntryPoint",
      },
      {
        type: "address",
        name: "_factory",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AdminUpdated",
    inputs: [
      {
        type: "address",
        name: "account",
        indexed: true,
        internalType: "address",
      },
      {
        type: "bool",
        name: "isAdmin",
        indexed: false,
        internalType: "bool",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "ContractURIUpdated",
    inputs: [
      {
        type: "string",
        name: "prevURI",
        indexed: false,
        internalType: "string",
      },
      {
        type: "string",
        name: "newURI",
        indexed: false,
        internalType: "string",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        type: "uint8",
        name: "version",
        indexed: false,
        internalType: "uint8",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleAssignment",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        indexed: true,
        internalType: "bytes32",
      },
      {
        type: "address",
        name: "account",
        indexed: true,
        internalType: "address",
      },
      {
        type: "address",
        name: "signer",
        indexed: true,
        internalType: "address",
      },
      {
        type: "tuple",
        name: "request",
        components: [
          {
            type: "bytes32",
            name: "role",
            internalType: "bytes32",
          },
          {
            type: "address",
            name: "target",
            internalType: "address",
          },
          {
            type: "uint8",
            name: "action",
            internalType: "enum IAccountPermissions.RoleAction",
          },
          {
            type: "uint128",
            name: "validityStartTimestamp",
            internalType: "uint128",
          },
          {
            type: "uint128",
            name: "validityEndTimestamp",
            internalType: "uint128",
          },
          {
            type: "bytes32",
            name: "uid",
            internalType: "bytes32",
          },
        ],
        indexed: false,
        internalType: "struct IAccountPermissions.RoleRequest",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "RoleUpdated",
    inputs: [
      {
        type: "bytes32",
        name: "role",
        indexed: true,
        internalType: "bytes32",
      },
      {
        type: "tuple",
        name: "restrictions",
        components: [
          {
            type: "bytes32",
            name: "role",
            internalType: "bytes32",
          },
          {
            type: "address[]",
            name: "approvedTargets",
            internalType: "address[]",
          },
          {
            type: "uint256",
            name: "maxValuePerTransaction",
            internalType: "uint256",
          },
          {
            type: "uint128",
            name: "startTimestamp",
            internalType: "uint128",
          },
          {
            type: "uint128",
            name: "endTimestamp",
            internalType: "uint128",
          },
        ],
        indexed: false,
        internalType: "struct IAccountPermissions.RoleRestrictions",
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: "function",
    name: "addDeposit",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "changeRole",
    inputs: [
      {
        type: "tuple",
        name: "_req",
        components: [
          {
            type: "bytes32",
            name: "role",
            internalType: "bytes32",
          },
          {
            type: "address",
            name: "target",
            internalType: "address",
          },
          {
            type: "uint8",
            name: "action",
            internalType: "enum IAccountPermissions.RoleAction",
          },
          {
            type: "uint128",
            name: "validityStartTimestamp",
            internalType: "uint128",
          },
          {
            type: "uint128",
            name: "validityEndTimestamp",
            internalType: "uint128",
          },
          {
            type: "bytes32",
            name: "uid",
            internalType: "bytes32",
          },
        ],
        internalType: "struct IAccountPermissions.RoleRequest",
      },
      {
        type: "bytes",
        name: "_signature",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "contractURI",
    inputs: [],
    outputs: [
      {
        type: "string",
        name: "",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "entryPoint",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "contract IEntryPoint",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "execute",
    inputs: [
      {
        type: "address",
        name: "_target",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "_value",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "_calldata",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "executeBatch",
    inputs: [
      {
        type: "address[]",
        name: "_target",
        internalType: "address[]",
      },
      {
        type: "uint256[]",
        name: "_value",
        internalType: "uint256[]",
      },
      {
        type: "bytes[]",
        name: "_calldata",
        internalType: "bytes[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "factory",
    inputs: [],
    outputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAllRoleMembers",
    inputs: [
      {
        type: "bytes32",
        name: "_role",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "address[]",
        name: "",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getDeposit",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getNonce",
    inputs: [],
    outputs: [
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoleRestrictions",
    inputs: [
      {
        type: "bytes32",
        name: "_role",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        type: "tuple",
        name: "",
        components: [
          {
            type: "bytes32",
            name: "role",
            internalType: "bytes32",
          },
          {
            type: "address[]",
            name: "approvedTargets",
            internalType: "address[]",
          },
          {
            type: "uint256",
            name: "maxValuePerTransaction",
            internalType: "uint256",
          },
          {
            type: "uint128",
            name: "startTimestamp",
            internalType: "uint128",
          },
          {
            type: "uint128",
            name: "endTimestamp",
            internalType: "uint128",
          },
        ],
        internalType: "struct IAccountPermissions.RoleRestrictions",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRoleRestrictionsForAccount",
    inputs: [
      {
        type: "address",
        name: "_account",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "tuple",
        name: "",
        components: [
          {
            type: "bytes32",
            name: "role",
            internalType: "bytes32",
          },
          {
            type: "address[]",
            name: "approvedTargets",
            internalType: "address[]",
          },
          {
            type: "uint256",
            name: "maxValuePerTransaction",
            internalType: "uint256",
          },
          {
            type: "uint128",
            name: "startTimestamp",
            internalType: "uint128",
          },
          {
            type: "uint128",
            name: "endTimestamp",
            internalType: "uint128",
          },
        ],
        internalType: "struct IAccountPermissions.RoleRestrictions",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        type: "address",
        name: "_defaultAdmin",
        internalType: "address",
      },
      {
        type: "bytes",
        name: "",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "isAdmin",
    inputs: [
      {
        type: "address",
        name: "_account",
        internalType: "address",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isValidSignature",
    inputs: [
      {
        type: "bytes32",
        name: "_hash",
        internalType: "bytes32",
      },
      {
        type: "bytes",
        name: "_signature",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "bytes4",
        name: "magicValue",
        internalType: "bytes4",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isValidSigner",
    inputs: [
      {
        type: "address",
        name: "_signer",
        internalType: "address",
      },
      {
        type: "tuple",
        name: "_userOp",
        components: [
          {
            type: "address",
            name: "sender",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "nonce",
            internalType: "uint256",
          },
          {
            type: "bytes",
            name: "initCode",
            internalType: "bytes",
          },
          {
            type: "bytes",
            name: "callData",
            internalType: "bytes",
          },
          {
            type: "uint256",
            name: "callGasLimit",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "verificationGasLimit",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "preVerificationGas",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "maxFeePerGas",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "maxPriorityFeePerGas",
            internalType: "uint256",
          },
          {
            type: "bytes",
            name: "paymasterAndData",
            internalType: "bytes",
          },
          {
            type: "bytes",
            name: "signature",
            internalType: "bytes",
          },
        ],
        internalType: "struct UserOperation",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "multicall",
    inputs: [
      {
        type: "bytes[]",
        name: "data",
        internalType: "bytes[]",
      },
    ],
    outputs: [
      {
        type: "bytes[]",
        name: "results",
        internalType: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onERC1155BatchReceived",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint256[]",
        name: "",
        internalType: "uint256[]",
      },
      {
        type: "uint256[]",
        name: "",
        internalType: "uint256[]",
      },
      {
        type: "bytes",
        name: "",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "bytes4",
        name: "",
        internalType: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onERC1155Received",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "bytes4",
        name: "",
        internalType: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onERC721Received",
    inputs: [
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "address",
        name: "",
        internalType: "address",
      },
      {
        type: "uint256",
        name: "",
        internalType: "uint256",
      },
      {
        type: "bytes",
        name: "",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "bytes4",
        name: "",
        internalType: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "register",
    inputs: [
      {
        type: "string",
        name: "username",
        internalType: "string",
      },
      {
        type: "string",
        name: "metadataURI",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setAdmin",
    inputs: [
      {
        type: "address",
        name: "_account",
        internalType: "address",
      },
      {
        type: "bool",
        name: "_isAdmin",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setContractURI",
    inputs: [
      {
        type: "string",
        name: "_uri",
        internalType: "string",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setRoleRestrictions",
    inputs: [
      {
        type: "tuple",
        name: "_restrictions",
        components: [
          {
            type: "bytes32",
            name: "role",
            internalType: "bytes32",
          },
          {
            type: "address[]",
            name: "approvedTargets",
            internalType: "address[]",
          },
          {
            type: "uint256",
            name: "maxValuePerTransaction",
            internalType: "uint256",
          },
          {
            type: "uint128",
            name: "startTimestamp",
            internalType: "uint128",
          },
          {
            type: "uint128",
            name: "endTimestamp",
            internalType: "uint128",
          },
        ],
        internalType: "struct IAccountPermissions.RoleRestrictions",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        type: "bytes4",
        name: "interfaceId",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "validateUserOp",
    inputs: [
      {
        type: "tuple",
        name: "userOp",
        components: [
          {
            type: "address",
            name: "sender",
            internalType: "address",
          },
          {
            type: "uint256",
            name: "nonce",
            internalType: "uint256",
          },
          {
            type: "bytes",
            name: "initCode",
            internalType: "bytes",
          },
          {
            type: "bytes",
            name: "callData",
            internalType: "bytes",
          },
          {
            type: "uint256",
            name: "callGasLimit",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "verificationGasLimit",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "preVerificationGas",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "maxFeePerGas",
            internalType: "uint256",
          },
          {
            type: "uint256",
            name: "maxPriorityFeePerGas",
            internalType: "uint256",
          },
          {
            type: "bytes",
            name: "paymasterAndData",
            internalType: "bytes",
          },
          {
            type: "bytes",
            name: "signature",
            internalType: "bytes",
          },
        ],
        internalType: "struct UserOperation",
      },
      {
        type: "bytes32",
        name: "userOpHash",
        internalType: "bytes32",
      },
      {
        type: "uint256",
        name: "missingAccountFunds",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        type: "uint256",
        name: "validationData",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "verifyRoleRequest",
    inputs: [
      {
        type: "tuple",
        name: "req",
        components: [
          {
            type: "bytes32",
            name: "role",
            internalType: "bytes32",
          },
          {
            type: "address",
            name: "target",
            internalType: "address",
          },
          {
            type: "uint8",
            name: "action",
            internalType: "enum IAccountPermissions.RoleAction",
          },
          {
            type: "uint128",
            name: "validityStartTimestamp",
            internalType: "uint128",
          },
          {
            type: "uint128",
            name: "validityEndTimestamp",
            internalType: "uint128",
          },
          {
            type: "bytes32",
            name: "uid",
            internalType: "bytes32",
          },
        ],
        internalType: "struct IAccountPermissions.RoleRequest",
      },
      {
        type: "bytes",
        name: "signature",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        type: "bool",
        name: "success",
        internalType: "bool",
      },
      {
        type: "address",
        name: "signer",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "withdrawDepositTo",
    inputs: [
      {
        type: "address",
        name: "withdrawAddress",
        internalType: "address payable",
      },
      {
        type: "uint256",
        name: "amount",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "receive",
    name: "",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
];

export const NEW_ACCOUNT_ABI = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entrypoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isAdmin",
        type: "bool",
      },
    ],
    name: "AdminUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "prevURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newURI",
        type: "string",
      },
    ],
    name: "ContractURIUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "authorizingSigner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "targetSigner",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "approvedTargets",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "nativeTokenLimitPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "permissionStartTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "permissionEndTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "reqValidityStartTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "reqValidityEndTimestamp",
            type: "uint128",
          },
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
        ],
        indexed: false,
        internalType: "struct IAccountPermissions.SignerPermissionRequest",
        name: "permissions",
        type: "tuple",
      },
    ],
    name: "SignerPermissionsUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "addDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_target",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_value",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "_calldata",
        type: "bytes[]",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllActiveSigners",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "approvedTargets",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "nativeTokenLimitPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "startTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "endTimestamp",
            type: "uint128",
          },
        ],
        internalType: "struct IAccountPermissions.SignerPermissions[]",
        name: "signers",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllAdmins",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllSigners",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "approvedTargets",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "nativeTokenLimitPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "startTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "endTimestamp",
            type: "uint128",
          },
        ],
        internalType: "struct IAccountPermissions.SignerPermissions[]",
        name: "signers",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "getPermissionsForSigner",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "approvedTargets",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "nativeTokenLimitPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "startTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "endTimestamp",
            type: "uint128",
          },
        ],
        internalType: "struct IAccountPermissions.SignerPermissions",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_defaultAdmin",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "isActiveSigner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "isAdmin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "_userOp",
        type: "tuple",
      },
    ],
    name: "isValidSigner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "username",
        type: "string",
      },
      {
        internalType: "string",
        name: "metadataURI",
        type: "string",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isAdmin",
        type: "bool",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "setContractURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "approvedTargets",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "nativeTokenLimitPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "permissionStartTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "permissionEndTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "reqValidityStartTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "reqValidityEndTimestamp",
            type: "uint128",
          },
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
        ],
        internalType: "struct IAccountPermissions.SignerPermissionRequest",
        name: "_req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "setPermissionsForSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "signer",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "approvedTargets",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "nativeTokenLimitPerTransaction",
            type: "uint256",
          },
          {
            internalType: "uint128",
            name: "permissionStartTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "permissionEndTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "reqValidityStartTimestamp",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "reqValidityEndTimestamp",
            type: "uint128",
          },
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
        ],
        internalType: "struct IAccountPermissions.SignerPermissionRequest",
        name: "req",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "verifySignerPermissionRequest",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawDepositTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
