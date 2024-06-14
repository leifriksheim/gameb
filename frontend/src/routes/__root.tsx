import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export const Route = createRootRoute({
  component: () => <Layout />,
});

function Layout() {
  const { isConnected } = useAccount();

  const Main = isConnected
    ? Outlet
    : () => (
        <div className="text-4xl uppercase text-center mt-32">
          Please connect your wallet
        </div>
      );

  return (
    <div className="bg-lime-100 min-h-screen">
      <div className="max-w-screen-md w-full mx-auto">
        <header className="p-2 flex gap-2 justify-between">
          <div className="flex gap-2">
            <Link to="/" className="[&.active]:font-bold">
              Overview
            </Link>{" "}
            <Link to="/register" className="[&.active]:font-bold">
              Register
            </Link>
            <Link to="/buy" className="[&.active]:font-bold">
              Buy
            </Link>
          </div>
          <ConnectButton />
        </header>
        <main className="mt-10">
          <Main />
          <TanStackRouterDevtools />
        </main>
      </div>
    </div>
  );
}
