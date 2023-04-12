import { View as RNView } from "react-native"
import { createBox } from "../create-box"
import { OverridableComponent, OverrideProps, SxProps } from "../types"

export interface BoxTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    /**
     * The content of the component.
     */
    children?: React.ReactNode
    /**
     * The surface tint color.
     */
    surfaceTintColor?: string
    /**
     * The system prop that allows defining system overrides as well as
     * additional styles.
     */
    sx?: SxProps
  }
  defaultAs: C
}

export type BoxProps<
  C extends React.ElementType = BoxTypeMap["defaultAs"],
  P = {},
> = OverrideProps<BoxTypeMap<P, C>, C>

export const Box = createBox({
  name: "Box",
}) as OverridableComponent<BoxTypeMap>

Box.displayName = "Box"
