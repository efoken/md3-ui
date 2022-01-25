import { createView, SxProps } from "@md3-ui/styles"
import { OverridableComponent, OverrideProps } from "@md3-ui/utils"
import { View as RNView } from "react-native"

export interface BoxTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    children?: React.ReactNode
    sx?: SxProps
  }
  defaultAs: C
}

export type BoxProps<
  C extends React.ElementType = BoxTypeMap["defaultAs"],
  P = {},
> = OverrideProps<BoxTypeMap<P, C>, C>

export const Box = createView() as OverridableComponent<BoxTypeMap>
