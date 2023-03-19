import {
  handleBreakpoints,
  OverridableComponent,
  OverrideProps,
  OwnerStateProps,
  resolveBreakpointValues,
  ResponsiveValue,
  styled,
  StylesProp,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { Theme } from "@md3-ui/theme"
import { __DEV__, resolveProps } from "@md3-ui/utils"
import * as React from "react"
import {
  Platform,
  FlexStyle as RNFlexStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"

export interface GridTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
    /**
     * The number of columns.
     * @default 12
     */
    columns?: ResponsiveValue<number>
    /**
     * Defines the horizontal space between the type `item` components. It
     * overrides the value of the `spacing` prop.
     */
    columnSpacing?: ResponsiveValue<number>
    /**
     * If `true`, the component will have the flex _container_ behavior. You
     * should be wrapping _items_ with a _container_.
     * @default false
     */
    container?: boolean
    /**
     * Defines the `flex-direction` style property. It is applied for all screen
     * sizes.
     * @default "row"
     */
    direction?: ResponsiveValue<RNFlexStyle["flexDirection"]>
    /**
     * If `true`, the component will have the flex _item_ behavior. You should
     * be wrapping _items_ with a _container_.
     * @default false
     */
    item?: boolean
    /**
     * Defines the vertical space between the type `item` components. It
     * overrides the value of the `spacing` prop.
     */
    rowSpacing?: ResponsiveValue<number>
    /**
     * Defines the space between the type `item` components. It can only be used
     * on a type `container` component.
     * @default 0
     */
    spacing?: ResponsiveValue<number>
    /** @default false */
    span?: ResponsiveValue<"auto" | number | boolean>
    /**
     * Override or extend the styles applied to the component.
     */
    styles?: StylesProp<{
      root?: RNViewStyle
      container?: RNViewStyle
      item?: RNViewStyle
    }>
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
    /**
     * Defines the `flex-wrap` style property. It's applied for all screen
     * sizes.
     * @default "wrap"
     */
    wrap?: RNFlexStyle["flexWrap"]
  }
  defaultAs: C
}

export type GridProps<
  C extends React.ElementType = GridTypeMap["defaultAs"],
  P = {},
> = OverrideProps<GridTypeMap<P, C>, C>

export type GridStyleKey = keyof NonNullable<GridProps["styles"]>

export function generateGrid({
  theme,
  ownerState,
}: {
  theme: Theme
  ownerState: any
}) {
  let span: "auto" | number | boolean | undefined

  const spanValues = resolveBreakpointValues({
    values: ownerState.span as GridProps["span"],
    breakpoints: theme.breakpoints.values,
  })

  return theme.breakpoints.keys.reduce((acc, breakpoint) => {
    // Use side effect over immutability for better performance
    let styles: any = {}

    if (typeof spanValues === "object") {
      if (spanValues[breakpoint]) {
        span = spanValues[breakpoint]
      }
    } else if (spanValues != null) {
      span = spanValues
    }
    if (!span) {
      return acc
    }

    if (span === true) {
      // For the auto layouting
      styles = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%",
      }
    } else if (span === "auto") {
      styles = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto",
      }
    } else {
      const columnsValues = resolveBreakpointValues({
        values: ownerState.columns as GridProps["columns"],
        breakpoints: theme.breakpoints.values,
      })

      const columns =
        typeof columnsValues === "object"
          ? columnsValues[breakpoint]
          : columnsValues

      if (columns == null) {
        return acc
      }
      // Keep 7 significant numbers
      const width = `${Math.round((span / columns) * 10e7) / 10e5}%`
      let moreStyles = {}

      if (
        ownerState.container &&
        ownerState.item &&
        ownerState.columnSpacing !== 0
      ) {
        const spacing = theme.spacing(ownerState.columnSpacing)
        if (spacing !== 0) {
          moreStyles = Platform.OS === "web" && {
            flexBasis: `calc(${width} + ${spacing}px)`,
            maxWidth: `calc(${width} + ${spacing}px)`,
          }
        }
      }

      styles = {
        flexBasis: Platform.OS === "web" ? width : 0,
        flexGrow: Platform.OS === "web" ? 0 : 1,
        flexShrink: 1,
        maxWidth: width,
        ...moreStyles,
      }
    }

    // No need for a media query for the first size
    if (theme.breakpoints.values[breakpoint] === 0) {
      Object.assign(acc, styles)
    } else {
      acc[theme.breakpoints.up(breakpoint)] = styles
    }
    return acc
  }, {})
}

