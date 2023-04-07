import { View as RNView } from "react-native"
import { createView } from "../create-view"
import { OverridableComponent, OverrideProps, SxProps } from "../types"

export interface ViewTypeMap<
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

export type ViewProps<
  C extends React.ElementType = ViewTypeMap["defaultAs"],
  P = {},
> = OverrideProps<ViewTypeMap<P, C>, C>

export const View = createView({
  name: "View",
}) as OverridableComponent<ViewTypeMap>

View.displayName = "View"
