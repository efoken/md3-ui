import { Theme } from "@md3-ui/theme"
import { isFunction } from "@md3-ui/utils"
import { forwardRef } from "react"
import {
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
  View as RNView,
} from "react-native"
import { Elevation } from "./components/elevation"
import { useTheme } from "./context"
import { styled } from "./create-styled"
import { extendSxProp, styleFunctionSx } from "./style-function-sx"
import { SxProps } from "./types"

interface PressableProps extends RNPressableProps {
  surfaceTintColor?: string
  sx?: SxProps
}

export function createPressable({
  defaultTheme,
  name,
}: {
  defaultTheme?: Theme
  name?: string
} = {}) {
  const PressableRoot = styled(
    forwardRef<RNView, RNPressableProps & { surfaceTintColor: string }>(
      ({ children, style, surfaceTintColor, ...props }, ref) => (
        <RNPressable ref={ref} style={style} {...props}>
          {(state) => (
            <Elevation
              style={isFunction(style) ? style(state) : style}
              surfaceTintColor={surfaceTintColor}
            >
              {isFunction(children) ? children(state) : children}
            </Elevation>
          )}
        </RNPressable>
      ),
    ),
    {
      name,
      slot: "Root",
    },
  )(styleFunctionSx)

  const Pressable = forwardRef<RNView, PressableProps>((inProps, ref) => {
    const props = extendSxProp(inProps)
    const theme = useTheme(defaultTheme)

    return <PressableRoot ref={ref} theme={theme} {...props} />
  })

  return Pressable
}
