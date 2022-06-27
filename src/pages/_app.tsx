import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyle from "../styles/globalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ana Laura</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
