import { createTheme, Md3Provider } from "@md3-ui/core"
import { MDXProvider } from "@mdx-js/react"
import { AppProps } from "next/app"
import { Roboto } from "next/font/google"
import Head from "next/head"
import * as React from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { MDXComponents } from "../src/mdx-components"

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
})

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <SafeAreaProvider
      initialMetrics={{
        frame: { width: 0, height: 0, x: 0, y: 0 },
        insets: { left: 0, right: 0, bottom: 0, top: 0 },
      }}
      style={{
        display: "contents" as any,
        flex: 0,
      }}
    >
      <Md3Provider
        theme={createTheme({
          ref: {
            typeface: {
              brand: roboto.style.fontFamily,
              plain: roboto.style.fontFamily,
            },
          },
        })}
      >
        <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
        </MDXProvider>
      </Md3Provider>
    </SafeAreaProvider>
  </>
)

export default App
