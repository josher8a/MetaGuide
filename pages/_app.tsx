import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from './layout'
import WalletConnector from './components/rainbow'




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletConnector>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WalletConnector>
    )
}

export default MyApp
