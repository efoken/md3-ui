import {
  createView,
  OverridableComponent,
  OverrideProps,
  SxProps,
} from "@md3-ui/system"
import { __DEV__ } from "@md3-ui/utils"
import { View as RNView } from "react-native"

export interface BoxTypeMap<
  P = {},
  C extends React.ElementType = typeof RNView,
> {
  props: P & {
    children?: React.ReactNode
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

export const Box = createView() as OverridableComponent<BoxTypeMap>

if (__DEV__) {
  Box.displayName = "Box"
}
