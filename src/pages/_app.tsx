import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "@rainbow-me/rainbowkit/styles.css";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


import MetaMaskSDK from "@metamask/sdk";

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../rootReducer';

const store = configureStore({
	reducer: rootReducer,
});



import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
	mainnet,
	polygon,
	optimism,
	arbitrum,
	goerli,
	polygonMumbai,
	optimismGoerli,
	arbitrumGoerli,
} from "wagmi/chains";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Layout from "../components/layout";





const apiKey = process.env.ALCHEMY_API_KEY ? process.env.ALCHEMY_API_KEY : '';
const { chains, provider, webSocketProvider } = configureChains(
	[
		mainnet,
		goerli,
		polygon,
		polygonMumbai,
		optimism,
		optimismGoerli,
		arbitrum,
		arbitrumGoerli,
	],

	[alchemyProvider({ apiKey }), publicProvider()]
);

const { connectors } = getDefaultWallets({
	appName: "Zaisen App",
	chains,
});

const wagmiClient = createClient({
	autoConnect: true,
	connectors,
	provider,
});

export { WagmiConfig, RainbowKitProvider };

const client = createClient({
	autoConnect: true,
	provider,
	webSocketProvider,
  });

  const desiredChainId = ChainId.Polygon;

  // Create a client
  const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
	<Provider store={store}>
		
		<ThirdwebProvider activeChain={desiredChainId}>
			<QueryClientProvider client={queryClient}>
					<Layout>
						
						<Component {...pageProps} />
					</Layout>
			</QueryClientProvider>
		</ThirdwebProvider>
			
		
	</Provider>
	);
}


