// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";

interface IRegenToken {
    function calculateCurrentPrice() external view returns (uint256);

    function buy(uint256 tokenAmount) external;
}

contract IndexToken is
    Initializable,
    ERC20Upgradeable,
    OwnableUpgradeable,
    ReentrancyGuardUpgradeable
{
    using SafeMathUpgradeable for uint256;
    using SafeERC20Upgradeable for IERC20Upgradeable;

    IERC20Upgradeable public stableCoin;
    address[] public tokens;
    mapping(address => uint256) public tokenHoldings; // Tracks the amount of each token held
    mapping(address => bool) public isToken;

    event TokenAdded(address token);
    event TokenRemoved(address token);

    function initialize(address stableCoinAddress) public initializer {
        __ERC20_init("IndexToken", "ITKN");
        __Ownable_init();
        stableCoin = IERC20Upgradeable(stableCoinAddress);
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
        tokenHoldings[token] = 0; // Initialize token holdings
        emit TokenAdded(token);
    }

    function removeToken(address token) external onlyOwner {
        require(isToken[token], "Token not found");

        // Removing token from the active portfolio
        for (uint256 i = 0; i < tokens.length; i++) {
            if (tokens[i] == token) {
                tokens[i] = tokens[tokens.length - 1]; // Replace the token to be removed with the last in the array
                tokens.pop(); // Remove the last element, now duplicated
                break;
            }
        }

        isToken[token] = false; // Set token status to not active in the portfolio

        emit TokenRemoved(token);
    }

    function buyIndexToken(uint256 indexTokenAmount) external nonReentrant {
        require(indexTokenAmount > 0, "Amount must be greater than 0");
        uint256 totalIndexValue = calculateIndexPrice();
        uint256 requiredstableCoinAmount = totalIndexValue
            .mul(indexTokenAmount)
            .div(1e18);
        stableCoin.safeTransferFrom(
            msg.sender,
            address(this),
            requiredstableCoinAmount
        );

        for (uint i = 0; i < tokens.length; i++) {
            uint256 tokenPrice = IRegenToken(tokens[i]).calculateCurrentPrice();
            uint256 tokenAmount = requiredstableCoinAmount.mul(tokenPrice).div(
                totalIndexValue
            );
            (bool success, ) = address(IRegenToken(tokens[i])).call(
                abi.encodeWithSelector(
                    IRegenToken(tokens[i]).buy.selector,
                    tokenAmount
                )
            );
            require(success, "Failed to buy underlying token");
            tokenHoldings[tokens[i]] = tokenHoldings[tokens[i]].add(
                tokenAmount
            ); // Update holdings
        }

        _mint(msg.sender, indexTokenAmount);
    }

    function calculateIndexPrice() public view returns (uint256) {
        uint256 totalAssetsValue = 0;
        uint256 totalTokenSupply = totalSupply();

        if (totalTokenSupply == 0) {
            // No tokens issued yet, calculate based on token prices with equal weighting
            if (tokens.length == 0) {
                return 0; // No tokens in index
            }
            for (uint i = 0; i < tokens.length; i++) {
                uint256 tokenPrice = IRegenToken(tokens[i])
                    .calculateCurrentPrice();
                totalAssetsValue += tokenPrice;
            }
            return totalAssetsValue / tokens.length;
        }

        for (uint i = 0; i < tokens.length; i++) {
            address token = tokens[i];
            uint256 tokenHeld = tokenHoldings[token];
            if (tokenHeld > 0) {
                uint256 tokenPrice = IRegenToken(token).calculateCurrentPrice();
                totalAssetsValue = totalAssetsValue.add(
                    tokenPrice.mul(tokenHeld)
                );
            }
        }

        return totalAssetsValue.div(totalTokenSupply);
    }

    function getAllTokens() public view returns (address[] memory) {
        return tokens;
    }
}
