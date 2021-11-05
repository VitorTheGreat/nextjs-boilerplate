import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next JS App - Boilerplate</title>
        <meta
          name="description"
          content="Next JS App - Boilerplate (Say NO to styled-components)"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
