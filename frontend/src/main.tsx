import "@rainbow-me/rainbowkit/styles.css";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { celoAlfajores } from "wagmi/chains";

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [celoAlfajores],
  ssr: false, // If your dApp uses server side rendering (SSR)
});

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UIProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <RouterProvider router={router} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </UIProvider>
  </React.StrictMode>
);

type UiProviderContext = {
  showNotification: (message: string) => void;
};

const UiContext = React.createContext<UiProviderContext>(
  {} as UiProviderContext
);

function UIProvider({ children }: { children: React.ReactNode }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (showError) {
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  }, [showError]);

  function showNotification(message: string) {
    setErrorMessage(message);
    setShowError(true);
  }

  return (
    <UiContext.Provider value={{ showNotification }}>
      {children}
      {showError && (
        <div className="absolute bottom-10 right-1/2 translate-x-1/2  p-4 bg-lime-200  rounded">
          {errorMessage}
        </div>
      )}
    </UiContext.Provider>
  );
}

export const useUi = () => React.useContext(UiContext);
