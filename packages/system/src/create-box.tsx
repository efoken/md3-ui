import { Theme } from "@md3-ui/theme"
import { forwardRef } from "react"
import { View as RNView, ViewProps as RNViewProps } from "react-native"
import { Elevation } from "./components/elevation"
import { useTheme } from "./context"
import { styled } from "./create-styled"
import { extendSxProp, styleFunctionSx } from "./style-function-sx"
import { SxProps } from "./types"

interface BoxProps extends RNViewProps {
  as?: React.ElementType
  surfaceTintColor?: string
  sx?: SxProps
}

export function createBox({
  defaultTheme,
  name,
}: {
  defaultTheme?: Theme
  name?: string
} = {}) {
  const BoxRoot = styled(
    forwardRef<RNView, RNViewProps & { surfaceTintColor: string }>(
      ({ children, style, surfaceTintColor, ...props }, ref) => (
        <RNView ref={ref} style={style} {...props}>
          <Elevation style={style} surfaceTintColor={surfaceTintColor}>
            {children}
          </Elevation>
        </RNView>
      ),
    ),
    {
      name,
      slot: "Root",
    },
  )(styleFunctionSx)

  const Box = forwardRef<RNView, BoxProps>((inProps, ref) => {
    const { as, ...props } = extendSxProp(inProps)
    const theme = useTheme(defaultTheme)

    return <BoxRoot ref={ref} as={as} theme={theme} {...props} />
  })

  return Box
}
