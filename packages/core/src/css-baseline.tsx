import { Global } from "@md3-ui/system"

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
        borderColor: theme.sys.color.outline,
        borderStyle: "solid",
        borderWidth: 0,
        boxSizing: "inherit",
        wordWrap: "break-word",
      },
      body: {
        ...theme.sys.typescale.bodyMedium,
        backgroundColor: theme.ref.palette.white,
        color: theme.sys.color.onBackground,
        lineHeight: `${theme.sys.typescale.bodyMedium.lineHeight}px`,
        margin: 0, // Remove the margin in all browsers.
        // Add support for `document.body.requestFullScreen()`.
        // Other elements, if background transparent, are not supported.
        "&::backdrop": {
          backgroundColor: theme.ref.palette.white,
        },
      },
      a: {
        color: theme.sys.color.primary,
      },
    })}
  />
)
