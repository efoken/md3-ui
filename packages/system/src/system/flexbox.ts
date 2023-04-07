import { compose, style } from "../style"
import { handleBreakpoints } from "./breakpoints"
import { getValue } from "./spacing"
import { FlexboxProps } from "./types"

const gap = (props: Record<string, any>) => {
  if (props.gap == null) {
    return null
  }
  const transformer = (value: any) => props.theme.spacing(value)
  const styleFromPropValue = (propValue?: any) => ({
    gap: getValue(transformer, propValue) as number | undefined,
  })
  return handleBreakpoints(props, props.gap, styleFromPropValue)
}

gap.filterProps = ["gap"] as (keyof FlexboxProps)[]

const columnGap = (props: Record<string, any>) => {
  if (props.columnGap == null) {
    return null
  }
  const transformer = (value: any) => props.theme.spacing(value)
  const styleFromPropValue = (propValue?: any) => ({
    columnGap: getValue(transformer, propValue) as number | undefined,
  })
  return handleBreakpoints(props, props.columnGap, styleFromPropValue)
}

columnGap.filterProps = ["columnGap"] as (keyof FlexboxProps)[]

const rowGap = (props: Record<string, any>) => {
  if (props.rowGap == null) {
    return null
  }
  const transformer = (value: any) => props.theme.spacing(value)
  const styleFromPropValue = (propValue?: any) => ({
    rowGap: getValue(transformer, propValue) as number | undefined,
  })
  return handleBreakpoints(props, props.rowGap, styleFromPropValue)
}

rowGap.filterProps = ["rowGap"] as (keyof FlexboxProps)[]

const alignContent = style({
  prop: "alignContent",
})

const alignItems = style({
  prop: "alignItems",
})

const alignSelf = style({
  prop: "alignSelf",
})

const flex = style({
  prop: "flex",
})

const flexBasis = style({
  prop: "flexBasis",
})

const flexDirection = style({
  prop: "flexDirection",
})

const flexGrow = style({
  prop: "flexGrow",
})

const flexShrink = style({
  prop: "flexShrink",
})

const flexWrap = style({
  prop: "flexWrap",
})

const justifyContent = style({
  prop: "justifyContent",
})

export const flexbox = compose<FlexboxProps>(
  gap,
  columnGap,
  rowGap,
  alignContent,
  alignItems,
  alignSelf,
  flex,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  justifyContent,
)
