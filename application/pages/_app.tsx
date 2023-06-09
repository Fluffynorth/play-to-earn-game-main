import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Phoenix } from "@thirdweb-dev/chains"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Phoenix}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
