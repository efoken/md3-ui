import { createTheme, Md3Provider } from "@md3-ui/core"
import { AppProps } from "next/app"
import Head from "next/head"
import * as React from "react"

const App: React.VFC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <Md3Provider
      theme={createTheme({
        // typescale: { "display-large": { fontFamily: "Open Sans" } },
      })}
    >
      <Component {...pageProps} />
    </Md3Provider>
  </>
)

export default App
