import {
  handleBreakpoints,
  OwnerStateProps,
  resolveBreakpointValues,
  ResponsiveValue,
  styled,
  useThemeProps,
} from "@md3-ui/system"
import { Theme } from "@md3-ui/theme"
import { OverridableComponent, OverrideProps } from "@md3-ui/utils"
import * as React from "react"
import {
  FlexStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"

export interface GridTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    children?: React.ReactNode
    /** @default false */
    compact: "auto" | number | boolean
    /** @default false */
    container?: boolean
    /** @default "row" */
    direction?: ResponsiveValue<FlexStyle["flexDirection"]>
    /** @default false */
    expanded: "auto" | number | boolean
    /** @default false */
    item?: boolean
    /** @default false */
    medium: "auto" | number | boolean
    /** @default 0 */
    spacing?: number
    styles?: {
      root?: RNViewStyle
      container?: RNViewStyle
      item?: RNViewStyle
    }
    /** @default "wrap" */
    wrap?: FlexStyle["flexWrap"]
  }
  defaultAs: C
}

export type GridProps<
  C extends React.ElementType = GridTypeMap["defaultAs"],
  P = {},
> = OverrideProps<GridTypeMap<P, C>, C>

export type GridStyleKey = keyof NonNullable<GridProps["styles"]>

export function generateDirection({
  theme,
  ownerState,
}: {
  theme: Theme
  ownerState: any
}) {
  const directionValues = resolveBreakpointValues<GridProps["direction"]>({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values,
  })

  return handleBreakpoints({ theme }, directionValues, (propValue) => {
    const output: any = {
      flexDirection: propValue,
    }

    if (propValue.toString().startsWith("column") && ownerState.item) {
      output.maxWidth = "none"
    }

    return output
  })
}

const GridRoot = styled(RNView, {
  name: "Grid",
  slot: "Root",
})<
  OwnerStateProps<Pick<GridProps, "container" | "direction" | "item" | "wrap">>
>(
  ({ ownerState }) => ({
    ...(ownerState.container && {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
    }),
    ...(ownerState.wrap !== "wrap" && {
      flexWrap: ownerState.wrap,
    }),
  }),
  generateDirection,
)

export const Grid = React.forwardRef<RNView, GridProps>((inProps, ref) => {
  const {
    children,
    // compact = false,
    container = false,
    direction = "row",
    // expanded = false,
    item = false,
    // medium = false,
    // spacing = 0,
    style,
    styles,
    wrap = "wrap",
    ...props
  } = useThemeProps({ name: "Grid", props: inProps })

  const ownerState = {
    container,
    direction,
    item,
    wrap,
  }

  return (
    <GridRoot
      ref={ref}
      ownerState={ownerState}
      style={[
        style,
        styles?.root,
        container && styles?.container,
        item && styles?.item,
      ]}
      {...props}
    >
      {children}
    </GridRoot>
  )
}) as OverridableComponent<GridTypeMap>
