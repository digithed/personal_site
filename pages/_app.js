import "./App.css";
import "./IconMove.css";

import { Head } from "next/document";
function MyApp({ Component, pageProps }) {
  <Head>
    <link rel="icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
