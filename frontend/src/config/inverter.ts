// Import the `getDeploy` function from the '@inverter-network/sdk' package
import { Inverter, RequestedModules, GetUserArgs } from "@inverter-network/sdk";
import { createPublicClient, createWalletClient, http } from "viem";
import { optimismSepolia } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

const privKey =
  "0x1302bae67c94432edd1d05c96805c56e4b44292d9eede60868ad120f89c3c32c";

const publicClient = createPublicClient({
  chain: optimismSepolia,
  transport: http(),
});

const walletClient = createWalletClient({
  chain: optimismSepolia,
  account: privateKeyToAccount(privKey),
  transport: http(),
});

export const sdk = new Inverter(publicClient, walletClient);

export const requestedModules = {
  fundingManager: "FM_Rebasing_v1",
  paymentProcessor: "PP_Simple_v1",
  authorizer: "AUT_TokenGated_Roles_v1",
} satisfies RequestedModules;

export const args: GetUserArgs<{
  fundingManager: "FM_Rebasing_v1";
  authorizer: "AUT_TokenGated_Roles_v1";
  paymentProcessor: "PP_Simple_v1";
}> = {
  orchestrator: {
    independentUpdates: true,
    independentUpdateAdmin: "0x86fda565A5E96f4232f8136141C92Fd79F2BE950",
  },
  fundingManager: {
    orchestratorTokenAddress: "0x6ce9fe09c5fa9c43fd0206f4c33a03cb11d1a179",
  },
  authorizer: {
    initialAdmin: "0x86fda565A5E96f4232f8136141C92Fd79F2BE950",
  },
};
