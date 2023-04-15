import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import Header from "../components/Header";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import rootReducer from "../rootReducer";
import { configureStore } from "@reduxjs/toolkit";




export default function App({ Component, pageProps }: AppProps) {
  // the chainId our app wants to be running on
  // for our example the Polygon Mumbai Testnet
  const desiredChainId = ChainId.Mumbai;

  // Create a client
  const queryClient = new QueryClient();

  const store = configureStore({
    reducer: rootReducer,
  });

  return (
    <Provider store={store}>
      <ThirdwebProvider desiredChainId={desiredChainId}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout> 
        </QueryClientProvider>
      </ThirdwebProvider>
    </Provider>
  );
}
