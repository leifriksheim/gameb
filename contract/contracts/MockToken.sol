// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

interface IERC20 {
    function totalSupply() external view returns (uint256);

    function balanceOf(address account) external view returns (uint256);

    function transfer(
        address recipient,
        uint256 amount
    ) external returns (bool);

    function approve(address spender, uint256 amount) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);

    function allowance(
        address owner,
        address spender
    ) external view returns (uint256);
}

contract SimpleToken is Initializable, ERC20Upgradeable, OwnableUpgradeable {
    uint256 public price;
    uint256 public tokensSold;
    address public stablecoinAddress;

    function initialize(address _stablecoinAddress) public initializer {
        __ERC20_init("SimpleToken", "SMT");
        __Ownable_init();

        stablecoinAddress = _stablecoinAddress;
        price = 0.01 ether; // Price of one token is 0.01 cEUR, adjust based on decimal
        tokensSold = 0;
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals()))); // Mint initial supply to deployer
    }

    function calculateCurrentPrice() public view returns (uint256) {
        // The price could be adjusted here if needed, but for now remains constant
        return price; // Keeping the price constant at 0.01 cEUR
    }

    function buy(uint256 numTokens) public {
        uint256 requiredAmount = calculateCurrentPrice() * numTokens;
        IERC20(stablecoinAddress).transferFrom(
            msg.sender,
            address(this),
            requiredAmount
        );

        require(
            balanceOf(address(this)) >= numTokens,
            "Not enough tokens available."
        );
        _transfer(address(this), msg.sender, numTokens);
        tokensSold += numTokens;
    }
}
