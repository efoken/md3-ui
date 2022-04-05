import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document"
import * as React from "react"
import { AppRegistry } from "react-native"
import config from "../app.json"

// Force Next-generated DOM elements to fill their parent's height
const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

export default class extends Document {
  static async getInitialProps({ renderPage }: DocumentContext) {
    AppRegistry.registerComponent(config.name, () => Main)
    const { getStyleElement } = AppRegistry.getApplication(config.name)
    const page = await renderPage()
    const styles = [
      <style
        key={0}
        dangerouslySetInnerHTML={{ __html: normalizeNextElements }}
      />,
      getStyleElement(),
    ]
    return { ...page, styles: React.Children.toArray(styles) }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
