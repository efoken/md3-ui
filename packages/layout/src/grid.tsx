import {
  handleBreakpoints,
  OverridableComponent,
  OverrideProps,
  OwnerStateProps,
  resolveBreakpointValues,
  ResponsiveValue,
  styled,
  SxProps,
  useThemeProps,
} from "@md3-ui/system"
import { Theme } from "@md3-ui/theme"
import { resolveProps } from "@md3-ui/utils"
import * as React from "react"
import {
  FlexStyle as RNFlexStyle,
  View as RNView,
  ViewStyle as RNViewStyle,
} from "react-native"

export interface GridTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    children?: React.ReactNode
    /** @default 12 */
    columns?: ResponsiveValue<number>
    columnSpacing?: ResponsiveValue<number>
    /** @default false */
    container?: boolean
    /** @default "row" */
    direction?: ResponsiveValue<RNFlexStyle["flexDirection"]>
    /** @default false */
    item?: boolean
    rowSpacing?: ResponsiveValue<number>
    /** @default 0 */
    spacing?: ResponsiveValue<number>
    /** @default false */
    span?: ResponsiveValue<"auto" | number | boolean>
    /**
     * Override or extend the styles applied to the component.
     */
    styles?: {
      root?: RNViewStyle
      container?: RNViewStyle
      item?: RNViewStyle
    }
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
    /** @default "wrap" */
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

  return theme.breakpoints.keys.reduce((finalStyles, breakpoint) => {
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
      return finalStyles
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
        return finalStyles
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
          moreStyles = {
            flexBasis: `calc(${width} + ${spacing}px)`,
            maxWidth: `calc(${width} + ${spacing}px)`,
          }
        }
      }

      styles = {
        flexBasis: width,
        flexGrow: 0,
        maxWidth: width,
        ...moreStyles,
      }
    }

    // No need for a media query for the first size
    if (theme.breakpoints.values[breakpoint] === 0) {
      Object.assign(finalStyles, styles)
    } else {
      // eslint-disable-next-line no-param-reassign
      finalStyles[theme.breakpoints.up(breakpoint)] = styles
    }
    return finalStyles
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
          styles.marginTop = -spacing
        }
        if (ownerState.item) {
          styles.paddingTop = spacing
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
          styles.width = `calc(100% + ${spacing}px)`
          styles.marginStart = -spacing
        }
        if (ownerState.item) {
          styles.paddingStart = spacing
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
