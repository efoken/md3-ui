import { Global } from "@md3-ui/system"
import * as React from "react"

export const CSSBaseline: React.FC = () => (
  <Global
    styles={(theme) => ({
      html: {
        // Change from `box-sizing: content-box` so that `width` and `height` is
        // not affected by `padding` or `border`.
        boxSizing: "border-box",
        WebkitFontSmoothing: "antialiased", // Antialiasing.
        MozOsxFontSmoothing: "grayscale", // Antialiasing.
        fontSmooth: "always", // Antialiasing.
        // Fix font resize problem in iOS
        WebkitTextSizeAdjust: "100%",
        textSizeAdjust: "100%",
      },
      "*, *::before, *::after": {
        borderColor: theme.color.outline,
        borderStyle: "solid",
        borderWidth: 0,
        boxSizing: "inherit",
        wordWrap: "break-word",
      },
      body: {
        ...theme.typescale["body-medium"],
        backgroundColor: theme.color.background,
        color: theme.color["on-background"],
        lineHeight: `${theme.typescale["body-medium"].lineHeight}px`,
        margin: 0, // Remove the margin in all browsers.
      },
      "h1, h2, h3, h4, h5, h6": {
        margin: 0,
      },
    })}
  />
)
