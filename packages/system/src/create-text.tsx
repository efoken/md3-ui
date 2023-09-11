import { Theme } from "@md3-ui/theme"
import { forwardRef } from "react"
import {
  Platform,
  Text as RNText,
  ViewProps as RNViewProps,
} from "react-native"
import { useTextStyle, useTheme } from "./context"
import { styled } from "./create-styled"
import { extendSxProp, styleFunctionSx } from "./style-function-sx"
import { SxProps } from "./types"

interface TextProps extends RNViewProps {
  as?: React.ElementType
  sx?: SxProps
  variant?: "inherit" | keyof Theme["sys"]["typescale"]
}

export function createText({
  defaultTheme,
  name,
}: {
  defaultTheme?: Theme
  name?: string
} = {}) {
  const TextRoot = styled(RNText, {
    name,
    slot: "Root",
  })(
    ({ ownerState, theme }) =>
      ownerState.variant != null &&
      (ownerState.variant === "inherit"
        ? Platform.select({
            web: {
              fontFamily: "inherit",
              fontSize: "inherit",
              fontWeight: "inherit",
              letterSpacing: "inherit",
              lineHeight: "inherit",
            },
            default: {},
          })
        : theme.sys.typescale[ownerState.variant]),
    styleFunctionSx,
  )

  const Text = forwardRef<RNText, TextProps>((inProps, ref) => {
    const { as, style, variant = "inherit", ...props } = extendSxProp(inProps)
    const theme = useTheme(defaultTheme)

    const textStyle = useTextStyle()

    return (
      <TextRoot
        ref={ref}
        as={as}
        ownerState={{ variant }}
        style={[textStyle, style]}
        theme={theme}
        {...props}
      />
    )
  })

  return Text
}
