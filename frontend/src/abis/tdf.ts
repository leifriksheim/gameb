export const contract = {
  address: "0xB5A76b174C09962518838D32351Ce59955Fb6dc9",
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "previousAdmin",
          type: "address",
        },
        {
          indexed: false,
          internalType: "address",
          name: "newAdmin",
          type: "address",
        },
      ],
      name: "AdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "beacon",
          type: "address",
        },
      ],
      name: "BeaconUpgraded",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "implementation",
          type: "address",
        },
      ],
      name: "Upgraded",
      type: "event",
    },
    {
      stateMutability: "payable",
      type: "fallback",
    },
    {
      inputs: [],
      name: "admin",
      outputs: [
        {
          internalType: "address",
          name: "admin_",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "implementation",
      outputs: [
        {
          internalType: "address",
          name: "implementation_",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newImplementation",
          type: "address",
        },
      ],
      name: "upgradeTo",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newImplementation",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "upgradeToAndCall",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
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
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferStarted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "Paused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "SuccessBuy",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "Unpaused",
      type: "event",
    },
    {
      inputs: [],
      name: "MAX_BUYABLE_AMOUNT_PER_WALLET",
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
      name: "acceptOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "buy",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "buyFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "calculateCurrentPrice",
      outputs: [
        {
          internalType: "uint256",
          name: "_currentPrice",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "calculateTotalCost",
      outputs: [
        {
          internalType: "uint256",
          name: "newPrice",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "totalCost",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "currentPrice",
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
          name: "token_",
          type: "address",
        },
        {
          internalType: "address",
          name: "quote_",
          type: "address",
        },
        {
          internalType: "address",
          name: "minter_",
          type: "address",
        },
        {
          internalType: "address",
          name: "treasury_",
          type: "address",
        },
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "minter",
      outputs: [
        {
          internalType: "contract IMinterDAO",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
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
      name: "pause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "paused",
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
      inputs: [],
      name: "pendingOwner",
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
      name: "priceCurveMaxValue",
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
      name: "priceCurveMinValue",
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
      name: "quote",
      outputs: [
        {
          internalType: "contract IERC20Upgradeable",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "saleHardCap",
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
          internalType: "uint256",
          name: "supply",
          type: "uint256",
        },
      ],
      name: "setMaxLiquidSupply",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "newPrice",
          type: "uint256",
        },
      ],
      name: "setNewPrice",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "treasury_",
          type: "address",
        },
      ],
      name: "setTreasury",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "token",
      outputs: [
        {
          internalType: "contract IERC20Upgradeable",
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
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "treasury",
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
      name: "unpause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "_logic",
          type: "address",
        },
        {
          internalType: "address",
          name: "admin_",
          type: "address",
        },
        {
          internalType: "bytes",
          name: "_data",
          type: "bytes",
        },
      ],
      stateMutability: "payable",
      type: "constructor",
    },
  ],
  transactionHash:
    "0x42667b4ba4df4cc943fcb6bbff4a7e91f9704820204def82043cabe74c15e2df",
  receipt: {
    to: null,
    from: "0x62266a37cb6C4a06c10eD65D70Baa2A69C7eFcB7",
    contractAddress: "0xB5A76b174C09962518838D32351Ce59955Fb6dc9",
    transactionIndex: 0,
    gasUsed: "834807",
    logsBloom:
      "0x00000000008000000000000000000000400000000000000000800000000000000000000000000020000000000000000000000000000000000000008000000000000000000000000000000000000002000001000000000000000000000000000000000000020000200000000000000800000000800000000000000000000000400000000000000000000000000080000000000000000080000000000000802000000000000080000000000000000400000000000000000000000000000000000000000020000000000000000000040000000000000400000000000000000020000000000000000000000000000000000010000000000000000000000000000000",
    blockHash:
      "0x492c5d808658a3b826ab7869132814558687b76d03cea54b41573383552eb2d7",
    transactionHash:
      "0x42667b4ba4df4cc943fcb6bbff4a7e91f9704820204def82043cabe74c15e2df",
    logs: [
      {
        transactionIndex: 0,
        blockNumber: 18623959,
        transactionHash:
          "0x42667b4ba4df4cc943fcb6bbff4a7e91f9704820204def82043cabe74c15e2df",
        address: "0xB5A76b174C09962518838D32351Ce59955Fb6dc9",
        topics: [
          "0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b",
          "0x000000000000000000000000a2a17666878011ff13bbbb20426d91f6c8bbe0cf",
        ],
        data: "0x",
        logIndex: 0,
        blockHash:
          "0x492c5d808658a3b826ab7869132814558687b76d03cea54b41573383552eb2d7",
      },
      {
        transactionIndex: 0,
        blockNumber: 18623959,
        transactionHash:
          "0x42667b4ba4df4cc943fcb6bbff4a7e91f9704820204def82043cabe74c15e2df",
        address: "0xB5A76b174C09962518838D32351Ce59955Fb6dc9",
        topics: [
          "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x00000000000000000000000062266a37cb6c4a06c10ed65d70baa2a69c7efcb7",
        ],
        data: "0x",
        logIndex: 1,
        blockHash:
          "0x492c5d808658a3b826ab7869132814558687b76d03cea54b41573383552eb2d7",
      },
      {
        transactionIndex: 0,
        blockNumber: 18623959,
        transactionHash:
          "0x42667b4ba4df4cc943fcb6bbff4a7e91f9704820204def82043cabe74c15e2df",
        address: "0xB5A76b174C09962518838D32351Ce59955Fb6dc9",
        topics: [
          "0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498",
        ],
        data: "0x0000000000000000000000000000000000000000000000000000000000000001",
        logIndex: 2,
        blockHash:
          "0x492c5d808658a3b826ab7869132814558687b76d03cea54b41573383552eb2d7",
      },
      {
        transactionIndex: 0,
        blockNumber: 18623959,
        transactionHash:
          "0x42667b4ba4df4cc943fcb6bbff4a7e91f9704820204def82043cabe74c15e2df",
        address: "0xB5A76b174C09962518838D32351Ce59955Fb6dc9",
        topics: [
          "0x7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f",
        ],
        data: "0x0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e235942bf1112c49ad32dc185aba5fb5b7f0fbe1",
        logIndex: 3,
        blockHash:
          "0x492c5d808658a3b826ab7869132814558687b76d03cea54b41573383552eb2d7",
      },
    ],
    blockNumber: 18623959,
    cumulativeGasUsed: "834807",
    status: 1,
    byzantium: true,
  },
  args: [
    "0xa2A17666878011ff13BBbB20426d91f6C8BBe0cF",
    "0xe235942BF1112c49Ad32DC185AbA5FB5b7F0FBe1",
    "0xf8c8765e000000000000000000000000fa9745984a85ab8931d409078eb9f5910de07c760000000000000000000000000c9861e64fd62b5d753e623879efdc04e273a7b50000000000000000000000004928882f5152958cb8648d74aad8af24a90c6751000000000000000000000000bd9658a4286459dd599ab8b02bda6167d750a288",
  ],
  numDeployments: 1,
  solcInputHash: "0e89febeebc7444140de8e67c9067d2c",
  metadata:
    '{"compiler":{"version":"0.8.10+commit.fc410830"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"address","name":"_logic","type":"address"},{"internalType":"address","name":"admin_","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"admin_","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"implementation_","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}],"devdoc":{"details":"This contract implements a proxy that is upgradeable by an admin. To avoid https://medium.com/nomic-labs-blog/malicious-backdoors-in-ethereum-proxies-62629adf3357[proxy selector clashing], which can potentially be used in an attack, this contract uses the https://blog.openzeppelin.com/the-transparent-proxy-pattern/[transparent proxy pattern]. This pattern implies two things that go hand in hand: 1. If any account other than the admin calls the proxy, the call will be forwarded to the implementation, even if that call matches one of the admin functions exposed by the proxy itself. 2. If the admin calls the proxy, it can access the admin functions, but its calls will never be forwarded to the implementation. If the admin tries to call a function on the implementation it will fail with an error that says \\"admin cannot fallback to proxy target\\". These properties mean that the admin account can only be used for admin actions like upgrading the proxy or changing the admin, so it\'s best if it\'s a dedicated account that is not used for anything else. This will avoid headaches due to sudden errors when trying to call a function from the proxy implementation. Our recommendation is for the dedicated account to be an instance of the {ProxyAdmin} contract. If set up this way, you should think of the `ProxyAdmin` instance as the real administrative interface of your proxy.","kind":"dev","methods":{"admin()":{"details":"Returns the current admin. NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyAdmin}. TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`"},"constructor":{"details":"Initializes an upgradeable proxy managed by `_admin`, backed by the implementation at `_logic`, and optionally initialized with `_data` as explained in {ERC1967Proxy-constructor}."},"implementation()":{"details":"Returns the current implementation. NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyImplementation}. TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`"},"upgradeTo(address)":{"details":"Upgrade the implementation of the proxy. NOTE: Only the admin can call this function. See {ProxyAdmin-upgrade}."},"upgradeToAndCall(address,bytes)":{"details":"Upgrade the implementation of the proxy, and then call a function from the new implementation as specified by `data`, which should be an encoded function call. This is useful to initialize new storage variables in the proxied contract. NOTE: Only the admin can call this function. See {ProxyAdmin-upgradeAndCall}."}},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"solc_0.8/proxy/OptimizedTransparentUpgradeableProxy.sol":"OptimizedTransparentUpgradeableProxy"},"evmVersion":"london","libraries":{},"metadata":{"bytecodeHash":"ipfs","useLiteralContent":true},"optimizer":{"enabled":true,"runs":999999},"remappings":[]},"sources":{"solc_0.8/openzeppelin/interfaces/draft-IERC1822.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.5.0-rc.0) (interfaces/draft-IERC1822.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev ERC1822: Universal Upgradeable Proxy Standard (UUPS) documents a method for upgradeability through a simplified\\n * proxy whose upgrades are fully controlled by the current implementation.\\n */\\ninterface IERC1822Proxiable {\\n    /**\\n     * @dev Returns the storage slot that the proxiable contract assumes is being used to store the implementation\\n     * address.\\n     *\\n     * IMPORTANT: A proxy pointing at a proxiable contract should not be considered proxiable itself, because this risks\\n     * bricking a proxy that upgrades to it, by delegating to itself until out of gas. Thus it is critical that this\\n     * function revert if invoked through a proxy.\\n     */\\n    function proxiableUUID() external view returns (bytes32);\\n}\\n","keccak256":"0x93b4e21c931252739a1ec13ea31d3d35a5c068be3163ccab83e4d70c40355f03","license":"MIT"},"solc_0.8/openzeppelin/proxy/ERC1967/ERC1967Proxy.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (proxy/ERC1967/ERC1967Proxy.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../Proxy.sol\\";\\nimport \\"./ERC1967Upgrade.sol\\";\\n\\n/**\\n * @dev This contract implements an upgradeable proxy. It is upgradeable because calls are delegated to an\\n * implementation address that can be changed. This address is stored in storage in the location specified by\\n * https://eips.ethereum.org/EIPS/eip-1967[EIP1967], so that it doesn\'t conflict with the storage layout of the\\n * implementation behind the proxy.\\n */\\ncontract ERC1967Proxy is Proxy, ERC1967Upgrade {\\n    /**\\n     * @dev Initializes the upgradeable proxy with an initial implementation specified by `_logic`.\\n     *\\n     * If `_data` is nonempty, it\'s used as data in a delegate call to `_logic`. This will typically be an encoded\\n     * function call, and allows initializating the storage of the proxy like a Solidity constructor.\\n     */\\n    constructor(address _logic, bytes memory _data) payable {\\n        assert(_IMPLEMENTATION_SLOT == bytes32(uint256(keccak256(\\"eip1967.proxy.implementation\\")) - 1));\\n        _upgradeToAndCall(_logic, _data, false);\\n    }\\n\\n    /**\\n     * @dev Returns the current implementation address.\\n     */\\n    function _implementation() internal view virtual override returns (address impl) {\\n        return ERC1967Upgrade._getImplementation();\\n    }\\n}\\n","keccak256":"0x6309f9f39dc6f4f45a24f296543867aa358e32946cd6b2874627a996d606b3a0","license":"MIT"},"solc_0.8/openzeppelin/proxy/ERC1967/ERC1967Upgrade.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.5.0-rc.0) (proxy/ERC1967/ERC1967Upgrade.sol)\\n\\npragma solidity ^0.8.2;\\n\\nimport \\"../beacon/IBeacon.sol\\";\\nimport \\"../../interfaces/draft-IERC1822.sol\\";\\nimport \\"../../utils/Address.sol\\";\\nimport \\"../../utils/StorageSlot.sol\\";\\n\\n/**\\n * @dev This abstract contract provides getters and event emitting update functions for\\n * https://eips.ethereum.org/EIPS/eip-1967[EIP1967] slots.\\n *\\n * _Available since v4.1._\\n *\\n * @custom:oz-upgrades-unsafe-allow delegatecall\\n */\\nabstract contract ERC1967Upgrade {\\n    // This is the keccak-256 hash of \\"eip1967.proxy.rollback\\" subtracted by 1\\n    bytes32 private constant _ROLLBACK_SLOT = 0x4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143;\\n\\n    /**\\n     * @dev Storage slot with the address of the current implementation.\\n     * This is the keccak-256 hash of \\"eip1967.proxy.implementation\\" subtracted by 1, and is\\n     * validated in the constructor.\\n     */\\n    bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\\n\\n    /**\\n     * @dev Emitted when the implementation is upgraded.\\n     */\\n    event Upgraded(address indexed implementation);\\n\\n    /**\\n     * @dev Returns the current implementation address.\\n     */\\n    function _getImplementation() internal view returns (address) {\\n        return StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new address in the EIP1967 implementation slot.\\n     */\\n    function _setImplementation(address newImplementation) private {\\n        require(Address.isContract(newImplementation), \\"ERC1967: new implementation is not a contract\\");\\n        StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;\\n    }\\n\\n    /**\\n     * @dev Perform implementation upgrade\\n     *\\n     * Emits an {Upgraded} event.\\n     */\\n    function _upgradeTo(address newImplementation) internal {\\n        _setImplementation(newImplementation);\\n        emit Upgraded(newImplementation);\\n    }\\n\\n    /**\\n     * @dev Perform implementation upgrade with additional setup call.\\n     *\\n     * Emits an {Upgraded} event.\\n     */\\n    function _upgradeToAndCall(\\n        address newImplementation,\\n        bytes memory data,\\n        bool forceCall\\n    ) internal {\\n        _upgradeTo(newImplementation);\\n        if (data.length > 0 || forceCall) {\\n            Address.functionDelegateCall(newImplementation, data);\\n        }\\n    }\\n\\n    /**\\n     * @dev Perform implementation upgrade with security checks for UUPS proxies, and additional setup call.\\n     *\\n     * Emits an {Upgraded} event.\\n     */\\n    function _upgradeToAndCallUUPS(\\n        address newImplementation,\\n        bytes memory data,\\n        bool forceCall\\n    ) internal {\\n        // Upgrades from old implementations will perform a rollback test. This test requires the new\\n        // implementation to upgrade back to the old, non-ERC1822 compliant, implementation. Removing\\n        // this special case will break upgrade paths from old UUPS implementation to new ones.\\n        if (StorageSlot.getBooleanSlot(_ROLLBACK_SLOT).value) {\\n            _setImplementation(newImplementation);\\n        } else {\\n            try IERC1822Proxiable(newImplementation).proxiableUUID() returns (bytes32 slot) {\\n                require(slot == _IMPLEMENTATION_SLOT, \\"ERC1967Upgrade: unsupported proxiableUUID\\");\\n            } catch {\\n                revert(\\"ERC1967Upgrade: new implementation is not UUPS\\");\\n            }\\n            _upgradeToAndCall(newImplementation, data, forceCall);\\n        }\\n    }\\n\\n    /**\\n     * @dev Storage slot with the admin of the contract.\\n     * This is the keccak-256 hash of \\"eip1967.proxy.admin\\" subtracted by 1, and is\\n     * validated in the constructor.\\n     */\\n    bytes32 internal constant _ADMIN_SLOT = 0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103;\\n\\n    /**\\n     * @dev Emitted when the admin account has changed.\\n     */\\n    event AdminChanged(address previousAdmin, address newAdmin);\\n\\n    /**\\n     * @dev Returns the current admin.\\n     */\\n    function _getAdmin() internal view virtual returns (address) {\\n        return StorageSlot.getAddressSlot(_ADMIN_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new address in the EIP1967 admin slot.\\n     */\\n    function _setAdmin(address newAdmin) private {\\n        require(newAdmin != address(0), \\"ERC1967: new admin is the zero address\\");\\n        StorageSlot.getAddressSlot(_ADMIN_SLOT).value = newAdmin;\\n    }\\n\\n    /**\\n     * @dev Changes the admin of the proxy.\\n     *\\n     * Emits an {AdminChanged} event.\\n     */\\n    function _changeAdmin(address newAdmin) internal {\\n        emit AdminChanged(_getAdmin(), newAdmin);\\n        _setAdmin(newAdmin);\\n    }\\n\\n    /**\\n     * @dev The storage slot of the UpgradeableBeacon contract which defines the implementation for this proxy.\\n     * This is bytes32(uint256(keccak256(\'eip1967.proxy.beacon\')) - 1)) and is validated in the constructor.\\n     */\\n    bytes32 internal constant _BEACON_SLOT = 0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50;\\n\\n    /**\\n     * @dev Emitted when the beacon is upgraded.\\n     */\\n    event BeaconUpgraded(address indexed beacon);\\n\\n    /**\\n     * @dev Returns the current beacon.\\n     */\\n    function _getBeacon() internal view returns (address) {\\n        return StorageSlot.getAddressSlot(_BEACON_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new beacon in the EIP1967 beacon slot.\\n     */\\n    function _setBeacon(address newBeacon) private {\\n        require(Address.isContract(newBeacon), \\"ERC1967: new beacon is not a contract\\");\\n        require(Address.isContract(IBeacon(newBeacon).implementation()), \\"ERC1967: beacon implementation is not a contract\\");\\n        StorageSlot.getAddressSlot(_BEACON_SLOT).value = newBeacon;\\n    }\\n\\n    /**\\n     * @dev Perform beacon upgrade with additional setup call. Note: This upgrades the address of the beacon, it does\\n     * not upgrade the implementation contained in the beacon (see {UpgradeableBeacon-_setImplementation} for that).\\n     *\\n     * Emits a {BeaconUpgraded} event.\\n     */\\n    function _upgradeBeaconToAndCall(\\n        address newBeacon,\\n        bytes memory data,\\n        bool forceCall\\n    ) internal {\\n        _setBeacon(newBeacon);\\n        emit BeaconUpgraded(newBeacon);\\n        if (data.length > 0 || forceCall) {\\n            Address.functionDelegateCall(IBeacon(newBeacon).implementation(), data);\\n        }\\n    }\\n}\\n","keccak256":"0x17668652127feebed0ce8d9431ef95ccc8c4292f03e3b8cf06c6ca16af396633","license":"MIT"},"solc_0.8/openzeppelin/proxy/Proxy.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.5.0-rc.0) (proxy/Proxy.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev This abstract contract provides a fallback function that delegates all calls to another contract using the EVM\\n * instruction `delegatecall`. We refer to the second contract as the _implementation_ behind the proxy, and it has to\\n * be specified by overriding the virtual {_implementation} function.\\n *\\n * Additionally, delegation to the implementation can be triggered manually through the {_fallback} function, or to a\\n * different contract through the {_delegate} function.\\n *\\n * The success and return data of the delegated call will be returned back to the caller of the proxy.\\n */\\nabstract contract Proxy {\\n    /**\\n     * @dev Delegates the current call to `implementation`.\\n     *\\n     * This function does not return to its internal call site, it will return directly to the external caller.\\n     */\\n    function _delegate(address implementation) internal virtual {\\n        assembly {\\n            // Copy msg.data. We take full control of memory in this inline assembly\\n            // block because it will not return to Solidity code. We overwrite the\\n            // Solidity scratch pad at memory position 0.\\n            calldatacopy(0, 0, calldatasize())\\n\\n            // Call the implementation.\\n            // out and outsize are 0 because we don\'t know the size yet.\\n            let result := delegatecall(gas(), implementation, 0, calldatasize(), 0, 0)\\n\\n            // Copy the returned data.\\n            returndatacopy(0, 0, returndatasize())\\n\\n            switch result\\n            // delegatecall returns 0 on error.\\n            case 0 {\\n                revert(0, returndatasize())\\n            }\\n            default {\\n                return(0, returndatasize())\\n            }\\n        }\\n    }\\n\\n    /**\\n     * @dev This is a virtual function that should be overriden so it returns the address to which the fallback function\\n     * and {_fallback} should delegate.\\n     */\\n    function _implementation() internal view virtual returns (address);\\n\\n    /**\\n     * @dev Delegates the current call to the address returned by `_implementation()`.\\n     *\\n     * This function does not return to its internall call site, it will return directly to the external caller.\\n     */\\n    function _fallback() internal virtual {\\n        _beforeFallback();\\n        _delegate(_implementation());\\n    }\\n\\n    /**\\n     * @dev Fallback function that delegates calls to the address returned by `_implementation()`. Will run if no other\\n     * function in the contract matches the call data.\\n     */\\n    fallback() external payable virtual {\\n        _fallback();\\n    }\\n\\n    /**\\n     * @dev Fallback function that delegates calls to the address returned by `_implementation()`. Will run if call data\\n     * is empty.\\n     */\\n    receive() external payable virtual {\\n        _fallback();\\n    }\\n\\n    /**\\n     * @dev Hook that is called before falling back to the implementation. Can happen as part of a manual `_fallback`\\n     * call, or as part of the Solidity `fallback` or `receive` functions.\\n     *\\n     * If overriden should call `super._beforeFallback()`.\\n     */\\n    function _beforeFallback() internal virtual {}\\n}\\n","keccak256":"0xd5d1fd16e9faff7fcb3a52e02a8d49156f42a38a03f07b5f1810c21c2149a8ab","license":"MIT"},"solc_0.8/openzeppelin/proxy/beacon/IBeacon.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (proxy/beacon/IBeacon.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev This is the interface that {BeaconProxy} expects of its beacon.\\n */\\ninterface IBeacon {\\n    /**\\n     * @dev Must return an address that can be used as a delegate call target.\\n     *\\n     * {BeaconProxy} will check that this address is a contract.\\n     */\\n    function implementation() external view returns (address);\\n}\\n","keccak256":"0xd50a3421ac379ccb1be435fa646d66a65c986b4924f0849839f08692f39dde61","license":"MIT"},"solc_0.8/openzeppelin/utils/Address.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.5.0-rc.0) (utils/Address.sol)\\n\\npragma solidity ^0.8.1;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     * ====\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * You shouldn\'t rely on `isContract` to protect against flash loan attacks!\\n     *\\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\\n     * constructor.\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize/address.code.length, which returns 0\\n        // for contracts in construction, since the code is only stored at the end\\n        // of the constructor execution.\\n\\n        return account.code.length > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\"Address: insufficient balance\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\"\\");\\n        require(success, \\"Address: unable to send value, recipient may have reverted\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCall(target, data, \\"Address: low-level call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\"Address: low-level call with value failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\"Address: insufficient balance for call\\");\\n        require(isContract(target), \\"Address: call to non-contract\\");\\n\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\"Address: low-level static call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        require(isContract(target), \\"Address: static call to non-contract\\");\\n\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionDelegateCall(target, data, \\"Address: low-level delegate call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(isContract(target), \\"Address: delegate call to non-contract\\");\\n\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn\'t, either by bubbling the\\n     * revert reason using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            // Look for revert reason and bubble it up if present\\n            if (returndata.length > 0) {\\n                // The easiest way to bubble the revert reason is using memory via assembly\\n\\n                assembly {\\n                    let returndata_size := mload(returndata)\\n                    revert(add(32, returndata), returndata_size)\\n                }\\n            } else {\\n                revert(errorMessage);\\n            }\\n        }\\n    }\\n}\\n","keccak256":"0x3777e696b62134e6177440dbe6e6601c0c156a443f57167194b67e75527439de","license":"MIT"},"solc_0.8/openzeppelin/utils/StorageSlot.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/StorageSlot.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Library for reading and writing primitive types to specific storage slots.\\n *\\n * Storage slots are often used to avoid storage conflict when dealing with upgradeable contracts.\\n * This library helps with reading and writing to such slots without the need for inline assembly.\\n *\\n * The functions in this library return Slot structs that contain a `value` member that can be used to read or write.\\n *\\n * Example usage to set ERC1967 implementation slot:\\n * ```\\n * contract ERC1967 {\\n *     bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\\n *\\n *     function _getImplementation() internal view returns (address) {\\n *         return StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value;\\n *     }\\n *\\n *     function _setImplementation(address newImplementation) internal {\\n *         require(Address.isContract(newImplementation), \\"ERC1967: new implementation is not a contract\\");\\n *         StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;\\n *     }\\n * }\\n * ```\\n *\\n * _Available since v4.1 for `address`, `bool`, `bytes32`, and `uint256`._\\n */\\nlibrary StorageSlot {\\n    struct AddressSlot {\\n        address value;\\n    }\\n\\n    struct BooleanSlot {\\n        bool value;\\n    }\\n\\n    struct Bytes32Slot {\\n        bytes32 value;\\n    }\\n\\n    struct Uint256Slot {\\n        uint256 value;\\n    }\\n\\n    /**\\n     * @dev Returns an `AddressSlot` with member `value` located at `slot`.\\n     */\\n    function getAddressSlot(bytes32 slot) internal pure returns (AddressSlot storage r) {\\n        assembly {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `BooleanSlot` with member `value` located at `slot`.\\n     */\\n    function getBooleanSlot(bytes32 slot) internal pure returns (BooleanSlot storage r) {\\n        assembly {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `Bytes32Slot` with member `value` located at `slot`.\\n     */\\n    function getBytes32Slot(bytes32 slot) internal pure returns (Bytes32Slot storage r) {\\n        assembly {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `Uint256Slot` with member `value` located at `slot`.\\n     */\\n    function getUint256Slot(bytes32 slot) internal pure returns (Uint256Slot storage r) {\\n        assembly {\\n            r.slot := slot\\n        }\\n    }\\n}\\n","keccak256":"0xfe1b7a9aa2a530a9e705b220e26cd584e2fbdc9602a3a1066032b12816b46aca","license":"MIT"},"solc_0.8/proxy/OptimizedTransparentUpgradeableProxy.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (proxy/transparent/TransparentUpgradeableProxy.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../openzeppelin/proxy/ERC1967/ERC1967Proxy.sol\\";\\n\\n/**\\n * @dev This contract implements a proxy that is upgradeable by an admin.\\n *\\n * To avoid https://medium.com/nomic-labs-blog/malicious-backdoors-in-ethereum-proxies-62629adf3357[proxy selector\\n * clashing], which can potentially be used in an attack, this contract uses the\\n * https://blog.openzeppelin.com/the-transparent-proxy-pattern/[transparent proxy pattern]. This pattern implies two\\n * things that go hand in hand:\\n *\\n * 1. If any account other than the admin calls the proxy, the call will be forwarded to the implementation, even if\\n * that call matches one of the admin functions exposed by the proxy itself.\\n * 2. If the admin calls the proxy, it can access the admin functions, but its calls will never be forwarded to the\\n * implementation. If the admin tries to call a function on the implementation it will fail with an error that says\\n * \\"admin cannot fallback to proxy target\\".\\n *\\n * These properties mean that the admin account can only be used for admin actions like upgrading the proxy or changing\\n * the admin, so it\'s best if it\'s a dedicated account that is not used for anything else. This will avoid headaches due\\n * to sudden errors when trying to call a function from the proxy implementation.\\n *\\n * Our recommendation is for the dedicated account to be an instance of the {ProxyAdmin} contract. If set up this way,\\n * you should think of the `ProxyAdmin` instance as the real administrative interface of your proxy.\\n */\\ncontract OptimizedTransparentUpgradeableProxy is ERC1967Proxy {\\n    address internal immutable _ADMIN;\\n\\n    /**\\n     * @dev Initializes an upgradeable proxy managed by `_admin`, backed by the implementation at `_logic`, and\\n     * optionally initialized with `_data` as explained in {ERC1967Proxy-constructor}.\\n     */\\n    constructor(\\n        address _logic,\\n        address admin_,\\n        bytes memory _data\\n    ) payable ERC1967Proxy(_logic, _data) {\\n        assert(_ADMIN_SLOT == bytes32(uint256(keccak256(\\"eip1967.proxy.admin\\")) - 1));\\n        _ADMIN = admin_;\\n\\n        // still store it to work with EIP-1967\\n        bytes32 slot = _ADMIN_SLOT;\\n        // solhint-disable-next-line no-inline-assembly\\n        assembly {\\n            sstore(slot, admin_)\\n        }\\n        emit AdminChanged(address(0), admin_);\\n    }\\n\\n    /**\\n     * @dev Modifier used internally that will delegate the call to the implementation unless the sender is the admin.\\n     */\\n    modifier ifAdmin() {\\n        if (msg.sender == _getAdmin()) {\\n            _;\\n        } else {\\n            _fallback();\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns the current admin.\\n     *\\n     * NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyAdmin}.\\n     *\\n     * TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the\\n     * https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call.\\n     * `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`\\n     */\\n    function admin() external ifAdmin returns (address admin_) {\\n        admin_ = _getAdmin();\\n    }\\n\\n    /**\\n     * @dev Returns the current implementation.\\n     *\\n     * NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyImplementation}.\\n     *\\n     * TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the\\n     * https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call.\\n     * `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`\\n     */\\n    function implementation() external ifAdmin returns (address implementation_) {\\n        implementation_ = _implementation();\\n    }\\n\\n    /**\\n     * @dev Upgrade the implementation of the proxy.\\n     *\\n     * NOTE: Only the admin can call this function. See {ProxyAdmin-upgrade}.\\n     */\\n    function upgradeTo(address newImplementation) external ifAdmin {\\n        _upgradeToAndCall(newImplementation, bytes(\\"\\"), false);\\n    }\\n\\n    /**\\n     * @dev Upgrade the implementation of the proxy, and then call a function from the new implementation as specified\\n     * by `data`, which should be an encoded function call. This is useful to initialize new storage variables in the\\n     * proxied contract.\\n     *\\n     * NOTE: Only the admin can call this function. See {ProxyAdmin-upgradeAndCall}.\\n     */\\n    function upgradeToAndCall(address newImplementation, bytes calldata data) external payable ifAdmin {\\n        _upgradeToAndCall(newImplementation, data, true);\\n    }\\n\\n    /**\\n     * @dev Returns the current admin.\\n     */\\n    function _admin() internal view virtual returns (address) {\\n        return _getAdmin();\\n    }\\n\\n    /**\\n     * @dev Makes sure the admin cannot access the fallback function. See {Proxy-_beforeFallback}.\\n     */\\n    function _beforeFallback() internal virtual override {\\n        require(msg.sender != _getAdmin(), \\"TransparentUpgradeableProxy: admin cannot fallback to proxy target\\");\\n        super._beforeFallback();\\n    }\\n\\n    function _getAdmin() internal view virtual override returns (address) {\\n        return _ADMIN;\\n    }\\n}\\n","keccak256":"0xa30117644e27fa5b49e162aae2f62b36c1aca02f801b8c594d46e2024963a534","license":"MIT"}},"version":1}',
  bytecode:
    "0x60a060405260405162000f5f38038062000f5f83398101604081905262000026916200044a565b82816200005560017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd6200052a565b60008051602062000f188339815191521462000075576200007562000550565b62000083828260006200013c565b50620000b3905060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61046200052a565b60008051602062000ef883398151915214620000d357620000d362000550565b6001600160a01b038216608081905260008051602062000ef88339815191528381556040805160008152602081019390935290917f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f910160405180910390a150505050620005b9565b620001478362000179565b600082511180620001555750805b156200017457620001728383620001bb60201b620002a91760201c565b505b505050565b6200018481620001ea565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060620001e3838360405180606001604052806027815260200162000f3860279139620002b2565b9392505050565b62000200816200039860201b620002d51760201c565b620002685760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806200029160008051602062000f1883398151915260001b620003a760201b620002411760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606001600160a01b0384163b6200031c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016200025f565b600080856001600160a01b03168560405162000339919062000566565b600060405180830381855af49150503d806000811462000376576040519150601f19603f3d011682016040523d82523d6000602084013e6200037b565b606091505b5090925090506200038e828286620003aa565b9695505050505050565b6001600160a01b03163b151590565b90565b60608315620003bb575081620001e3565b825115620003cc5782518084602001fd5b8160405162461bcd60e51b81526004016200025f919062000584565b80516001600160a01b03811681146200040057600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004385781810151838201526020016200041e565b83811115620001725750506000910152565b6000806000606084860312156200046057600080fd5b6200046b84620003e8565b92506200047b60208501620003e8565b60408501519092506001600160401b03808211156200049957600080fd5b818601915086601f830112620004ae57600080fd5b815181811115620004c357620004c362000405565b604051601f8201601f19908116603f01168101908382118183101715620004ee57620004ee62000405565b816040528281528960208487010111156200050857600080fd5b6200051b8360208301602088016200041b565b80955050505050509250925092565b6000828210156200054b57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b600082516200057a8184602087016200041b565b9190910192915050565b6020815260008251806020840152620005a58160408501602087016200041b565b601f01601f19169190910160400192915050565b608051610900620005f86000396000818161011201528181610176015281816102060152818161025e01528181610287015261030901526109006000f3fe6080604052600436106100435760003560e01c80633659cfe61461005a5780634f1ef2861461007a5780635c60da1b1461008d578063f851a440146100cb57610052565b36610052576100506100e0565b005b6100506100e0565b34801561006657600080fd5b5061005061007536600461076c565b6100fa565b610050610088366004610787565b61015e565b34801561009957600080fd5b506100a26101ec565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100d757600080fd5b506100a2610244565b6100e86102f1565b6100f86100f36103e2565b610422565b565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614156101565761015381604051806020016040528060008152506000610446565b50565b6101536100e0565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614156101e4576101df8383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525060019250610446915050565b505050565b6101df6100e0565b60003373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161415610239576102346103e2565b905090565b6102416100e0565b90565b60003373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016141561023957507f000000000000000000000000000000000000000000000000000000000000000090565b60606102ce83836040518060600160405280602781526020016108a460279139610471565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614156100f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f7879207461726760648201527f6574000000000000000000000000000000000000000000000000000000000000608482015260a4015b60405180910390fd5b60006102347f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b3660008037600080366000845af43d6000803e808015610441573d6000f35b3d6000fd5b61044f83610599565b60008251118061045c5750805b156101df5761046b83836102a9565b50505050565b606073ffffffffffffffffffffffffffffffffffffffff84163b610517576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e7472616374000000000000000000000000000000000000000000000000000060648201526084016103d9565b6000808573ffffffffffffffffffffffffffffffffffffffff168560405161053f9190610836565b600060405180830381855af49150503d806000811461057a576040519150601f19603f3d011682016040523d82523d6000602084013e61057f565b606091505b509150915061058f8282866105e6565b9695505050505050565b6105a281610639565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606083156105f55750816102ce565b8251156106055782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d99190610852565b73ffffffffffffffffffffffffffffffffffffffff81163b6106dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016103d9565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b803573ffffffffffffffffffffffffffffffffffffffff8116811461076757600080fd5b919050565b60006020828403121561077e57600080fd5b6102ce82610743565b60008060006040848603121561079c57600080fd5b6107a584610743565b9250602084013567ffffffffffffffff808211156107c257600080fd5b818601915086601f8301126107d657600080fd5b8135818111156107e557600080fd5b8760208285010111156107f757600080fd5b6020830194508093505050509250925092565b60005b8381101561082557818101518382015260200161080d565b8381111561046b5750506000910152565b6000825161084881846020870161080a565b9190910192915050565b602081526000825180602084015261087181604085016020870161080a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212206f70214c51cdd41c05ba0ffeb72b309ca3c8be178fd6e73c12162330799984f364736f6c634300080a0033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564",
  deployedBytecode:
    "0x6080604052600436106100435760003560e01c80633659cfe61461005a5780634f1ef2861461007a5780635c60da1b1461008d578063f851a440146100cb57610052565b36610052576100506100e0565b005b6100506100e0565b34801561006657600080fd5b5061005061007536600461076c565b6100fa565b610050610088366004610787565b61015e565b34801561009957600080fd5b506100a26101ec565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100d757600080fd5b506100a2610244565b6100e86102f1565b6100f86100f36103e2565b610422565b565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614156101565761015381604051806020016040528060008152506000610446565b50565b6101536100e0565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614156101e4576101df8383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525060019250610446915050565b505050565b6101df6100e0565b60003373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161415610239576102346103e2565b905090565b6102416100e0565b90565b60003373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016141561023957507f000000000000000000000000000000000000000000000000000000000000000090565b60606102ce83836040518060600160405280602781526020016108a460279139610471565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614156100f8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f7879207461726760648201527f6574000000000000000000000000000000000000000000000000000000000000608482015260a4015b60405180910390fd5b60006102347f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b3660008037600080366000845af43d6000803e808015610441573d6000f35b3d6000fd5b61044f83610599565b60008251118061045c5750805b156101df5761046b83836102a9565b50505050565b606073ffffffffffffffffffffffffffffffffffffffff84163b610517576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e7472616374000000000000000000000000000000000000000000000000000060648201526084016103d9565b6000808573ffffffffffffffffffffffffffffffffffffffff168560405161053f9190610836565b600060405180830381855af49150503d806000811461057a576040519150601f19603f3d011682016040523d82523d6000602084013e61057f565b606091505b509150915061058f8282866105e6565b9695505050505050565b6105a281610639565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606083156105f55750816102ce565b8251156106055782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d99190610852565b73ffffffffffffffffffffffffffffffffffffffff81163b6106dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016103d9565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b803573ffffffffffffffffffffffffffffffffffffffff8116811461076757600080fd5b919050565b60006020828403121561077e57600080fd5b6102ce82610743565b60008060006040848603121561079c57600080fd5b6107a584610743565b9250602084013567ffffffffffffffff808211156107c257600080fd5b818601915086601f8301126107d657600080fd5b8135818111156107e557600080fd5b8760208285010111156107f757600080fd5b6020830194508093505050509250925092565b60005b8381101561082557818101518382015260200161080d565b8381111561046b5750506000910152565b6000825161084881846020870161080a565b9190910192915050565b602081526000825180602084015261087181604085016020870161080a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212206f70214c51cdd41c05ba0ffeb72b309ca3c8be178fd6e73c12162330799984f364736f6c634300080a0033",
  execute: {
    methodName: "initialize",
    args: [
      "0xfA9745984A85AB8931D409078eb9F5910dE07c76",
      "0x0C9861e64Fd62b5d753e623879Efdc04E273A7b5",
      "0x4928882f5152958cB8648D74aAd8Af24a90c6751",
      "0xBD9658A4286459DD599Ab8b02bDa6167d750A288",
    ],
  },
  implementation: "0xa2A17666878011ff13BBbB20426d91f6C8BBe0cF",
  devdoc: {
    details:
      "This contract implements a proxy that is upgradeable by an admin. To avoid https://medium.com/nomic-labs-blog/malicious-backdoors-in-ethereum-proxies-62629adf3357[proxy selector clashing], which can potentially be used in an attack, this contract uses the https://blog.openzeppelin.com/the-transparent-proxy-pattern/[transparent proxy pattern]. This pattern implies two things that go hand in hand: 1. If any account other than the admin calls the proxy, the call will be forwarded to the implementation, even if that call matches one of the admin functions exposed by the proxy itself. 2. If the admin calls the proxy, it can access the admin functions, but its calls will never be forwarded to the implementation. If the admin tries to call a function on the implementation it will fail with an error that says \"admin cannot fallback to proxy target\". These properties mean that the admin account can only be used for admin actions like upgrading the proxy or changing the admin, so it's best if it's a dedicated account that is not used for anything else. This will avoid headaches due to sudden errors when trying to call a function from the proxy implementation. Our recommendation is for the dedicated account to be an instance of the {ProxyAdmin} contract. If set up this way, you should think of the `ProxyAdmin` instance as the real administrative interface of your proxy.",
    kind: "dev",
    methods: {
      "admin()": {
        details:
          "Returns the current admin. NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyAdmin}. TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103`",
      },
      constructor: {
        details:
          "Initializes an upgradeable proxy managed by `_admin`, backed by the implementation at `_logic`, and optionally initialized with `_data` as explained in {ERC1967Proxy-constructor}.",
      },
      "implementation()": {
        details:
          "Returns the current implementation. NOTE: Only the admin can call this function. See {ProxyAdmin-getProxyImplementation}. TIP: To get this value clients can read directly from the storage slot shown below (specified by EIP1967) using the https://eth.wiki/json-rpc/API#eth_getstorageat[`eth_getStorageAt`] RPC call. `0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc`",
      },
      "upgradeTo(address)": {
        details:
          "Upgrade the implementation of the proxy. NOTE: Only the admin can call this function. See {ProxyAdmin-upgrade}.",
      },
      "upgradeToAndCall(address,bytes)": {
        details:
          "Upgrade the implementation of the proxy, and then call a function from the new implementation as specified by `data`, which should be an encoded function call. This is useful to initialize new storage variables in the proxied contract. NOTE: Only the admin can call this function. See {ProxyAdmin-upgradeAndCall}.",
      },
    },
    version: 1,
  },
  userdoc: {
    kind: "user",
    methods: {},
    version: 1,
  },
  storageLayout: {
    storage: [],
    types: null,
  },
};
