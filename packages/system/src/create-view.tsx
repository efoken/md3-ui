import { Theme } from "@md3-ui/theme"
import * as React from "react"
import { View as RNView, ViewProps as RNViewProps } from "react-native"
import { Elevation } from "./components/elevation"
import { useTheme } from "./context"
import { styled } from "./create-styled"
import { extendSxProp, styleFunctionSx } from "./style-function-sx"
import { SxProps } from "./types"

interface ViewProps extends RNViewProps {
  as?: React.ElementType
  surfaceTintColor?: string
  sx?: SxProps
}

export function createView({
  defaultTheme,
  name,
}: {
  defaultTheme?: Theme
  name?: string
} = {}) {
  const ViewRoot = styled(
    React.forwardRef<RNView, RNViewProps & { surfaceTintColor: string }>(
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

  const View = React.forwardRef<RNView, ViewProps>((inProps, ref) => {
    const { as, ...props } = extendSxProp(inProps)
    const theme = useTheme(defaultTheme)

    return <ViewRoot ref={ref} as={as} theme={theme} {...props} />
  })

  return View
}
