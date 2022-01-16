import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <Head>
        <title>SquadFund - Power your Community</title>
        <meta
          property="og:title"
          content="SquadFund - Power your Community"
          key="title"
        />
        <meta
          property="og:description"
          content="Squad fund helps you create and fund projects together with your NFT squad. Part of a strong NFT community, bring it together to build something and create value together"
          key="description"
        />
        <meta property="og:type" content="website" key="type" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
