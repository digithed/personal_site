import "./App.css";
import './IconMove.css';
import { Head } from 'next/document'
function MyApp({ Component, pageProps }) {
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  return <Component {...pageProps} />
}

export default MyApp;
