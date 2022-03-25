import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";

import "../scss/global.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}