export function generateDirection({
  theme,
  ownerState,
}: {
  theme: Theme
  ownerState: any
}) {
  const directionValues = resolveBreakpointValues({
    values: ownerState.direction as GridProps["direction"],
    breakpoints: theme.breakpoints.values,
  })

  return handleBreakpoints({ theme }, directionValues, (propValue) => {
    const styles: any = {
      flexDirection: propValue,
    }

    if (propValue?.startsWith("column") && ownerState.item) {
      styles.maxWidth = "none"
    }

    return styles
  })
}

export function generateRowGap({
  theme,
  ownerState,
}: {
  theme: Theme
  ownerState: any
}) {
  if (ownerState.rowSpacing !== 0) {
    const rowSpacingValues = resolveBreakpointValues({
      values: ownerState.rowSpacing as GridProps["rowSpacing"],
      breakpoints: theme.breakpoints.values,
    })

    return handleBreakpoints({ theme }, rowSpacingValues, (propValue) => {
      const spacing = theme.spacing(propValue ?? 0)
      const styles: any = {}

      if (spacing !== 0) {
        if (ownerState.container) {
          // styles.marginTop = -spacing
          styles.rowGap = spacing
        }
        if (ownerState.item) {
          // styles.paddingTop = spacing
        }
      }

      return styles
    })
  }

  return {}
}

export function generateColumnGap({
  theme,
  ownerState,
}: {
  theme: Theme
  ownerState: any
}) {
  if (ownerState.columnSpacing !== 0) {
    const columnSpacingValues = resolveBreakpointValues({
      values: ownerState.columnSpacing as GridProps["columnSpacing"],
      breakpoints: theme.breakpoints.values,
    })

    return handleBreakpoints({ theme }, columnSpacingValues, (propValue) => {
      const spacing = theme.spacing(propValue ?? 0)
      const styles: any = {}

      if (spacing !== 0) {
        if (ownerState.container) {
          // styles.width = `calc(100% + ${spacing}px)`
          // styles.marginStart = -spacing
          styles.width = "100%"
          styles.columnGap = spacing
        }
        if (ownerState.item) {
          // styles.paddingStart = spacing
        }
      }

      return styles
    })
  }

  return {}
}

const GridRoot = styled(RNView, {
  name: "Grid",
  slot: "Root",
})<
  OwnerStateProps<
    Pick<
      GridProps,
      | "columns"
      | "columnSpacing"
      | "container"
      | "direction"
      | "item"
      | "rowSpacing"
      | "span"
      | "wrap"
    >
  >
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
  generateRowGap,
  generateColumnGap,
  generateGrid,
)

export const GridContext = React.createContext<
  Pick<GridProps, "columns" | "columnSpacing" | "rowSpacing">
>({})

export const Grid = React.forwardRef<RNView, GridProps>((inProps, ref) => {
  // Props priority: `inProps` > `contextProps` > `themeDefaultProps`
  const contextProps = React.useContext(GridContext)
  const resolvedProps = resolveProps<GridProps>(contextProps, inProps)

  const {
    children,
    columns = 12,
    columnSpacing: columnSpacingProp,
    container = false,
    direction = "row",
    item = false,
    rowSpacing: rowSpacingProp,
    spacing = 0,
    span = false,
    style,
    styles,
    wrap = "wrap",
    ...props
  } = useThemeProps({ name: "Grid", props: resolvedProps })

  const columnSpacing = columnSpacingProp ?? spacing
  const rowSpacing = rowSpacingProp ?? spacing

  const ownerState = {
    columns,
    columnSpacing,
    container,
    direction,
    item,
    rowSpacing,
    span,
    wrap,
  }

  const context = React.useMemo(
    () => (container ? { columns, columnSpacing, rowSpacing } : {}),
    [columns, columnSpacing, container, rowSpacing],
  )

  return (
    <GridContext.Provider value={context}>
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
    </GridContext.Provider>
  )
}) as OverridableComponent<GridTypeMap>

if (__DEV__) {
  Grid.displayName = "Grid"
}
