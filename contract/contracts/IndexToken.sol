// SPDX-License-Identifier: AGPL-1.0

pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";

interface IRegenToken {
    function calculateCurrentPrice() external view returns (uint256);

    function buy(uint256 cEURAmount) external;
}

contract IndexToken is
    Initializable,
    ERC20Upgradeable,
    OwnableUpgradeable,
    ReentrancyGuardUpgradeable
{
    using SafeMathUpgradeable for uint256;
    using SafeERC20Upgradeable for IERC20Upgradeable;

    IERC20Upgradeable public cEUR;
    address[] public tokens;
    mapping(address => bool) public isToken;

    event TokenAdded(address token);
    event TokenRemoved(address token);

    function initialize(address cEURAddress) public initializer {
        __ERC20_init("IndexToken", "ITKN");
        __Ownable_init();
        cEUR = IERC20Upgradeable(cEURAddress);
    }

    function addToken(address token) public onlyOwner {
        require(token != address(0), "Invalid token address");
        require(!isToken[token], "Token already added");

        bool success;
        (success, ) = address(token).staticcall(
            abi.encodeWithSignature("calculateCurrentPrice()")
        );
        require(success, "Token does not implement calculateCurrentPrice");

        tokens.push(token);
        isToken[token] = true;
        emit TokenAdded(token);
    }

    function removeToken(address token) external onlyOwner {
        require(isToken[token], "Token not found");
        for (uint256 i = 0; i < tokens.length; i++) {
            if (tokens[i] == token) {
                tokens[i] = tokens[tokens.length - 1];
                tokens.pop();
                break;
            }
        }
        isToken[token] = false;
        emit TokenRemoved(token);
    }

    function buyIndexToken(uint256 indexTokenAmount) external nonReentrant {
        require(indexTokenAmount > 0, "Amount must be greater than 0");
        uint256 totalIndexValue = calculateIndexPrice();
        uint256 requiredCEurAmount = totalIndexValue.mul(indexTokenAmount).div(
            1e18
        );

        // Transfer cEUR tokens from the sender to this contract
        cEUR.safeTransferFrom(msg.sender, address(this), requiredCEurAmount);

        // Distribute the cEUR amounts to underlying tokens
        for (uint i = 0; i < tokens.length; i++) {
            uint256 tokenPrice = IRegenToken(tokens[i]).calculateCurrentPrice();
            uint256 tokenAmount = requiredCEurAmount.mul(tokenPrice).div(
                totalIndexValue
            );
            // The external call to buy tokens may fail; check for its condition
            (bool success, ) = address(IRegenToken(tokens[i])).call(
                abi.encodeWithSelector(
                    IRegenToken(tokens[i]).buy.selector,
                    tokenAmount
                )
            );
            require(success, "Failed to buy underlying token");
        }

        // Mint index tokens to the sender
        _mint(msg.sender, indexTokenAmount);
    }

    function calculateIndexPrice() public view returns (uint256) {
        uint256 totalIndexValue = 0;
        for (uint i = 0; i < tokens.length; i++) {
            uint256 tokenPrice = IRegenToken(tokens[i]).calculateCurrentPrice();
            totalIndexValue = totalIndexValue.add(tokenPrice);
        }
        return totalIndexValue.div(tokens.length);
    }

    function getAllTokens() public view returns (address[] memory) {
        return tokens;
    }
}
