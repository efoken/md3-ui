import { createTheme, Md3Provider } from "@md3-ui/core"
import { MDXProvider } from "@mdx-js/react"
import { AppProps } from "next/app"
import Head from "next/head"
import * as React from "react"
import { MDXComponents } from "../src/mdx-components"

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <Md3Provider
      theme={createTheme({
        // typeface: {
        //   brand: "Open Sans",
        // },
      })}
    >
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </Md3Provider>
  </>
)

export default App
