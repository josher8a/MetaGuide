import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const colors = {
    accent: '#262626',
    primary: '#D1FDFF',
    secondary: '#FDDB92'
}

const theme: any = lightTheme({
    accentColor: colors.accent
})

const { chains, provider } = configureChains(
    [chain.polygon],
    [
        jsonRpcProvider({
            rpc: (chain) => ({
                http: process.env.NEXT_PUBLIC_RPC_URL || '',

            }),
        }),
    ]
);

const { connectors } = getDefaultWallets({
    appName: "MetaGuides",
    chains,
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});

export default function WalletConnector({ children }: { children: any }) {
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains} theme={theme}>
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    )
  }
  
  