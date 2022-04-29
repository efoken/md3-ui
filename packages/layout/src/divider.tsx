import {
  OverridableComponent,
  OverrideProps,
  styled,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import * as React from "react"
import { View as RNView, ViewStyle as RNViewStyle } from "react-native"

export interface DividerTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
    /**
     * Override or extend the styles applied to the component.
     */
    styles?: {
      root?: RNViewStyle
    }
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
  }
  defaultAs: C
}

export type DividerProps<
  C extends React.ElementType = DividerTypeMap["defaultAs"],
  P = {},
> = OverrideProps<DividerTypeMap<P, C>, C>

export type DividerStyleKey = keyof NonNullable<DividerProps["styles"]>

const DividerRoot = styled(RNView, {
  name: "Divider",
  slot: "Root",
})(({ theme }) => ({
  backgroundColor: theme.color.outline,
  height: 1,
}))

export const Divider = React.forwardRef<RNView, DividerProps>(
  (inProps, ref) => {
    const { children, style, styles, ...props } = useThemeProps({
      name: "Divider",
      props: inProps,
    })

    return (
      <DividerRoot ref={ref} style={[style, styles?.root]} {...props}>
        {children}
      </DividerRoot>
    )
  },
) as OverridableComponent<DividerTypeMap>

if (__DEV__) {
  Divider.displayName = "Divider"
}
