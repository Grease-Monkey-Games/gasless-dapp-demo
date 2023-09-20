import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  localWallet,
  paperWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import { FACTORY_ADDRESS, API_KEY } from "../const/addresses";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId="dca20a5be1ee008e94f1063a94dd7dbb"
      activeChain={activeChain}
      supportedWallets={[
        smartWallet({
          factoryAddress: FACTORY_ADDRESS,
          gasless: true,
          personalWallets: [localWallet({ persist: true })],
        }),
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
