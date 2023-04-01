import {
  OverridableComponent,
  OverrideProps,
  OwnerStateProps,
  styled,
  StylesProp,
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
     * Indents the divider with equal padding on both sides.
     * @default false
     */
    inset?: boolean
    /**
     * Indents the divider with padding on the trailing side.
     * @default false
     */
    insetEnd?: boolean
    /**
     * Indents the divider with padding on the leading side.
     * @default false
     */
    insetStart?: boolean
    /**
     * Override or extend the styles applied to the component.
     */
    styles?: StylesProp<{
      root?: RNViewStyle
    }>
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

type DividerOwnerState = Required<
  Pick<DividerProps, "inset" | "insetEnd" | "insetStart">
>

const DividerRoot = styled(RNView, {
  name: "Divider",
  slot: "Root",
})<OwnerStateProps<DividerOwnerState>>(({ ownerState, theme }) => ({
  backgroundColor: theme.comp.divider.color,
  height: theme.comp.divider.thickness,
  width: "100%",

  ...((ownerState.inset || ownerState.insetStart) && {
    paddingStart: 16,
  }),

  ...((ownerState.inset || ownerState.insetEnd) && {
    paddingEnd: 16,
  }),
}))

export const Divider = React.forwardRef<RNView, DividerProps>(
  (inProps, ref) => {
    const {
      inset = false,
      insetEnd = false,
      insetStart = false,
      style,
      styles,
      ...props
    } = useThemeProps({
      name: "Divider",
      props: inProps,
    })

    const ownerState = {
      inset,
      insetEnd,
      insetStart,
    }

    return (
      <DividerRoot
        ref={ref}
        ownerState={ownerState}
        style={[style, styles?.root]}
        {...props}
      />
    )
  },
) as OverridableComponent<DividerTypeMap>

if (__DEV__) {
  Divider.displayName = "Divider"
}
